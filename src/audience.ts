import type {Question, Answers, Category} from './engine';
import {questionText, reasonText, situationText, type Language} from './i18n.ts';

export type Audience = 'self'|'caregiver';
type Wording = {title:string; hint?:string; options?:Record<string,string>};
type WordingMap = Record<string,Wording>;

// A separate, explicitly translated questionnaire for someone helping a resident.
// Answer IDs and values are unchanged, so referrals do not depend on who uses the website.
const caregiverEn:WordingMap = {
 f_urgent:{title:'Does the person you are helping urgently need food or other essentials?',hint:'For example, they may not have enough money for meals over the next few days.',options:{yes:'Yes, they need help urgently',no:'They can manage for now',unsure:'I am not sure'}},
 f_need:{title:'Which everyday expense is most difficult for them right now?',hint:'Choose a general category. Do not enter their financial details.'},
 f_existing:{title:'Are they already receiving ComCare assistance?',hint:'It is okay if you do not know.'},
 f_duration:{title:'How long might they need financial help?'},
 f_work:{title:'Which statement best describes their circumstances?',hint:'We will not ask for their income, CPF balance or bank details.',options:{unable:'They cannot work because of age, illness or disability',low:'They work, but still struggle with expenses',temporary:'They are temporarily out of work or have caring responsibilities',unsure:'Something else / I am not sure'}},
 f_age:{title:'Is the person you are helping aged 65 or above?',hint:'This helps us show information about Silver Support. It does not determine their eligibility.',options:{skip:'Prefer not to say / I do not know'}},
 h_type:{title:'What kind of home does the person you are helping live in?',options:{public_rental:'They live in an HDB public rental flat',owner:'They own an HDB flat',private_rental:'They rent a private home',unsure:'I am not sure'}},
 h_goal:{title:'What housing difficulty would they like help with?',options:{smaller:'They want to move to a smaller, more affordable home',rent:'They struggle to pay rent',tenancy:'They need help with registered occupants or a tenancy',other:'Something else / I am not sure'}},
 h_context:{title:'Why might they want to move or change their housing arrangements?',hint:'Do not share their address or sensitive family details.',options:{alone:'They live alone now and need less space',cost:'Their current home is too expensive',mobility:'They have mobility difficulties and want a more suitable home',other:'Something else / I am not sure'}},
 h_rent:{title:'What sort of rental difficulty are they facing?',options:{ongoing:'They struggle with rent each month',arrears:'They have unpaid rent',change:'Their rent or household situation changed recently',unsure:'Something else / I am not sure'}},
 c_age:{title:'Is the person you are helping aged 55 or above?',options:{unsure:'Prefer not to say / I do not know'}},
 c_goal:{title:'What would they like to understand?',options:{withdraw:'Can they withdraw some CPF savings?',support:'Are government support payments available to them?',balance:'How can they check their retirement savings or payouts?',unsure:'I am not sure'}},
 m_type:{title:'Which medical costs are they concerned about?',options:{clinic:'Their GP or dental clinic visits',bill:'Hospital or other medical bills they cannot afford',unsure:'I am not sure'}},
 h_tenure:{title:'How long has the person you are helping lived in their current HDB public rental flat?',hint:'HDB usually requires at least two years of occupation before a transfer request can be considered.'},
 h_household:{title:'What best describes the living arrangements of the person you are helping?',hint:'Choose a general description, without identifying the people involved.',options:{alone:'They live alone',family:'They live with family or other household members',shared:'They share with someone outside the family',unsure:'I am not sure / prefer not to say'}},
 agency_status:{title:'Has the person you are helping already contacted the responsible government agency?',hint:'For example, HDB, CPF Board or the hospital.',options:{first:'No, they have not contacted the agency',waiting:'Yes, they are waiting for a reply',rejected:'Yes, their request was rejected',unresolved:'Yes, their problem remains unresolved',unsure:'I am not sure'}},
 h_review:{title:'Why might they need their housing situation reviewed?',hint:'Do not share their address or sensitive details.',options:{family:'Their household or caregiving circumstances changed',mobility:'They have mobility or accessibility difficulties',affordability:'They are struggling with housing costs',other:'Something else / I am not sure'}},
 c_65:{title:'Is the person you are helping aged 65 or above?',hint:'This is for Silver Support guidance, not an eligibility decision.',options:{unsure:'Not sure / prefer not to say'}},
 c_concern:{title:'What is making their CPF or retirement question difficult?',hint:'Do not enter their CPF balance or Singpass login.',options:{rules:'They find the rules or letters confusing',online:'They cannot easily use the online service',money:'They need to plan for immediate expenses',other:'Another concern / not sure'}},
 m_support:{title:'Have they asked the healthcare institution about help with payment?',hint:'A Medical Social Worker may be able to explain suitable options.',options:{yes:'Yes, they have asked',no:'Not yet',unsure:'I am not sure / not applicable'}},
 m_barrier:{title:'What would help them most with medical costs?',options:{bill:'Understanding their bill or payment options',subsidy:'Finding clinic subsidies',person:'Speaking with a staff member',unsure:'I am not sure'}},
 n_issue:{title:'What neighbourhood issue do they want to report?'},
 n_report:{title:'Have they already reported the issue through an official channel?',options:{yes:'Yes, but it remains unresolved',no:'Not yet',unsure:'I am not sure'}},
 p_issuer:{title:'Which agency issued the fine to the person you are helping?',hint:'Check the authority on their actual notice. Do not enter any notice numbers here.',options:{hdb:'They received an HDB parking notice',ura:'They received a URA parking notice',tp:'They received a Traffic Police notice',lta:'They received an LTA or active-mobility notice',other:'Another agency issued it',unsure:'I am not sure'}},
 p_stage:{title:'What stage is their fine or penalty at?',hint:'Check their notice for payment deadlines and any required court appearance.',options:{notice:'They received a fine or offence notice',court:'They have a court summons or required court date',paid:'Their fine has already been paid',unsure:'I am not sure'}},
 p_goal:{title:'What would you like to help them understand?',hint:'Only the official agency can handle their fine or appeal.',options:{appeal:'Whether they can request an appeal',pay:'How they can check or pay',status:'How to follow up on their appeal',hardship:'They are having difficulty paying',unsure:'I am not sure'}},
 p_reason:{title:'What is the main reason they would like the fine reviewed?',hint:'This cannot establish whether their appeal qualifies.',options:{error:'They think the notice was issued in error',medical:'They experienced a medical emergency',breakdown:'They had a vehicle breakdown or unusual event',first:'It was their first offence or an honest mistake',hardship:'They are struggling to afford the fine',other:'Another reason / I am not sure'}},

 w_issue:{title:'What work problem does the person you are helping face?',hint:'Do not enter their employer, salary or workplace documents.',options:{salary:'They are missing salary or another employment payment',dismissal:'They may have been wrongfully dismissed or forced to resign',fairness:'They face workplace discrimination, harassment or unfair treatment',injury:'They were injured or became ill because of work',other:'Another work concern / I am not sure'}},
 w_status:{title:'Does the person you are helping still work for the employer?',hint:'Their claim deadline may depend on when they stopped work.',options:{current:'Yes, they still work there',left:'No, they have left the job',self:'They are self-employed or unsure of their status',unsure:'I am not sure / prefer not to say'}},
 w_recency:{title:'When did the person you are helping leave the job?',hint:'Wrongful dismissal claims can have a short deadline; check with TADM promptly.',options:{month:'They left within about one month',older:'They left more than one month ago',unsure:'I am not sure / prefer not to say'}},
 family_safety:{title:'Is the person you are helping or anyone in their home in immediate danger, or are you concerned about abuse?',hint:'If someone is in immediate danger, call Police 999 now; never wait for an MP session.',options:{danger:'They or someone else is in immediate danger',concern:'I am concerned about possible abuse, neglect or violence',no:'No, they need another type of family support',unsure:'I am not sure / prefer not to say'}},
 family_issue:{title:'What family or caregiving support would help the person you are helping?',hint:'Choose a general category; do not share family identities or private details.',options:{relationship:'They need support with family relationships or counselling',divorce:'They need marriage, separation or divorce support',caregiving:'They need help caring for an older person or loved one',childcare:'They need childcare or preschool fee guidance',financial:'Their household faces essential expenses or wider problems',other:'Another family concern / I am not sure'}},

 u_start:{title:'Which situation best describes why the person you are helping needs guidance?',hint:'You do not need to know the responsible agency.',options:{topic:'I know their general issue',letter:'They received a government letter or notice they cannot understand',application:'They applied for something or want to understand a government decision',followup:'They contacted an agency and need help following up',suspicious:'They received a call or message that may be a scam',other:'None of these / I am not sure'}},
 u_agency_known:{title:'Do you or the person you are helping know which agency sent the letter or handled the matter?',hint:'Look at their official notice; do not enter case numbers or identity information.',options:{yes:'Yes, we know the responsible agency',no:'No, we do not know which agency it is',unsure:'I am not sure / prefer not to say'}},
 u_deadline:{title:'Does their notice or application include a deadline or required attendance?',hint:'Helping them contact an MP does not extend an official deadline.',options:{yes:'Yes, their notice states a deadline or appointment',no:'No deadline appears on their notice',unsure:'I am not sure / have not checked'}},
 u_scam_loss:{title:'Has the person you are helping sent money or shared bank or account details with the suspicious contact?',hint:'If their money or account access may be affected, help them contact their bank immediately through an official channel.',options:{yes:'Yes, their money or account access may be affected',no:'No, they only need to verify the message',unsure:'I am not sure'}},
 u_need:{title:'Which area best matches their concern?'},
 contact:{title:'How would you prefer to help them contact a service?',hint:'Please contact services on their behalf only with their permission. We will also show the official website.',options:{online:'Help them use the official website',phone:'Call on their behalf, with their permission',inperson:'Go with them to an office',unsure:'I am not sure'}},
};
const caregiverZh:WordingMap = {
 f_urgent:{title:'您正在协助的人是否急需食物或其他生活必需品？',hint:'例如，对方未来几天可能没有足够的钱购买食物。',options:{yes:'是，对方急需帮助',no:'对方暂时还能应付',unsure:'我不确定'}},
 f_need:{title:'对方目前最难负担哪项日常开销？',hint:'只需选择类别，无需提供对方的私人财务资料。'},
 f_existing:{title:'对方目前是否正在领取 ComCare 援助？',hint:'如果不知道，可以选择“不确定”。'},
 f_duration:{title:'对方预计需要经济援助多久？'},
 f_work:{title:'以下哪项最符合对方的情况？',hint:'无需提供对方的收入、公积金余额或银行资料。',options:{unable:'对方因年龄、疾病或残疾而无法工作',low:'对方有工作，但收入不足以应付开销',temporary:'对方暂时失业或需要照顾家人',unsure:'其他／我不确定'}},
 f_age:{title:'您正在协助的人是否已满 65 岁？',hint:'这有助于显示乐龄补贴资料，并不代表对方符合申请资格。',options:{skip:'不愿透露／我不清楚'}},
 h_type:{title:'您正在协助的人目前住在哪里？',options:{public_rental:'对方住在建屋局公共租赁组屋',owner:'对方拥有自己的建屋局组屋',private_rental:'对方租住私人住房',unsure:'我不确定'}},
 h_goal:{title:'对方希望解决哪一种住房问题？',options:{smaller:'对方想搬到较小或更负担得起的住房',rent:'对方难以支付租金',tenancy:'对方需要处理租约或登记住户问题',other:'其他／我不确定'}},
 h_context:{title:'对方为什么考虑搬家或改变住房安排？',hint:'无需提供对方的地址或敏感家庭资料。',options:{alone:'对方现在独居，不需要这么大的房子',cost:'对方的住房开销太高',mobility:'对方行动不便，希望搬到更合适的住处',other:'其他／我不确定'}},
 h_rent:{title:'对方面对哪一类租金困难？',options:{ongoing:'对方每个月都难以支付租金',arrears:'对方有未缴付的租金',change:'对方的租金或家庭情况最近发生改变',unsure:'其他／我不确定'}},
 c_age:{title:'您正在协助的人是否已满 55 岁？',options:{unsure:'不愿透露／我不清楚'}},
 c_goal:{title:'对方希望了解哪方面的资料？',options:{withdraw:'对方可以提取部分公积金吗？',support:'对方是否可以获得长者补助？',balance:'对方应该如何查看退休储蓄或入息资料？',unsure:'我不确定'}},
 m_type:{title:'对方主要担心哪一类医疗开销？',options:{clinic:'对方的全科或牙科诊所费用',bill:'对方无法负担的医院或其他医疗账单',unsure:'我不确定'}},
 h_tenure:{title:'您正在协助的人在目前的公共租赁组屋住了多久？',hint:'一般需居住至少两年，建屋局才可能考虑调换租赁组屋的申请。',options:{under2:'少于两年','2plus':'两年或以上',unsure:'我不确定'}},
 h_household:{title:'对方目前的居住安排是怎样的？',hint:'只需概括，不必提供任何人的身份资料。',options:{alone:'对方独居',family:'对方与家人或家庭成员同住',shared:'对方与非家人合住',unsure:'不确定／不愿透露'}},
 agency_status:{title:'您正在协助的人是否已经联系过有关政府机构？',hint:'例如建屋局、公积金局或医院。',options:{first:'对方还没有联系',waiting:'对方已经联系，正在等待回复',rejected:'对方的申请或要求被拒绝',unresolved:'对方的问题仍未解决',unsure:'我不确定'}},
 h_review:{title:'对方希望机构重新考虑哪方面的住房困难？',hint:'请勿提供对方的地址或敏感资料。',options:{family:'对方的家庭或照护情况改变了',mobility:'对方有行动或无障碍方面的困难',affordability:'对方难以负担住房费用',other:'其他／我不确定'}},
 c_65:{title:'您正在协助的人是否已满 65 岁？',hint:'这只用于提供乐龄补贴相关资料，不能决定对方是否符合资格。',options:{unsure:'不确定／不愿透露'}},
 c_concern:{title:'对方最难理解哪方面的公积金或退休事项？',hint:'请勿提供对方的 CPF 余额或 Singpass 密码。',options:{rules:'对方看不懂有关规定或信件',online:'对方不方便使用网上服务',money:'对方需要安排眼前生活开销',other:'其他／不确定'}},
 m_support:{title:'对方是否已向医疗机构询问付款援助？',hint:'医疗社工可解释可能的援助选项。',options:{yes:'对方已询问过',no:'还没有',unsure:'不确定／不适用'}},
 m_barrier:{title:'对方最需要哪种医疗费用协助？',options:{bill:'了解对方的账单或付款方式',subsidy:'了解诊所补贴',person:'与职员交谈',unsure:'不确定'}},
 n_issue:{title:'对方想反映哪一种邻里设施问题？'},
 n_report:{title:'对方是否已通过官方渠道反映问题？',options:{yes:'是，但问题仍未解决',no:'还没有',unsure:'我不确定'}},
 p_issuer:{title:'哪一个机构向您正在协助的人发出罚单？',hint:'请查看对方的通知，不要在本网站填写罚单编号。',options:{hdb:'对方收到建屋局停车罚单',ura:'对方收到 URA 停车罚单',tp:'对方收到交通警察罚单',lta:'对方收到 LTA 或个人代步工具违例通知',other:'其他机构发出的罚单',unsure:'我不确定'}},
 p_stage:{title:'对方的罚单目前处于什么阶段？',hint:'请核实对方罚单上的缴费期限和是否规定出庭。',options:{notice:'对方刚收到违例或罚款通知',court:'对方收到法庭传票或须出庭通知',paid:'对方已经缴清罚款',unsure:'我不确定'}},
 p_goal:{title:'您希望协助对方了解哪方面？',hint:'只有发出罚单的官方机构能处理有关申请。',options:{appeal:'对方是否可以申诉或复核',pay:'对方如何查询或缴费',status:'如何查询对方申诉的进度',hardship:'对方难以负担罚款',unsure:'我不确定'}},
 p_reason:{title:'对方希望复核罚单的主要原因是什么？',hint:'本问卷不能决定对方的申诉是否成立。',options:{error:'对方认为罚单可能开错了',medical:'对方当时遇到医疗紧急情况',breakdown:'对方当时遇到车辆故障或特殊情况',first:'这是对方第一次违例或无心之失',hardship:'对方难以负担罚款',other:'其他原因／我不确定'}},

 w_issue:{title:'您正在协助的人面对哪一种工作问题？',hint:'这里不需要对方雇主名称、薪资金额或工作文件。',options:{salary:'对方被拖欠工资或其他工作报酬',dismissal:'对方可能遭到不合理解雇或被迫辞职',fairness:'对方遇到职场歧视、骚扰或不公平待遇',injury:'对方因工作而受伤或生病',other:'其他工作问题／我不确定'}},
 w_status:{title:'您正在协助的人目前是否仍在该雇主处工作？',hint:'有关索偿期限可能视乎对方是否已经离职。',options:{current:'是，对方仍在那里工作',left:'否，对方已经离职',self:'对方是自雇人士／不清楚雇佣身份',unsure:'我不确定／不愿透露'}},
 w_recency:{title:'您正在协助的人是什么时候离职的？',hint:'不合理解雇索偿可能有很短的期限，应尽快向 TADM 查询。',options:{month:'对方大约一个月内离职',older:'对方已离职超过一个月',unsure:'我不确定／不愿透露'}},
 family_safety:{title:'您正在协助的人或其家人是否正面临危险，或可能受到虐待？',hint:'有人面临即时危险，请立即拨打警方 999；不要等候议员接见活动。',options:{danger:'对方或家人正面临即时危险',concern:'我担心对方或家人可能遭受虐待、忽视或暴力',no:'没有，对方需要其他家庭支持',unsure:'我不确定／不愿透露'}},
 family_issue:{title:'您正在协助的人需要哪一类家庭或照护支持？',hint:'只需选择一般类别，不必提供任何家人的姓名或私人详情。',options:{relationship:'对方需要家庭关系或辅导支持',divorce:'对方需要婚姻、分居或离婚支持',caregiving:'对方需要协助照顾长者或家人',childcare:'对方需要托儿、学前教育或费用指引',financial:'对方的家庭面对基本生活开销或其他困难',other:'其他家庭问题／我不确定'}},

 u_start:{title:'您正在协助的人遇到哪一种情况？',hint:'即使不知道相关政府机构也可以继续。',options:{topic:'我大致知道对方问题的类别',letter:'对方收到不理解的政府信件或通知',application:'对方已申请某项服务，或想了解政府决定',followup:'对方已联系机构，需要继续查询进度',suspicious:'对方收到可能是诈骗的短信或来电',other:'以上都不适合／我不确定'}},
 u_agency_known:{title:'您或对方知道是哪一个政府机构发出通知或处理此事吗？',hint:'请查看对方的正式通知，无需在本网站填写个案编号或身份资料。',options:{yes:'是，我们知道负责机构',no:'否，我们不清楚是哪个机构',unsure:'我不确定／不愿透露'}},
 u_deadline:{title:'对方的信件或申请是否有截止日期或必须到场的安排？',hint:'协助对方联系议员并不会自动延长官方期限。',options:{yes:'是，对方的通知列明期限或赴约安排',no:'对方的通知没有列明期限',unsure:'我不确定／尚未查看'}},
 u_scam_loss:{title:'对方是否已向可疑联系人转账或透露银行或账户资料？',hint:'如对方的资金或账户可能受影响，请协助对方立即通过正规渠道联系银行。',options:{yes:'是，对方的资金或账户可能受影响',no:'没有，对方只想核实信息真假',unsure:'我不确定'}},
 u_need:{title:'哪方面最接近对方需要的帮助？'},
 contact:{title:'您希望如何协助对方联系有关机构？',hint:'请先征得对方同意，再代为联系。我们也会显示官方网站。',options:{online:'协助对方使用官方网站',phone:'获得对方同意后，代为致电',inperson:'陪同对方亲自前往',unsure:'我不确定'}},
};

