import test from 'node:test';import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import{getQuestionIds,getRecommendations,services,categories}from '../src/engine.ts';
const rec=(cat,answers)=>getRecommendations(cat,answers).primary.id;
test('urgent financial assistance bypasses remaining financial questions',()=>{assert.deepEqual(getQuestionIds('financial',{f_urgent:'yes'}),['f_urgent','contact']);assert.equal(rec('financial',{f_urgent:'yes'}),'comcare_urgent')});
test('existing ComCare is referred back to existing SSO',()=>assert.equal(rec('financial',{f_urgent:'no',f_existing:'yes'}),'comcare_existing'));
test('long term unable to work is LTA enquiry',()=>assert.equal(rec('financial',{f_urgent:'no',f_existing:'no',f_duration:'long',f_work:'unable'}),'comcare_lta'));
test('temporary income problem suggests SMTA',()=>assert.equal(rec('financial',{f_urgent:'no',f_existing:'no',f_duration:'short',f_work:'temporary'}),'comcare_smta'));
test('unknown circumstances get safe SSO default',()=>assert.equal(rec('financial',{f_urgent:'unsure',f_existing:'unsure',f_duration:'unsure',f_work:'unsure'}),'sso'));
test('over 65 gets Silver Support secondary and not false qualification',()=>assert.deepEqual(getRecommendations('financial',{f_urgent:'no',f_existing:'no',f_age:'yes'}).secondary.map(x=>x.id),['silver']));
test('public-rental tenant wanting smaller home gets HDB rental transfer',()=>assert.equal(rec('housing',{h_type:'public_rental',h_goal:'smaller'}),'hdb_transfer'));
test('public rental arrears goes to tenant assistance',()=>assert.equal(rec('housing',{h_type:'public_rental',h_goal:'rent'}),'hdb_tenant'));
test('owned HDB rightsizing distinct from public rental transfer',()=>assert.equal(rec('housing',{h_type:'owner',h_goal:'smaller'}),'hdb_rightsize'));
test('unknown housing has safe HDB default',()=>assert.equal(rec('housing',{h_type:'unsure',h_goal:'other'}),'hdb_general'));
test('CPF age under 55 avoids withdrawal recommendation',()=>assert.equal(rec('cpf',{c_age:'no',c_goal:'withdraw'}),'cpf_general'));
test('CPF age 55 withdrawal guidance',()=>assert.equal(rec('cpf',{c_age:'yes',c_goal:'withdraw'}),'cpf_withdraw'));
test('medical clinic vs medical bills separated',()=>{assert.equal(rec('health',{m_type:'clinic'}),'chas');assert.equal(rec('health',{m_type:'bill'}),'medifund')});
test('municipal OneService referral',()=>assert.equal(rec('municipal',{}),'oneservice'));
test('all categories have official HTTPS referral targets',()=>{for(const c of categories){const r=getRecommendations(c.id,{});assert.ok(r.primary.url.startsWith('https://'));assert.ok(r.primary.caution)}});
test('every service has clear steps, a caution and an approved official-service host',()=>{for(const s of Object.values(services)){assert.ok(s.steps.length>0);assert.ok(s.caution);assert.match(new URL(s.url).hostname,/\.(gov\.sg)$|^(www\.)?life\.gov\.sg$|^(www\.)?aic\.sg$/)}});

test('existing ComCare flow skips unnecessary questions',()=>assert.deepEqual(getQuestionIds('financial',{f_urgent:'no',f_existing:'yes'}),['f_urgent','f_need','f_existing','agency_status','contact']));

// Accessibility and language coverage of all supported questions and referrals.
import {messages,questionText,serviceText,hasChineseQuestion,hasChineseService,situationText} from '../src/i18n.ts';
import {questions} from '../src/engine.ts';
test('financial questions identify the expense type without demanding amounts',()=>{assert.ok(getQuestionIds('financial',{f_urgent:'no'}).includes('f_need'));assert.equal(questions.f_need.options.some(o=>o.value==='food'),true)});
test('housing adds relevant context and rental difficulty questions',()=>{assert.deepEqual(getQuestionIds('housing',{h_goal:'smaller'}),['h_type','h_goal','h_context','h_household','agency_status','contact']);assert.deepEqual(getQuestionIds('housing',{h_goal:'rent'}),['h_type','h_goal','h_rent','h_household','agency_status','contact'])});
test('urgent financial flow stays short',()=>assert.deepEqual(getQuestionIds('financial',{f_urgent:'yes'}),['f_urgent','contact']));
test('every question and option has Simplified Chinese wording',()=>{for(const q of Object.values(questions)){assert.ok(hasChineseQuestion(q.id),`Missing question ${q.id}`);const tr=questionText(q,'zh');assert.ok(tr.title&&tr.title!==q.title,`Untranslated title ${q.id}`);for(let i=0;i<q.options.length;i++)assert.ok(tr.options[i].label!==q.options[i].label,`Untranslated option ${q.id}/${q.options[i].value}`)}});
test('every service has Chinese instructions, cautions and checklists',()=>{for(const s of Object.values(services)){assert.ok(hasChineseService(s.id),`Missing service ${s.id}`);const tr=serviceText(s,'zh');assert.equal(tr.steps.length,s.steps.length);assert.equal(tr.checklist.length,s.checklist.length);assert.ok(tr.name!==s.name,`Untranslated service ${s.id}`);for(const step of tr.steps)assert.ok(step.length>1)}});
test('both language packs share all interface labels',()=>assert.deepEqual(Object.keys(messages.en).sort(),Object.keys(messages.zh).sort()));
test('specific expense and housing concerns appear as plain-language prompts',()=>{assert.match(situationText({f_need:'food'},'en'),/food/);assert.match(situationText({h_context:'alone'},'zh'),/独居/)});

