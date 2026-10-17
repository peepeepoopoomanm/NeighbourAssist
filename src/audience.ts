import type {Question, Answers} from './engine';
import {questionText, reasonText, situationText, type Language} from './i18n';

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
 contact:{title:'您希望如何协助对方联系有关机构？',hint:'请先征得对方同意，再代为联系。我们也会显示官方网站。',options:{online:'协助对方使用官方网站',phone:'获得对方同意后，代为致电',inperson:'陪同对方亲自前往',unsure:'我不确定'}},
};

export function audienceQuestionText(q:Question,lang:Language,audience:Audience):Question {
 const base=questionText(q,lang);
 if(audience==='self')return base;
 const override=(lang==='zh'?caregiverZh:caregiverEn)[q.id];
 if(!override)return base;
 return {...base,title:override.title,hint:override.hint,options:base.options.map(o=>({...o,label:override.options?.[o.value]??o.label}))};
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
};
export function audienceSituationText(a:Answers,lang:Language,audience:Audience):string|null {
 if(audience==='self')return situationText(a,lang);
 for(const key of ['f_need','h_context','h_rent']) {
  const value=a[key];if(value&&caregiverSituations[key+':'+value])return caregiverSituations[key+':'+value][lang];
 }
 return null;
}