export function audienceQuestionText(q:Question,lang:Language,audience:Audience):Question {
 const base=questionText(q,lang);
 if(audience==='self')return base;
 const override=(lang==='zh'?caregiverZh:caregiverEn)[q.id];
 if(!override)return base;
 return {...base,title:override.title,hint:override.hint,options:base.options.map(o=>({...o,label:override.options?.[o.value]??o.label}))};
}
// The same validated agency-status choices are reused, but work and family
// journeys refer to their actual services rather than unrelated HDB/CPF examples.
const agencyStatusContext={
 employment:{
  en:{self:'Have you already contacted TADM, TAFEP, MOM or another relevant employment service?',caregiver:'Has the person you are helping contacted TADM, TAFEP, MOM or another employment service?'},
  zh:{self:'您是否已向 TADM、TAFEP、人力部或其他相关雇佣机构咨询？',caregiver:'您正在协助的人是否已向 TADM、TAFEP、人力部或其他相关雇佣机构咨询？'},
  hint:{en:'Choose your current enquiry or claim status. Do not enter employer names or case details here.',zh:'请选择咨询或索偿进度；无需在本网站提供雇主名称或个案详情。'}
 },
 family:{
  en:{self:'Have you contacted an FSC, FAM, AIC, ECDA or another family-support service?',caregiver:'Has the person you are helping contacted an FSC, FAM, AIC, ECDA or another family-support service?'},
  zh:{self:'您是否已联系家庭服务中心、FAM、AIC、ECDA 或其他家庭支援机构？',caregiver:'您正在协助的人是否已联系家庭服务中心、FAM、AIC、ECDA 或其他家庭支援机构？'},
  hint:{en:'Choose the current enquiry status. Do not share private family circumstances here.',zh:'请选择目前的咨询进展，无需说明敏感家庭情况。'}
 }
};
export function contextualQuestionText(q:Question,lang:Language,audience:Audience,category:Category):Question{
 const base=audienceQuestionText(q,lang,audience);
 if(q.id!=='agency_status'||(category!=='employment'&&category!=='family'))return base;
 const ctx=agencyStatusContext[category];
 return {...base,title:ctx[lang][audience],hint:ctx.hint[lang]};
}