import {audienceQuestionText,contextualQuestionText,audienceReasonText,audienceSituationText,caregiverUi,hasCaregiverQuestion} from '../src/audience.ts';
test('self-service retains the original question wording',()=>{
 for(const lang of ['en','zh'])for(const q of Object.values(questions))
  assert.deepEqual(audienceQuestionText(q,lang,'self'),questionText(q,lang));
});
test('caregiver wording exists for every question in English and Chinese',()=>{
 for(const lang of ['en','zh'])for(const q of Object.values(questions)){
  assert.ok(hasCaregiverQuestion(q.id,lang),'Missing caregiver wording: '+lang+'/'+q.id);
  const cg=audienceQuestionText(q,lang,'caregiver');
  assert.ok(cg.title!==questionText(q,lang).title,'Caregiver title unchanged: '+lang+'/'+q.id);
  assert.deepEqual(cg.options.map(o=>o.value),q.options.map(o=>o.value));
 }
});
test('caregiver urgency and housing question refer to the person in need',()=>{
 const urgent=audienceQuestionText(questions.f_urgent,'en','caregiver');
 assert.match(urgent.title,/person you are helping/i);
 assert.match(urgent.options[0].label,/they need help/i);
 const housing=audienceQuestionText(questions.h_type,'en','caregiver');
 assert.match(housing.title,/person you are helping/i);
 assert.match(housing.options[0].label,/They live in/i);
 const chinese=audienceQuestionText(questions.f_urgent,'zh','caregiver');
 assert.match(chinese.title,/协助的人/);
 assert.match(chinese.options[0].label,/对方/);
});
test('caregiver results and contact scripts do not imply the helper is the applicant',()=>{
 assert.match(caregiverUi.en.phoneScriptUrgent,/helping someone/i);
 assert.match(caregiverUi.en.notice,/their situation/i);
 assert.match(caregiverUi.zh.guidanceIntro,/对方/);
 assert.match(audienceSituationText({f_need:'food'},'en','caregiver'),/helping someone/i);
 assert.match(audienceSituationText({f_need:'food'},'zh','caregiver'),/帮助一位/);
 assert.match(audienceReasonText('You said you rent an HDB public rental flat and want a smaller home.','en','caregiver'),/They live/i);
});
test('caregiver mode changes wording, not underlying referral decisions',()=>{
 const answers={f_urgent:'yes',contact:'phone'};
 assert.equal(getRecommendations('financial',answers).primary.id,'comcare_urgent');
 assert.equal(audienceQuestionText(questions.contact,'en','caregiver').options[1].value,'phone');
 assert.match(audienceQuestionText(questions.contact,'en','caregiver').options[1].label,/their behalf/i);
});

import {guides,getGuide} from '../src/journeys.ts';
test('all referral targets have complete bilingual contact-specific guidance',()=>{
 for(const service of Object.values(services)){
  assert.ok(guides[service.id], 'Missing guide for '+service.id);
  for(const language of ['en','zh'])for(const method of ['online','phone','inperson']){
   const guidance=getGuide(service,language,method);
   assert.ok(guidance.steps.length>=2,service.id+': '+language+'/'+method);
   for(const step of guidance.steps) assert.ok(step.trim().length>=(language==='zh'?12:20),service.id+' has too short a step');
   assert.ok(guidance.url.startsWith('https://')&&guidance.source.startsWith('https://'));
   assert.match(new URL(guidance.source).hostname,/\.gov\.sg$|^(www\.)?aic\.sg$/);
  }
 }
});
test('specific ComCare links and HDB rental transfer steps are explained',()=>{
 const c=getGuide(services.comcare_urgent,'en','online');
 assert.match(c.steps.join(' '),/Apply for IA/);
 const h=getGuide(services.hdb_transfer,'en','online');
 assert.match(h.steps.join(' '),/zone.*HDB Branch/i);
 assert.match(h.steps.join(' '),/FormSG/);
 assert.match(h.steps.join(' '),/Singpass/);
 assert.match(getGuide(services.hdb_transfer,'zh','online').steps.join(' '),/FormSG/);
});
test('CPF withdrawal warns about official dashboard and future implications',()=>{
 const c=getGuide(services.cpf_withdraw,'en','online');
 assert.match(c.steps.join(' '),/Retirement Dashboard/);
 assert.match(c.steps.join(' '),/cooling-off/);
});
test('MediFund guidance does not invent an online application',()=>{
 const c=getGuide(services.medifund,'en','online');
 assert.match(c.steps.join(' '),/not a general self-service/);
 assert.match(c.steps.join(' '),/Medical Social Worker/);
});
test('guides include correct official phone contacts where supported',()=>{
 assert.equal(getGuide(services.hdb_transfer,'en','phone').phone,'6225-5432');
 assert.equal(getGuide(services.cpf_withdraw,'en','phone').phone,'1800-227-1188');
 assert.equal(getGuide(services.chas,'en','phone').phone,'1800-275-2427');
 assert.equal(getGuide(services.comcare_smta,'en','phone').phone,'1800-222-0000');
});
test('unsure method presents multiple contact-route choices',()=>{
 for(const service of Object.values(services)){
  const a=getGuide(service,'en','unsure');
  assert.equal(a.steps.length,3);
 }
});

