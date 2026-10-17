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

test('existing ComCare flow skips unnecessary questions',()=>assert.deepEqual(getQuestionIds('financial',{f_urgent:'no',f_existing:'yes'}),['f_urgent','f_need','f_existing','contact']));

// Accessibility and language coverage of all supported questions and referrals.
import {messages,questionText,serviceText,hasChineseQuestion,hasChineseService,situationText} from '../src/i18n.ts';
import {questions} from '../src/engine.ts';
test('financial questions identify the expense type without demanding amounts',()=>{assert.ok(getQuestionIds('financial',{f_urgent:'no'}).includes('f_need'));assert.equal(questions.f_need.options.some(o=>o.value==='food'),true)});
test('housing adds relevant context and rental difficulty questions',()=>{assert.deepEqual(getQuestionIds('housing',{h_goal:'smaller'}),['h_type','h_goal','h_context','contact']);assert.deepEqual(getQuestionIds('housing',{h_goal:'rent'}),['h_type','h_goal','h_rent','contact'])});
test('urgent financial flow stays short',()=>assert.deepEqual(getQuestionIds('financial',{f_urgent:'yes'}),['f_urgent','contact']));
test('every question and option has Simplified Chinese wording',()=>{for(const q of Object.values(questions)){assert.ok(hasChineseQuestion(q.id),`Missing question ${q.id}`);const tr=questionText(q,'zh');assert.ok(tr.title&&tr.title!==q.title,`Untranslated title ${q.id}`);for(let i=0;i<q.options.length;i++)assert.ok(tr.options[i].label!==q.options[i].label,`Untranslated option ${q.id}/${q.options[i].value}`)}});
test('every service has Chinese instructions, cautions and checklists',()=>{for(const s of Object.values(services)){assert.ok(hasChineseService(s.id),`Missing service ${s.id}`);const tr=serviceText(s,'zh');assert.equal(tr.steps.length,s.steps.length);assert.equal(tr.checklist.length,s.checklist.length);assert.ok(tr.name!==s.name,`Untranslated service ${s.id}`);for(const step of tr.steps)assert.ok(step.length>1)}});
test('both language packs share all interface labels',()=>assert.deepEqual(Object.keys(messages.en).sort(),Object.keys(messages.zh).sort()));
test('specific expense and housing concerns appear as plain-language prompts',()=>{assert.match(situationText({f_need:'food'},'en'),/food/);assert.match(situationText({h_context:'alone'},'zh'),/独居/)});