export function hasCaregiverQuestion(id:string,lang:Language):boolean {
 return Boolean((lang==='zh'?caregiverZh:caregiverEn)[id]);
}

export const caregiverUi={
 en:{
  notice:'You are finding help for someone else. Please answer about their situation, not your own.',
  guidanceIntro:'Based on what you told us about the person you are helping, this official service may be relevant to them. Only the agency can assess eligibility or approve an application.',
  why:'Why this may help them:',
  situation:'Their situation',
  suggestedMessage:'With their permission, you can explain:',
  phoneDetail:'With their permission, call the official number and explain their situation.',
  phoneScriptUrgent:'You can say: “I am helping someone who urgently needs help with food or essentials. How can they get assistance?”',
  phoneScriptOther:'You can say: “I am helping someone find assistance. What should we do next?”',
  onlineDetail:'Help them use the official website, with their permission. Follow the agency’s application or enquiry instructions.',
  onlineUrgent:'The person you are helping may need urgent support. Contact the ComCare hotline instead of waiting for an online reply.',
  authNote:'Do not use another person’s Singpass or bank password. Ask the official agency about its authorised representative process where needed.',
  inpersonDetail:'Check the correct office and required documents before going with them. Ask the agency about accessibility assistance if needed.',
 },
 zh:{
  notice:'您正在替别人寻找援助。请根据对方的情况回答，而不是您自己的情况。',
  guidanceIntro:'根据您提供的有关对方的资料，以下官方服务可能适合他们。只有有关机构可以评估资格和批准申请。',
  why:'为何这项服务可能帮助对方：',
  situation:'对方的情况',
  suggestedMessage:'获得对方同意后，您可以这样说明：',
  phoneDetail:'征得对方同意后，拨打以下官方号码并说明对方的情况。',
  phoneScriptUrgent:'您可以这样说：「我正在协助一位急需食物或生活必需品援助的人。请问对方可以怎样申请帮助？」',
  phoneScriptOther:'您可以这样说：「我正在帮别人了解援助服务。请问我们应该如何开始？」',
  onlineDetail:'征得对方同意后，协助他们使用官方网站，并按照有关机构的指示查询或申请。',
  onlineUrgent:'对方可能急需援助。请拨打 ComCare 热线，不要只等待网上回复。',
  authNote:'切勿使用他人的 Singpass 或银行密码。如需代办，请向官方机构询问获授权代表的正式程序。',
  inpersonDetail:'陪同对方前往前，请先确认合适的办事处和所需文件。如有需要，可询问无障碍协助。',
 },
};