import {getNextPathway} from '../src/engine.ts';
import {getMpsPreparation,PARLIAMENT_MP_LOOKUP} from '../src/mps.ts';
test('urgent financial needs still bypass history and MPS questions',()=>{
 assert.deepEqual(getQuestionIds('financial',{f_urgent:'yes'}),['f_urgent','contact']);
 assert.equal(getNextPathway('financial',{f_urgent:'yes',agency_status:'rejected'}),'urgent');
});
test('rejected housing cases receive a review question while first-time cases do not',()=>{
 const first=getQuestionIds('housing',{h_type:'public_rental',h_goal:'smaller',agency_status:'first'});
 const rejected=getQuestionIds('housing',{h_type:'public_rental',h_goal:'smaller',agency_status:'rejected'});
 assert.ok(first.includes('h_tenure')); assert.ok(first.includes('h_household'));
 assert.ok(!first.includes('h_review')); assert.ok(rejected.includes('h_review'));
 assert.equal(rejected.at(-1),'contact');
});
test('rental tenure information does not automatically decide HDB eligibility',()=>{
 assert.equal(rec('housing',{h_type:'public_rental',h_goal:'smaller',h_tenure:'under2'}),'hdb_transfer');
 assert.equal(rec('housing',{h_type:'public_rental',h_goal:'smaller',h_tenure:'2plus'}),'hdb_transfer');
});
test('different agency histories lead to safe human-assistance pathways',()=>{
 assert.equal(getNextPathway('housing',{agency_status:'first'}),'agency');
 assert.equal(getNextPathway('housing',{agency_status:'waiting'}),'followup');
 assert.equal(getNextPathway('housing',{agency_status:'rejected'}),'review');
 assert.equal(getNextPathway('housing',{agency_status:'unresolved'}),'review');
 assert.equal(getNextPathway('municipal',{n_report:'yes'}),'review');
});
test('CPF medical municipal and unsure flows ask meaningful follow-up questions',()=>{
 assert.ok(getQuestionIds('cpf',{}).includes('c_concern'));
 assert.ok(getQuestionIds('health',{m_type:'bill'}).includes('m_support'));
 assert.ok(!getQuestionIds('health',{m_type:'clinic'}).includes('m_support'));
 assert.deepEqual(getQuestionIds('municipal',{}),['n_issue','n_report','contact']);
 assert.deepEqual(getQuestionIds('unsure',{}),['u_start']);
});
test('unsure users are sent toward the responsible agency without false assessment',()=>{
 assert.equal(rec('unsure',{u_need:'housing'}),'hdb_general');
 assert.equal(rec('unsure',{u_need:'financial'}),'sso');
 assert.equal(rec('unsure',{u_need:'cpf'}),'cpf_general');
 assert.equal(rec('unsure',{u_need:'health'}),'health_general');
 assert.equal(rec('unsure',{u_need:'municipal'}),'oneservice');
});
test('MPS notes preserve only structured selections and can be produced in both languages',()=>{
 const a={h_type:'public_rental',h_goal:'smaller',h_tenure:'under2',agency_status:'rejected',h_review:'mobility',contact:'online'};
 const en=getMpsPreparation('housing',a,'en','self');
 const zh=getMpsPreparation('housing',a,'zh','caregiver');
 assert.match(en.topic,/Housing/);assert.match(zh.topic,/住房/);
 assert.ok(en.items.some(i=>i.id==='agency_status'));
 assert.ok(zh.items.some(i=>i.id==='h_tenure'));
 assert.ok(!en.items.some(i=>i.id==='contact'));
 assert.match(en.caution,/not an official MP appeal letter/);
 assert.match(zh.audience,/为他人/);
 assert.match(en.pathway,/rejection|unresolved/i);
 assert.match(PARLIAMENT_MP_LOOKUP,/parliament.gov.sg/);
});
test('MPS case notes do not expose unknown values or include inputs for personal identifiers',()=>{
 const brief=getMpsPreparation('housing',{h_type:'public_rental',h_goal:'smaller',agency_status:'rejected',contact:'phone',nric:'S1234567A'},'en','self');
 assert.ok(!JSON.stringify(brief).includes('S1234567A'));
 assert.ok(brief.items.every(x=>x.label&&x.answer));
});

test('Silver Support is only suggested when age 65 or above is indicated',()=>{
 assert.equal(rec('cpf',{c_age:'no',c_goal:'support'}),'cpf_general');
 assert.equal(rec('cpf',{c_age:'yes',c_goal:'support',c_65:'no'}),'cpf_general');
 assert.equal(rec('cpf',{c_age:'yes',c_goal:'support',c_65:'unsure'}),'cpf_general');
 assert.equal(rec('cpf',{c_age:'yes',c_goal:'support',c_65:'yes'}),'silver');
 assert.ok(getQuestionIds('cpf',{c_age:'yes',c_goal:'support'}).includes('c_65'));
 assert.ok(!getQuestionIds('cpf',{c_age:'no',c_goal:'support'}).includes('c_65'));
});

