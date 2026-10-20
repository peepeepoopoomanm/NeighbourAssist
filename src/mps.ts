import {categories,questions,getNextPathway,getQuestionIds,type Answers,type Category} from './engine.ts';
import {categoryText,type Language} from './i18n.ts';
import {contextualQuestionText,type Audience} from './audience.ts';

// Only predetermined multiple-choice responses. No identity, addresses, free text,
// personal documents or details are entered or transmitted by this feature.
export const PARLIAMENT_MP_LOOKUP='https://www.parliament.gov.sg/mps/find-mps-in-my-constituency';

export function getMpsPreparation(category:Category,answers:Answers,language:Language,audience:Audience){
 const zh=language==='zh';
 const pathway=getNextPathway(category,answers);
 const title=categoryText(category,language,categories.find(c=>c.id===category)??{label:'Assistance',summary:''}).label;
 const prompts=getQuestionIds(category,answers).filter(id=>id!=='contact'&&answers[id]&&questions[id]);
 const items=prompts.map(id=>{
  const translated=contextualQuestionText(questions[id],language,audience,category);
  const selected=translated.options.find(option=>option.value===answers[id]);
  if(!selected)return null;
  return {id,label:translated.title,answer:selected.label};
 }).filter((item):item is {id:string;label:string;answer:string}=>item!==null);
 const preparation=[
  zh?'有关机构的信件、回复或申请编号（如有）':'Previous agency letters, replies or reference numbers (if any)',
  zh?'简要说明最需要解决的问题，以及为什么需要帮助':'A short explanation of what you are asking for and why',
  zh?'有关机构或接见选民活动工作人员建议携带的证明文件':'Relevant documents requested by the agency or MPS volunteers',
 ];
 if(category==='unsure'&&answers.u_deadline==='yes')preparation.unshift(zh?'请优先核实通知上规定的期限或出庭日期，议员接见活动不会延长期限。':'Check any response, payment or court deadline first; an MPS will not extend it.');
 if(category==='unsure'&&answers.u_start==='suspicious')preparation.unshift(zh?'如已转账或泄露账户资料，请立即联系银行，并遵照 ScamShield 官方指引。':'If money or account details may be compromised, contact the bank immediately and follow official ScamShield guidance.');
 if(category==='family'&&answers.family_safety==='danger')preparation.unshift(zh?'有即时危险，请先拨打警方 999；如无法安全通话，可发短信至 70999。':'If anyone is in immediate danger, call Police 999 now (or SMS 70999 if unable to speak safely).');
 if(category==='family'&&answers.family_safety==='concern')preparation.unshift(zh?'担心虐待或家庭暴力时，请先联系 NAVH 1800-777-0000；即时危险请拨打 999。':'For abuse or violence concerns, contact NAVH 1800-777-0000; call 999 if danger is immediate.');
 if(category==='fines'&&answers.p_stage==='court')preparation.unshift(zh?'法庭传票和出庭日期：即使另向议员求助也须遵守法庭指示':'Court summons and hearing date: you must follow court instructions even if you also seek MP help');
 const pathwayText:Record<ReturnType<typeof getNextPathway>,{en:string;zh:string}>={
  urgent:{en:'This may involve immediate essential needs. Contact ComCare promptly. An MPS is not an emergency response service.',zh:'这可能涉及急需生活必需品。请尽快联系 ComCare；接见选民活动不是紧急援助服务。'},
  agency:{en:'If you have not approached the relevant agency, consider its ordinary application or enquiry channel first. You can still ask your MP for help.',zh:'如果尚未联系负责机构，可以先通过一般申请或咨询渠道办理；您仍可以寻求议员协助。'},
  followup:{en:'You are awaiting a response. Consider asking the agency for an update using your reference number. MPS assistance remains an option.',zh:'您仍在等待回复。可使用申请编号向有关机构查询进展；仍可选择向议员寻求协助。'},
  review:{en:'You reported a rejection or unresolved concern. Ask the agency about its review process, and consider explaining the circumstances at MPS.',zh:'您表示申请被拒或问题仍未解决。可向有关机构了解复核程序，也可在接见选民活动中说明情况。'},
 };
 return {
  topic:title,
  audience:audience==='caregiver'?(zh?'为他人准备（请先征得同意）':'Prepared for another person (with their permission)'):(zh?'本人准备':'Prepared for myself'),
  items,
  preparation,
  pathway:category==='unsure'&&answers.u_start==='suspicious'?(zh?'涉及可疑来电或信息。请优先使用 ScamShield；若可能已受骗，请立即联系银行。不要等待议员接见。':'This concerns a suspicious message. Use ScamShield; if money or account access may be affected, contact the bank immediately. Do not wait for MPS help.'):category==='family'&&answers.family_safety==='danger'?(zh?'有人正面临即时危险，请立即联系警方 999。议员接见活动不能代替紧急服务。':'Someone is in immediate danger. Call Police 999 now; an MPS is not an emergency service.'):category==='family'&&answers.family_safety==='concern'?(zh?'如担心可能发生虐待或家庭暴力，请先咨询 NAVH；如有即时危险，立即拨打 999。':'For possible abuse or domestic violence, contact NAVH for specialist guidance; call 999 if danger is immediate.'):category==='fines'&&answers.p_stage==='court'?(zh?'这涉及法庭传票。请按传票出庭或遵守法庭正式指示；接见选民活动不能代替法庭程序。':'This involves a court summons. Follow required attendance and court directions; an MPS is not a substitute for court proceedings.'):pathwayText[pathway][language],
  caution:zh?'这是为接见选民活动准备的个人摘要，并非正式议员求助信或政府申请。是否协助提出申诉及如何处理，由有关人员及机构决定。不能保证更快处理或获得批准。':'These are personal preparation notes, not an official MP appeal letter or government application. MPS personnel and agencies decide what action is appropriate; no faster processing or approval is guaranteed.',
 };
}