// Use third-person reasoning instead of implying the caregiver is the applicant.
const caregiverReasons:Record<string,{en:string;zh:string}>={
 'You indicated that food or other essential expenses need urgent attention.':{en:'The person you are helping may urgently need food or other essentials.',zh:'您正在协助的人可能急需食物或其他必需品。'},
 'You indicated that you already receive ComCare support.':{en:'You indicated that they are already receiving ComCare assistance.',zh:'您表示对方目前正在领取 ComCare 援助。'},
 'You mentioned being unable to work and needing support over a longer period.':{en:'You indicated that they cannot work and may need longer-term support.',zh:'您表示对方无法工作，并可能需要较长期援助。'},
 'You mentioned difficulties meeting everyday expenses or a temporary income problem.':{en:'You described their difficulty with daily expenses or temporary income problems.',zh:'您提到对方难以负担日常开销，或暂时面对收入困难。'},
 'You said you rent an HDB public rental flat and want a smaller home.':{en:'They live in an HDB public rental flat and may need a smaller home.',zh:'对方住在建屋局公共租赁组屋，并希望搬到较小的住房。'},
 'You said you are a public-rental tenant struggling with rental costs.':{en:'They live in a public rental flat and are struggling with rent.',zh:'对方住在公共租赁组屋，并面对租金压力。'},
 'You asked about the tenancy or registered occupants of a public rental flat.':{en:'You are asking about their public-rental tenancy or registered occupants.',zh:'您正在为对方查询公共租赁组屋的租约或登记住户事宜。'},
 'You said you own an HDB flat and are considering moving to a smaller home.':{en:'They own an HDB flat and may want a smaller home.',zh:'对方拥有自己的组屋，并考虑换成较小的住房。'},
 'You mentioned difficulty paying rent in a privately rented home. An SSO can discuss possible financial support.':{en:'They are having difficulty paying private rent. An SSO can discuss possible assistance.',zh:'对方难以支付私人住房租金。社会服务办事处可讨论可能的援助。'},
 'HDB can confirm which housing procedure is appropriate for your living situation.':{en:'HDB can clarify the procedures relevant to their housing circumstances.',zh:'建屋局可说明符合对方住房情况的办理程序。'},
 'You asked about support payments for seniors. Silver Support is automatically assessed.':{en:'You asked about support payments for them. Silver Support is automatically assessed.',zh:'您为对方查询长者补助。乐龄补贴计划由政府自动评估。'},
 'You said you are at least 55 and want to understand CPF withdrawal conditions.':{en:'They are at least 55 and want to understand CPF withdrawal conditions.',zh:'对方已满 55 岁，希望了解公积金提款条件。'},
 'CPF Board can explain the options available for your age and circumstances.':{en:'CPF Board can explain options relevant to their age and circumstances.',zh:'中央公积金局可说明适合对方年龄与情况的选择。'},
 'You mentioned GP or dental clinic costs.':{en:'You mentioned their GP or dental clinic expenses.',zh:'您提到对方的全科或牙科诊所费用。'},
 'You mentioned difficulty paying a hospital or other medical bill.':{en:'You mentioned their difficulty paying hospital or other medical bills.',zh:'您提到对方难以支付医院或其他医疗账单。'},
 'MOH can guide you toward the right scheme for the care involved.':{en:'MOH provides information on schemes relevant to their healthcare needs.',zh:'卫生部可提供与对方医疗需要相关的补助资料。'},
 'This concerns your neighbourhood environment or municipal facilities.':{en:'This concerns a neighbourhood or municipal facility.',zh:'这与邻里环境或市政设施有关。'},


 'You asked about unpaid wages or employment payment, for which TADM provides dispute advice.':{en:'They may need advice about unpaid wages or another employment payment from TADM.',zh:'对方可能需要向 TADM 咨询欠薪或工作报酬纠纷。'},
 'You reported a possible wrongful dismissal; some claims have a short filing deadline.':{en:'They may have been wrongfully dismissed, and a short filing deadline may apply.',zh:'对方可能遭到不合理解雇，部分申诉有严格期限。'},
 'You mentioned workplace discrimination, harassment or unfair treatment; MOM directs these enquiries to TAFEP.':{en:'Their workplace fairness concern may be directed to TAFEP for advice.',zh:'对方的职场不公平待遇问题可向 TAFEP 咨询。'},
 'You asked about an injury or illness related to work; MOM provides work-injury claim guidance.':{en:'They experienced a possible work injury; MOM provides relevant claim guidance.',zh:'对方可能发生工伤，人力部提供相关索偿指引。'},
 'MOM can help identify the correct channel for your employment issue.':{en:'MOM can help find the appropriate employment advice for the person you are helping.',zh:'人力部可协助对方找到合适的雇佣咨询渠道。'},
 'You reported immediate danger; emergency police assistance must come before general family counselling.':{en:'The person you are helping or someone in their home is in immediate danger. Contact Police 999.',zh:'您正在协助的人或其家人正面临危险，应立即联系警方 999。'},
 'You reported concern about possible abuse, neglect or violence; NAVH provides specialist support.':{en:'You are concerned that someone may be experiencing abuse, neglect or domestic violence; NAVH can advise.',zh:'您担心对方可能遭遇虐待、忽视或家庭暴力，可向 NAVH 咨询。'},
 'You asked about relationship, marriage or separation support; MSF offers FAM services.':{en:'The person you are helping may benefit from FAM family or relationship support.',zh:'对方可能需要 FAM 家庭或婚姻关系支持。'},
 'You asked for caregiving or eldercare guidance; AIC Link is a relevant starting point.':{en:'They may need caregiving or eldercare support, which AIC Link can explain.',zh:'对方可能需要照护或乐龄服务，可向 AIC Link 了解。'},
 'You asked about preschool, childcare or related subsidies; LifeSG and ECDA provide official guidance.':{en:'The person you are helping needs childcare or preschool information from LifeSG or ECDA.',zh:'对方需要学前教育或托儿补贴资料，可从 LifeSG 和 ECDA 查询。'},
 'You mentioned broader family difficulties; an FSC can discuss social needs and referrals.':{en:'Their family may need broader social or financial guidance from an FSC.',zh:'对方的家庭可能需要家庭服务中心提供更全面的社会支持。'},
 'A Family Service Centre can help identify suitable family and community support.':{en:'An FSC can explain suitable support for the person you are helping.',zh:'家庭服务中心可协助对方了解适当的家庭与社区支持。'},

 'You have a letter or notice to understand; verify its sender and deadline before acting.':{en:'The person you are helping has a letter or notice; verify its sender and deadline first.',zh:'对方收到需要了解的信件或通知，应先核实发件机构及期限。'},
 'You have an application or decision to follow up; the issuing agency can explain formal options.':{en:'The person you are helping has an application or decision; the issuing agency can explain it.',zh:'对方希望查询申请或政府决定，应向发出决定的机构了解正式渠道。'},
 'You already contacted an agency; use its official status or review channels.':{en:'They already contacted an agency; ask about its official status or review process.',zh:'对方已联系过有关机构，可通过正式渠道查询进度或复核方式。'},
 'Your account or money might be at risk; contacting your bank takes priority.':{en:'Their money or account access may be at risk; contact their bank promptly.',zh:'对方的资金或账户可能受影响，应立即联系其银行。'},
 'You want to check a suspicious message or call with an official service.':{en:'You are helping them check a suspicious message or call using an official service.',zh:'您正在协助对方通过官方渠道核实可疑信息或来电。'},
 'The government directory can help identify the agency without guessing.':{en:'The official government directory can help you find the correct agency for them.',zh:'政府官方目录可协助找到负责对方事项的机构。'},
 'An SSO can help identify financial assistance routes.':{en:'An SSO may help them identify relevant financial assistance.',zh:'社会服务办事处可协助对方了解经济援助渠道。'},
 'HDB can explain housing services and next steps.':{en:'HDB can explain the relevant housing service for the person you are helping.',zh:'建屋局可向对方解释相关住房服务。'},
 'CPF Board is the right place to clarify CPF and retirement questions.':{en:'CPF Board can clarify their CPF and retirement enquiries.',zh:'公积金局可解答对方的公积金及退休问题。'},
 'MOH provides guidance on healthcare support channels.':{en:'MOH provides official information about their healthcare concerns.',zh:'卫生部可提供适用于对方情况的医疗服务资讯。'},
 'OneService is the official municipal feedback channel.':{en:'OneService provides official municipal feedback channels for their issue.',zh:'OneService 可协助对方反映市政设施问题。'},
 'MOM can help identify the correct channel for your employment issue.':{en:'MOM can help identify a suitable employment service for them.',zh:'人力部可协助对方找到适当雇佣咨询渠道。'},
 'A Family Service Centre can help identify suitable family and community support.':{en:'An FSC can help them explore appropriate family or community support.',zh:'家庭服务中心可协助对方了解相关支援。'},
 'You reported a court summons or required court date. Court instructions take priority.':{en:'The person you are helping may need to attend court. Their official summons takes priority.',zh:'您正在协助的人可能须出庭，应优先遵守对方传票的指示。'},
 'You identified HDB as the issuer of the parking notice.':{en:'They have an HDB parking notice, so HDB is the responsible agency.',zh:'对方收到建屋局停车罚单，应使用建屋局官方渠道。'},
 'You identified URA as the issuer of the parking notice.':{en:'They have a URA parking notice, so URA is the responsible agency.',zh:'对方收到 URA 停车罚单，应使用 URA 官方渠道。'},
 'You identified Traffic Police as the issuer of the offence notice.':{en:'They received a Traffic Police offence notice.',zh:'对方收到交通警察的违例通知。'},
 'You identified LTA as the issuer; vehicle and active-mobility procedures may differ.':{en:'Their notice is from LTA; active-mobility and vehicle procedures may differ.',zh:'对方收到陆交局的通知，车辆和个人代步工具程序可能不同。'},
 'Identify the issuing agency before choosing an appeal or payment route.':{en:'Identify the agency on their notice before helping them choose a formal channel.',zh:'请先确认对方罚单上的机构，再协助对方选择正式渠道。'},

 'Private tenancy questions are different from HDB public-rental transfers. This is a general official directory, not a tenancy decision.':{en:'Private tenancy matters differ from public-rental transfers. This is a directory, not a housing decision.',zh:'私人租赁与建屋局公共租赁组屋不同。这里仅提供官方服务入口，并不决定租约事宜。'},
};
export function audienceReasonText(reason:string,lang:Language,audience:Audience):string{
 if(audience==='self')return reasonText(reason,lang);
 return caregiverReasons[reason]?.[lang]??(lang==='zh'?'您可以通过有关机构查询对方可能需要的援助。':'The relevant agency can explain assistance options for the person you are helping.');
}