test('MPS caregiver summaries use third-person language in both languages',()=>{
 const answers={h_type:'public_rental',h_goal:'smaller',h_context:'alone',h_tenure:'2plus',h_household:'alone',agency_status:'rejected',h_review:'mobility',contact:'phone'};
 const en=getMpsPreparation('housing',answers,'en','caregiver');
 const zh=getMpsPreparation('housing',answers,'zh','caregiver');
 const englishHousing=en.items.find(x=>x.id==='h_type');
 const chineseHousing=zh.items.find(x=>x.id==='h_type');
 assert.match(englishHousing.label,/person you are helping/i);
 assert.match(englishHousing.answer,/They live/);
 assert.match(chineseHousing.label,/协助的人/);
 assert.match(chineseHousing.answer,/对方/);
});
test('MPS notes discard invalid option values rather than echoing unknown data',()=>{
 const notes=getMpsPreparation('housing',{h_type:'public_rental',h_goal:'invalid-unrecognised',agency_status:'first',contact:'phone'},'en','self');
 assert.ok(!JSON.stringify(notes).includes('invalid-unrecognised'));
 assert.ok(notes.items.some(x=>x.id==='h_type'));
});


// Fines and appeals: agency-specific information, not waiver predictions or legal advice.
test('fines and appeals category is available with an official safe default',()=>{
 assert.ok(categories.some(c=>c.id==='fines'));
 assert.equal(rec('fines',{}),'fine_unknown');
 assert.equal(rec('unsure',{u_need:'fines'}),'fine_unknown');
});
test('HDB parking notices use HDB appeal guidance, not URA',()=>{
 assert.equal(rec('fines',{p_issuer:'hdb',p_stage:'notice',p_goal:'appeal'}),'fine_hdb');
 assert.match(services.fine_hdb.url,/hdb\.gov\.sg/);
});
test('URA parking notices use URA appeals instead of HDB',()=>{
 assert.equal(rec('fines',{p_issuer:'ura',p_stage:'notice'}),'fine_ura');
 assert.match(services.fine_ura.url,/ura\.gov\.sg/);
});
test('Traffic Police notices use SPF appeal requirements',()=>{
 assert.equal(rec('fines',{p_issuer:'tp',p_stage:'notice'}),'fine_tp');
 assert.match(services.fine_tp.caution,/court date/i);
});
test('LTA and active mobility penalties do not claim the ordinary vehicle appeal form always applies',()=>{
 assert.equal(rec('fines',{p_issuer:'lta',p_stage:'notice'}),'fine_lta');
 assert.match(getGuide(services.fine_lta,'en','online').steps.join(' '),/do not assume an e-scooter/i);
});
test('unidentified or other issuing agency gets a non-prescriptive directory',()=>{
 for(const p_issuer of ['other','unsure',undefined]){
  assert.equal(rec('fines',{p_issuer,p_stage:'notice'}),'fine_unknown');
 }
 assert.match(services.fine_unknown.caution,/no universal/i);
});
test('court summons overrides every issuing agency and does not delay the court route',()=>{
 for(const p_issuer of ['hdb','ura','tp','lta','other','unsure']){
  assert.equal(rec('fines',{p_issuer,p_stage:'court',agency_status:'waiting'}),'fine_court');
  assert.deepEqual(getQuestionIds('fines',{p_issuer,p_stage:'court'}),['p_issuer','p_stage','contact']);
 }
 assert.match(services.fine_court.caution,/Do not miss court attendance/);
 assert.equal(getNextPathway('fines',{p_stage:'court',agency_status:'waiting'}),'agency');
});
test('fines appeal reason is conditional and does not collect identifying information',()=>{
 assert.deepEqual(getQuestionIds('fines',{p_stage:'notice',p_goal:'appeal'}),['p_issuer','p_stage','p_goal','p_reason','agency_status','contact']);
 assert.ok(!getQuestionIds('fines',{p_stage:'notice',p_goal:'pay'}).includes('p_reason'));
 assert.ok(!getQuestionIds('fines',{p_stage:'notice',p_goal:'hardship'}).includes('p_reason'));
 assert.ok(!getQuestionIds('fines',{p_stage:'notice',p_goal:'status'}).includes('p_reason'));
 for(const q of ['p_issuer','p_stage','p_goal','p_reason']){
  assert.ok(!/NRIC number|address|full name|notice number/i.test(questions[q].title));
 }
});
test('fine follow-up and rejected appeals reuse safe agency history pathways',()=>{
 assert.equal(getNextPathway('fines',{p_stage:'notice',agency_status:'waiting'}),'followup');
 assert.equal(getNextPathway('fines',{p_stage:'notice',agency_status:'rejected'}),'review');
});
test('HDB, URA and Traffic Police official guidance does not promise first-time waivers',()=>{
 for(const id of ['fine_hdb','fine_ura','fine_tp']){
  assert.match(services[id].description+' '+services[id].caution,/first.time|first offence|first-time/i);
  assert.match(services[id].caution,/not|do not|does not/i);
 }
});
test('fine questions and answers have Chinese translations and caregiver forms',()=>{
 for(const id of ['p_issuer','p_stage','p_goal','p_reason']){
  assert.ok(hasChineseQuestion(id));
  const zh=questionText(questions[id],'zh');
  assert.notEqual(zh.title,questions[id].title);
  for(const option of zh.options)assert.ok(/[^\x00-\x7F]/.test(option.label));
  for(const lang of ['en','zh']){
   assert.ok(hasCaregiverQuestion(id,lang));
   const c=audienceQuestionText(questions[id],lang,'caregiver');
   assert.notEqual(c.title,questionText(questions[id],lang).title);
   assert.deepEqual(c.options.map(o=>o.value),questions[id].options.map(o=>o.value));
  }
 }
});
test('all fine services provide bilingual source-linked online phone and in-person guidance',()=>{
 for(const id of ['fine_hdb','fine_ura','fine_tp','fine_lta','fine_court','fine_unknown']){
  assert.ok(hasChineseService(id));
  for(const language of ['en','zh']){
   const translation=serviceText(services[id],language);
   assert.equal(translation.checklist.length,services[id].checklist.length);
   for(const method of ['online','phone','inperson']){
    const g=getGuide(services[id],language,method);
    assert.ok(g.steps.length>=2);
    assert.match(new URL(g.source).hostname,/\.gov\.sg$/);
   }
  }
 }
});
test('MPS preparation for court summonses explicitly preserves mandatory attendance',()=>{
 const a={p_issuer:'tp',p_stage:'court',contact:'online'};
 const en=getMpsPreparation('fines',a,'en','self');
 const zh=getMpsPreparation('fines',a,'zh','caregiver');
 assert.match(en.pathway,/court summons/i);
 assert.match(en.preparation.join(' '),/court instructions/i);
 assert.match(zh.pathway,/法庭/);
 assert.ok(zh.items.some(i=>i.id==='p_stage'));
 assert.ok(!en.items.some(i=>i.id==='contact'));
});
test('MPS fine notes filter unrecognised and sensitive case entries',()=>{
 const a={p_issuer:'ura',p_stage:'notice',p_goal:'appeal',p_reason:'first',agency_status:'first',nric:'S0000000X',case_details:'identifying info'};
 const brief=getMpsPreparation('fines',a,'en','caregiver');
 assert.equal(brief.items.find(i=>i.id==='p_reason')?.answer,'It was their first offence or an honest mistake');
 assert.ok(!JSON.stringify(brief).includes('S0000000X'));
 assert.ok(!JSON.stringify(brief).includes('identifying info'));
});

