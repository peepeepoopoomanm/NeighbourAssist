import test from 'node:test';import assert from 'node:assert/strict';
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
test('every service has clear steps, a caution and government-owned host',()=>{for(const s of Object.values(services)){assert.ok(s.steps.length>0);assert.ok(s.caution);assert.match(new URL(s.url).hostname,/\.(gov\.sg)$|^(www\.)?life\.gov\.sg$|^supportgowhere\.life\.gov\.sg$/)}});

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

import {audienceQuestionText,audienceReasonText,audienceSituationText,caregiverUi,hasCaregiverQuestion} from '../src/audience.ts';
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
   assert.match(new URL(guidance.source).hostname,/\.gov\.sg$|^www\.oneservice\.gov\.sg$/);
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
 assert.deepEqual(getQuestionIds('unsure',{}),['u_need','agency_status','contact']);
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