const caregiverSituations:Record<string,{en:string;zh:string}>={
 'f_need:food':{en:'I am helping someone who needs food and daily essentials.',zh:'我正在帮助一位需要食物和日用品援助的人。'},
 'f_need:utilities':{en:'I am helping someone who struggles with utility or household bills.',zh:'我正在帮助一位难以支付水电或家庭账单的人。'},
 'f_need:rent':{en:'I am helping someone who struggles with rent or housing expenses.',zh:'我正在帮助一位难以负担租金或住房开销的人。'},
 'f_need:living':{en:'I am helping someone who struggles with general living costs.',zh:'我正在帮助一位难以负担日常生活开销的人。'},
 'h_context:alone':{en:'I am helping someone who lives alone and wants to consider a smaller home.',zh:'我正在帮助一位独居并考虑搬到较小住房的人。'},
 'h_context:cost':{en:'I am helping someone whose current housing costs are too high.',zh:'我正在帮助一位难以负担现有住房费用的人。'},
 'h_context:mobility':{en:'I am helping someone who has mobility difficulties and needs a more suitable home.',zh:'我正在帮助一位行动不便、需要更合适住所的人。'},
 'h_rent:ongoing':{en:'I am helping someone who struggles to pay rent each month.',zh:'我正在帮助一位每月难以支付租金的人。'},
 'h_rent:arrears':{en:'I am helping someone who has unpaid rent and needs to understand available support.',zh:'我正在帮助一位有未缴租金、需要了解援助的人。'},
 'h_rent:change':{en:'I am helping someone whose rent or household circumstances recently changed.',zh:'我正在帮助一位租金或家庭情况最近发生改变的人。'},
 'p_reason:error':{en:'I am helping someone who thinks a penalty notice was issued in error.',zh:'我正在协助一位认为罚单可能开错了的人。'},
 'p_reason:medical':{en:'I am helping someone who experienced a medical emergency.',zh:'我正在协助一位当时遇到医疗紧急情况的人。'},
 'p_reason:breakdown':{en:'I am helping someone who experienced a vehicle breakdown or unusual event.',zh:'我正在协助一位当时遇到车辆故障或特殊情况的人。'},
 'p_reason:first':{en:'I am helping someone who says this was their first offence or an honest mistake.',zh:'我正在协助一位首次违例或无心犯错的人。'},
 'p_reason:hardship':{en:'I am helping someone who is struggling to afford a fine.',zh:'我正在协助一位难以负担罚款的人。'},
};
export function audienceSituationText(a:Answers,lang:Language,audience:Audience):string|null {
 if(audience==='self')return situationText(a,lang);
 for(const key of ['f_need','h_context','h_rent','p_reason']) {
  const value=a[key];if(value&&caregiverSituations[key+':'+value])return caregiverSituations[key+':'+value][lang];
 }
 return null;
}