test('payment enquiries use agency payment pages rather than appeal forms',()=>{
 const expected={
  fine_hdb:/hdb\.gov\.sg\/parking\/parking-offences\/pay-parking-fines/,
  fine_ura:/ura\.gov\.sg\/car-parks\/parking-offences\/payment-of-fines/,
  fine_tp:/police\.gov\.sg\/E-Services\/Check-Outstanding-Traffic-Offences-and-Pay-Traffic-Fines/
 };
 for(const [id,pattern] of Object.entries(expected)){
  const pay=getGuide(services[id],'en','online','pay');
  const appeal=getGuide(services[id],'en','online','appeal');
  assert.match(pay.url,pattern);
  assert.match(pay.source,pattern);
  assert.notEqual(pay.url,appeal.url,'Payment must not open the appeal page: '+id);
  assert.match(pay.steps.join(' '),/pay|payment/i);
  assert.match(getGuide(services[id],'zh','online','pay').steps.join(' '),/缴费|缴交|付款/);
 }
});
test('LTA active mobility gets no invented specialist fine payment route',()=>{
 const a=getGuide(services.fine_lta,'en','online','pay');
 assert.equal(a.url,getGuide(services.fine_lta,'en','online','appeal').url);
 assert.match(a.steps.join(' '),/e-scooter|active-mobility/i);
});
test('fines results expose deadline safeguards and chosen payment goal to the UI',()=>{
 const source=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
 assert.match(source,/category==='fines'\?answers\.p_goal/);
 assert.match(source,/t\.fineCourtWarning/);
 assert.match(source,/t\.fineCourtPathway/);
 assert.match(source,/t\.finePaidWarning/);
 assert.match(source,/t\.fineDeadlineWarning/);
});

test('URA and Traffic Police appeal status enquiries open official status services',()=>{
 const u=getGuide(services.fine_ura,'en','online','status');
 const p=getGuide(services.fine_tp,'en','online','status');
 assert.match(u.url,/parking\.ura\.gov\.sg\/car-parks-portal\/eAppeal\/appeal-status/);
 assert.match(p.url,/police\.gov\.sg\/E-Services\/Check-Status-of-Appeal-Against-Traffic-Offence/);
 assert.match(getGuide(services.fine_tp,'zh','online','status').steps.join(' '),/参考编号/);
});
test('payment hardship enquiries direct users to official contacts, not an appeal form',()=>{
 for(const id of ['fine_hdb','fine_ura','fine_tp','fine_lta']){
  const hardship=getGuide(services[id],'en','online','hardship');
  assert.notEqual(hardship.url,getGuide(services[id],'en','online','appeal').url);
  assert.match(hardship.steps.join(' '),/payment|paying|fine|deadline/i);
 }
});

test('homepage includes nine distinct public-service categories',()=>{
 assert.equal(categories.length,9);
 assert.equal(new Set(categories.map(c=>c.id)).size,9);
 assert.ok(categories.some(c=>c.id==='employment'));
 assert.ok(categories.some(c=>c.id==='family'));
});
test('work and employment: unpaid salary routes to official TADM guidance',()=>{
 assert.equal(rec('employment',{w_issue:'salary',w_status:'current'}),'work_salary');
 assert.equal(rec('employment',{w_issue:'salary',w_status:'left'}),'work_salary');
 assert.match(services.work_salary.url,/mom\.gov\.sg/);
});
test('work and employment: dismissal preserves status and short deadline question',()=>{
 assert.deepEqual(getQuestionIds('employment',{w_issue:'dismissal'}),['w_issue','w_status','agency_status','contact']);
 assert.deepEqual(getQuestionIds('employment',{w_issue:'dismissal',w_status:'current'}),['w_issue','w_status','agency_status','contact']);
 assert.deepEqual(getQuestionIds('employment',{w_issue:'dismissal',w_status:'left'}),['w_issue','w_status','w_recency','agency_status','contact']);
 assert.equal(rec('employment',{w_issue:'dismissal',w_status:'left'}),'work_dismissal');
 assert.match(services.work_dismissal.caution,/deadline/i);
});
test('work and employment: salary, discrimination and injury have different channels',()=>{
 assert.equal(rec('employment',{w_issue:'salary'}),'work_salary');
 assert.equal(rec('employment',{w_issue:'fairness'}),'work_fairness');
 assert.equal(rec('employment',{w_issue:'injury'}),'work_injury');
 assert.match(services.work_fairness.description,/TAFEP/);
 assert.match(services.work_injury.url,/work-injury-compensation/);
});
test('work and employment: unknown issue uses MOM advisory directory',()=>{
 assert.equal(rec('employment',{w_issue:'other'}),'work_general');
 assert.equal(rec('employment',{}),'work_general');
 assert.equal(rec('unsure',{u_need:'employment'}),'work_general');
});
test('workplace harassment uses verified TAFEP advisory phone',()=>{
 assert.equal(getGuide(services.work_fairness,'en','phone').phone,'6838 0969');
 assert.match(getGuide(services.work_fairness,'en','phone').steps.join(' '),/TAFEP/);
});
test('TADM guides distinguish salary and wrongful dismissal claim deadlines',()=>{
 assert.match(getGuide(services.work_salary,'en','online').steps.join(' '),/one-year/);
 assert.match(getGuide(services.work_salary,'en','online').steps.join(' '),/six months/);
 assert.match(getGuide(services.work_dismissal,'en','online').steps.join(' '),/one month/);
 assert.match(services.work_dismissal.steps.join(' '),/one month/);
});
test('employment questions do not request employer names or salary amounts as inputs',()=>{
 for(const id of ['w_issue','w_status','w_recency']){
  const q=questions[id];
  assert.ok(q.options.every(x=>typeof x.value==='string'&&typeof x.label==='string'));
  assert.doesNotMatch(q.title,/enter.*name|type.*salary|enter.*number/i);
 }
});
test('family urgency: immediate danger routes directly to Police 999',()=>{
 assert.deepEqual(getQuestionIds('family',{family_safety:'danger'}),['family_safety']);
 assert.equal(rec('family',{family_safety:'danger',family_issue:'childcare'}),'family_danger');
 assert.equal(services.family_danger.phone,'999');
 assert.equal(getNextPathway('family',{family_safety:'danger'}),'urgent');
 assert.match(services.family_danger.caution,/Do not wait/i);
});
test('family possible abuse uses 24-hour NAVH and bypasses routine questions',()=>{
 assert.deepEqual(getQuestionIds('family',{family_safety:'concern'}),['family_safety']);
 assert.equal(rec('family',{family_safety:'concern',family_issue:'divorce'}),'family_protection');
 assert.equal(services.family_protection.phone,'1800-777-0000');
 assert.match(getGuide(services.family_protection,'en','online').steps.join(' '),/Police 999/);
});
test('family ordinary help requests ask topic and agency history',()=>{
 assert.deepEqual(getQuestionIds('family',{family_safety:'no'}),['family_safety','family_issue','agency_status','contact']);
 assert.deepEqual(getQuestionIds('family',{family_safety:'unsure'}),['family_safety','family_issue','agency_status','contact']);
});
test('family relationships and divorce go to FAM rather than ComCare',()=>{
 assert.equal(rec('family',{family_safety:'no',family_issue:'relationship'}),'family_fam');
 assert.equal(rec('family',{family_safety:'no',family_issue:'divorce'}),'family_fam');
 assert.match(services.family_fam.url,/msf\.gov\.sg\/what-we-do\/fam/);
});
test('family caregiving goes to AIC instead of generic government navigation',()=>{
 assert.equal(rec('family',{family_safety:'no',family_issue:'caregiving'}),'family_caregiving');
 assert.equal(services.family_caregiving.phone,'1800-650-6060');
 assert.match(new URL(services.family_caregiving.url).hostname,/aic\.sg$/);
});
test('family preschool support uses LifeSG or ECDA channel without fake eligibility',()=>{
 assert.equal(rec('family',{family_safety:'no',family_issue:'childcare'}),'family_childcare');
 assert.match(services.family_childcare.url,/life\.gov\.sg/);
 assert.match(getGuide(services.family_childcare,'en','online').steps.join(' '),/Form 1/);
 assert.match(services.family_childcare.caution,/not an eligibility/i);
});
test('family broad social difficulties go to FSC with optional existing SSO',()=>{
 const x=getRecommendations('family',{family_safety:'no',family_issue:'financial'});
 assert.equal(x.primary.id,'family_fsc');
 assert.deepEqual(x.secondary.map(s=>s.id),['sso']);
 assert.equal(rec('family',{family_safety:'no',family_issue:'other'}),'family_fsc');
 assert.equal(rec('unsure',{u_need:'family'}),'family_fsc');
});
test('family emergency directions avoid misleading MPS and ComCare advice in UI',()=>{
 const app=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
 assert.match(app,/t\.familySafetyBanner/);
 assert.match(app,/t\.emergencyPoliceAction/);
 assert.match(app,/t\.emergencyPoliceSms/);
 assert.match(app,/t\.familyDangerPathway/);
 assert.match(app,/t\.familyConcernPathway/);
 assert.match(app,/category==='family'&&\['danger','concern'\]\.includes\(answers\.family_safety\)/);
 assert.match(app,/tel:999/);
});
test('all new work and family services have Chinese translations and three contact routes',()=>{
 const ids=['work_salary','work_dismissal','work_fairness','work_injury','work_general','family_danger','family_protection','family_fam','family_fsc','family_caregiving','family_childcare'];
 for(const id of ids){
  assert.ok(hasChineseService(id),id);
  assert.ok(guides[id],id);
  const zh=serviceText(services[id],'zh');
  assert.notEqual(zh.name,services[id].name);
  assert.equal(zh.steps.length,services[id].steps.length);
  assert.equal(zh.checklist.length,services[id].checklist.length);
  for(const lang of ['en','zh'])for(const method of ['online','phone','inperson']){
   assert.ok(getGuide(services[id],lang,method).steps.length>=2,id+' '+lang+'/'+method);
  }
 }
});
test('work and family questions have complete Chinese and caregiver wording',()=>{
 for(const id of ['w_issue','w_status','w_recency','family_safety','family_issue']){
  assert.ok(hasChineseQuestion(id));
  assert.notEqual(questionText(questions[id],'zh').title,questions[id].title);
  for(const lang of ['en','zh']){
   assert.ok(hasCaregiverQuestion(id,lang),lang+'/'+id);
   const a=audienceQuestionText(questions[id],lang,'caregiver');
   assert.notEqual(a.title,questionText(questions[id],lang).title);
   assert.deepEqual(a.options.map(o=>o.value),questions[id].options.map(o=>o.value));
  }
 }
});
test('MPS notes preserve only broad work and family selections',()=>{
 const workStatus=contextualQuestionText(questions.agency_status,'en','caregiver','employment');
 const familyStatus=contextualQuestionText(questions.agency_status,'zh','self','family');
 assert.match(workStatus.title,/TADM/);
 assert.match(workStatus.title,/person you are helping/);
 assert.match(familyStatus.title,/家庭服务中心/);
 assert.notEqual(workStatus.title,questions.agency_status.title);

 const a=getMpsPreparation('employment',{w_issue:'salary',w_status:'left',agency_status:'rejected',contact:'online',person_name:'private name'},'en','caregiver');
 const b=getMpsPreparation('family',{family_safety:'no',family_issue:'caregiving',agency_status:'first',contact:'phone',private_details:'private details'},'zh','caregiver');
 assert.ok(a.items.some(x=>x.id==='w_status'));
 assert.ok(b.items.some(x=>x.id==='family_issue'));
 assert.ok(!JSON.stringify(a).includes('private name'));
 assert.ok(!JSON.stringify(b).includes('private details'));
 assert.ok(!a.items.some(x=>x.id==='contact'));
});
test('family emergency MPS notes do not hide safety priority',()=>{
 const a=getMpsPreparation('family',{family_safety:'danger'},'en','self');
 assert.match(a.items[0].answer,/immediate danger/i);
 assert.ok(!JSON.stringify(a).includes('NRIC'));
});

test('unknown-issue entry first asks about the situation, not a guessed agency',()=>{
 assert.deepEqual(getQuestionIds('unsure',{}),['u_start']);
 assert.equal(questions.u_start.options.length,6);
 assert.ok(questions.u_start.options.some(x=>x.value==='other'));
});
test('unknown-issue known topic provides normal category choice without unrelated notice questions',()=>{
 assert.deepEqual(getQuestionIds('unsure',{u_start:'topic'}),['u_start','u_need','agency_status','contact']);
 assert.equal(rec('unsure',{u_start:'topic',u_need:'financial'}),'sso');
 assert.equal(rec('unsure',{u_start:'topic',u_need:'housing'}),'hdb_general');
 assert.equal(rec('unsure',{u_start:'topic',u_need:'unsure'}),'gov_directory');
});
test('unknown-issue government letter leads to sender and deadline verification',()=>{
 const a={u_start:'letter',u_agency_known:'unsure',u_deadline:'yes'};
 assert.deepEqual(getQuestionIds('unsure',a),['u_start','u_agency_known','u_deadline','agency_status','contact']);
 assert.equal(rec('unsure',a),'gov_letter');
 assert.match(services.gov_letter.url,/gov\.sg\/trusted-sites/);
 assert.match(services.gov_letter.caution,/court attendance/);
});
test('unknown-issue rejected application is not treated as a universal appeal',()=>{
 assert.equal(rec('unsure',{u_start:'application',agency_status:'rejected'}),'gov_application');
 assert.equal(getNextPathway('unsure',{u_start:'application',agency_status:'rejected'}),'review');
 assert.match(services.gov_application.caution,/no universal appeals form/i);
});
test('unknown-issue unanswered agency request uses agency follow-up rather than LifeSG catch-all',()=>{
 assert.equal(rec('unsure',{u_start:'followup',agency_status:'waiting'}),'gov_followup');
 assert.equal(getNextPathway('unsure',{u_start:'followup',agency_status:'waiting'}),'followup');
 assert.match(services.gov_followup.url,/sgdi\.gov\.sg/);
});
test('totally unknown issue ends in a short official-directory route',()=>{
 assert.deepEqual(getQuestionIds('unsure',{u_start:'other'}),['u_start','contact']);
 assert.equal(rec('unsure',{u_start:'other'}),'gov_directory');
 assert.match(services.gov_directory.caution,/not a universal government appeal/i);
});
test('suspicious message uses ScamShield and shortens dangerous exposure',()=>{
 const base={u_start:'suspicious'};
 assert.deepEqual(getQuestionIds('unsure',{...base,u_scam_loss:'no'}),['u_start','u_scam_loss','contact']);
 assert.equal(rec('unsure',{...base,u_scam_loss:'no'}),'scamshield_check');
 assert.equal(services.scamshield_check.phone,'1799');
 assert.match(services.scamshield_check.url,/scamshield\.gov\.sg/);
});
test('suspected scam monetary loss skips the contact-choice question',()=>{
 const a={u_start:'suspicious',u_scam_loss:'yes'};
 assert.deepEqual(getQuestionIds('unsure',a),['u_start','u_scam_loss']);
 assert.equal(rec('unsure',a),'scamshield_loss');
 assert.equal(getNextPathway('unsure',a),'urgent');
 assert.match(getGuide(services.scamshield_loss,'en','phone').steps[0],/Call your bank immediately/);
});
test('urgent scam result cannot encourage waiting for an MP or calling ComCare',()=>{
 const app=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
 assert.match(app,/service\.id==='scamshield_loss'\)return/);
 assert.match(app,/t\.unsureScamUrgent/);
 assert.match(app,/category==='unsure'&&answers\.u_start==='suspicious'/);
 assert.match(services.scamshield_loss.steps[0],/Contact your bank immediately/);
});
test('notice deadline warnings, agency context and topic handoff are rendered',()=>{
 const app=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
 assert.match(app,/t\.unsureDeadlineAlert/);
 assert.match(app,/t\.unsureDeadlineCheck/);
 assert.match(app,/t\.unsureAgencyKnown/);
 assert.match(app,/t\.unsureAgencyUnknown/);
 assert.match(app,/t\.unsureExploreTopic/);
});
test('new unknown-issue questions are fully bilingual with caregiver alternatives',()=>{
 for(const id of ['u_start','u_agency_known','u_deadline','u_scam_loss']){
  assert.ok(hasChineseQuestion(id),id);
  assert.notEqual(questionText(questions[id],'zh').title,questions[id].title);
  for(const lang of ['en','zh']){
   assert.ok(hasCaregiverQuestion(id,lang),id+'/'+lang);
   const x=audienceQuestionText(questions[id],lang,'caregiver');
   assert.notEqual(x.title,questionText(questions[id],lang).title);
   assert.deepEqual(x.options.map(y=>y.value),questions[id].options.map(y=>y.value));
  }
 }
});
test('all new directories and ScamShield records have complete bilingual guides',()=>{
 for(const id of ['gov_directory','gov_letter','gov_application','gov_followup','scamshield_check','scamshield_loss']){
  assert.ok(hasChineseService(id));
  assert.notEqual(serviceText(services[id],'zh').name,services[id].name);
  for(const lang of ['en','zh'])for(const method of ['online','phone','inperson']){
   const x=getGuide(services[id],lang,method);
   assert.ok(x.steps.length>=2,id+'/'+lang+'/'+method);
   assert.ok(x.url.startsWith('https://'));
   assert.match(new URL(x.source).hostname,/\.gov\.sg$/);
  }
 }
});
test('unsure agency history references its own agency rather than HDB and CPF examples',()=>{
 const en=contextualQuestionText(questions.agency_status,'en','self','unsure');
 const zh=contextualQuestionText(questions.agency_status,'zh','caregiver','unsure');
 assert.match(en.title,/letter or enquiry/i);
 assert.match(zh.title,/协助的人/);
 assert.doesNotMatch(en.hint,/HDB|CPF/);
});
test('MPS notes protect official deadlines and do not show irrelevant ComCare advice for scams',()=>{
 const a=getMpsPreparation('unsure',{u_start:'letter',u_deadline:'yes',u_agency_known:'yes'},'en','self');
 const b=getMpsPreparation('unsure',{u_start:'suspicious',u_scam_loss:'yes'},'en','caregiver');
 assert.match(a.preparation[0],/deadline/i);
 assert.match(b.pathway,/ScamShield/);
 assert.doesNotMatch(b.pathway,/ComCare/);
 assert.ok(!b.items.some(x=>x.id==='u_deadline'));
});
