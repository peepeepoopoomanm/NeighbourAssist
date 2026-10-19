import type {Question,Service,Answers,Category} from './engine';

export type Language='en'|'zh';
export type TextSize='normal'|'large';

const en={
 student:'Student-built prototype',language:'Language',textSize:'Text size',normal:'Normal',large:'Large',skip:'Skip to main content',
 eyebrow:'A clearer path to assistance',heroTitle:"Finding help shouldn't be hard.",heroDescription:'Not sure where to turn about assistance, housing, a fine or another government issue? Answer a few simple questions to find an official place to start.',
 noAccount:'No account needed',noSensitive:'No sensitive details asked',free:'Free to use',how:'HOW IT WORKS',how1:'Tell us what you need',how1Detail:'Choose a familiar category',how2:'Answer simple questions',how2Detail:'No income figures or documents',how3:'See your next steps',how3Detail:'Official links, contacts and guidance',
 startHere:'START HERE',chooseTopic:'What would you like help with?',topicHint:'Choose the option that best matches your situation. You can change it later.',findingFor:"I'm finding help for:",myself:'Myself',caregiver:'Someone I care for',
 guideTitle:'This is a guide, not an application.',guideBody:'NeighbourAssist is not affiliated with the Singapore Government. We help you find official channels; only those organisations can assess and approve requests.',
 allTopics:'All topics',question:'Question',of:'of',chooseAnswer:'Choose an answer',back:'Back',continue:'Continue',seeGuidance:'See my guidance',
 privacyTitle:'Your privacy matters.',privacyBody:"You don't need to provide NRIC, CPF balances, bank statements or personal medical details here.",privacyDetail:"Nothing you answer is sent to a government agency. Your choices are kept only on this page while you're using it.",
 guidanceLabel:'YOUR GUIDANCE',guidanceTitle:"Here's where to start.",guidanceIntro:'This official service may be relevant based on your answers. It does not mean that you qualify or your application has been approved.',startingPoint:'SUGGESTED STARTING POINT',why:'Why you are seeing this:',situationTitle:'What you told us',suggestedMessage:'When you contact the service, you can explain:',
 nextSteps:'What you can do next',guideStepsTitle:'Follow these steps',guideVerified:'Official instructions',guideSource:'View government source',guideChecked:'Reviewed against selected official sources',guideMayChange:'These steps are general guidance, not a guarantee that every external page remains unchanged. Follow the latest official instructions or contact the agency.',contactPath:'YOUR PREFERRED WAY TO GET HELP',onlineTitle:'Use the official website',onlineDetail:'Open the official website to read about the service and follow its application or enquiry instructions.',onlineUrgent:'You said you need help urgently. You can call the ComCare hotline rather than wait for an online reply.',phoneTitle:'Speak to someone by phone',phoneDetail:'Call the official number below. Explain what you need help with and ask what to do next.',phoneFallback:'No verified hotline is listed here. Open the official website to find the latest contact details.',phoneScriptUrgent:'You can say: “I need urgent help paying for food or essential expenses. What assistance can I ask about?”',phoneScriptOther:'You can say: “I would like to ask about assistance for my situation. How do I start?”',inpersonTitle:'Ask for help in person',inpersonDetail:'Check the official service information for the right office and ask what you need to bring before visiting.',inpersonSso:'For ComCare, use the official Social Service Office directory to find the right office. You can also call ComCare first.',unsureTitle:'Not sure how to contact them?',unsureDetail:'You can use the official website, call a listed hotline, or ask the agency where in-person assistance is available.',visitWebsite:'Open official website',findSso:'Find a Social Service Office',callNow:'Call official hotline',officialPhone:'Official hotline',noPhone:'Find contact details on official website',hours:'Opening hours',
 otherInfo:'ADDITIONAL INFORMATION',learnMore:'Read on the official website',prepareTitle:'Before you contact them',prepareIntro:'These are examples of information that may be helpful. Only share documents if the official agency asks for them.',print:'Print this guidance',privacyReminder:'Never upload personal documents or share Singpass passwords through this prototype.',changeAnswers:'Change my answers',startAgain:'Start again',about:'About & limitations',browse:'Browse assistance topics',lifesg:'LifeSG',footerLine:'Help, made clearer. A student hackathon prototype.',
 aboutLabel:'ABOUT THIS PROJECT',aboutTitle:'Built to make support easier to find.',about1:'NeighbourAssist is an independent student prototype for Neighborhood Hacks 2026. It began with observations at Meet-the-People Sessions: some older residents struggled to find or use digital assistance channels, while others faced long waits in person.',about2:'We do not collect documents, assess eligibility, receive case submissions or access government databases. Follow official links for real applications.',findAssistance:'Browse assistance topics',
 hdbTenureWarning:'HDB generally requires registered public-rental tenants to have occupied their current rental flat for at least two years before requesting a transfer. Since you selected less than two years, check directly with HDB before applying; this guide cannot determine exceptions.',pathwayTitle:'What kind of help makes sense next?',pathwayUrgent:'For urgent food or essential needs, contact ComCare promptly. Do not wait for an MP session.',pathwayAgency:'The relevant agency is a useful starting point. You can also seek help from your MP if you prefer human guidance.',pathwayFollowup:'You are waiting for a reply. Follow up with the agency using any reference number you have. You can also seek MP assistance.',pathwayReview:'You have already approached an agency but the matter remains unresolved or was rejected. Ask about its review process and consider MP assistance.',mpsSectionTitle:'Need help from your MP?',mpsSectionIntro:'Meet-the-People Sessions (MPS) provide a way to explain your circumstances to an elected representative or their volunteers. An MP appeal does not guarantee a different outcome or faster processing.',mpsShow:'Prepare for a Meet-the-People Session',mpsHide:'Hide preparation notes',mpsFind:'Find my MP — Parliament website',mpsSteps:'How to use these notes',mpsStep1:'Find your constituency and MP on the official Parliament website. Check the MP page for current MPS time, location or contact information.',mpsStep2:'Review this summary, correct any inaccurate selections by changing your answers, and print a copy if useful.',mpsStep3:'Contact the relevant MPS team before travelling, where possible. Ask about session arrangements and what documents to bring.',mpsPrint:'Print MPS preparation notes',mpsNotes:'Your preparation notes',mpsSituation:'Selected circumstances',mpsChecklist:'What you may want to prepare',mpsPrivacy:'These notes are created on your device from answers you selected. They are not sent to an MP, a government agency or a server.',mpsAfter:'Your MP or MPS volunteers may be able to explain appeal options, but the government agency remains responsible for its decision.',
 fineCourtPathway:'A court summons is different from an ordinary agency enquiry. Follow the court\'s attendance and procedural directions first; an MP request is optional and does not replace court proceedings.',fineCourtWarning:'You selected a court summons or required court appearance. Follow the court notice immediately; an agency appeal or MP request does not postpone the hearing.',finePaidWarning:'You indicated that the fine has already been paid. Some agencies do not consider appeals after payment. Check the issuing agency’s published policy before taking further action.',fineDeadlineWarning:'Check the payment, appeal or court deadline on the original notice. NeighbourAssist cannot extend deadlines or cancel penalties.',
 emergencyPoliceTitle:'Immediate danger: contact Police now',emergencyPoliceAction:'Call Police 999',emergencyPoliceSms:'If you cannot speak safely, SMS 70999. Do not wait for this website or an MP appointment.',
 familySafetyBanner:'If someone is in immediate danger, call Police 999 now (SMS 70999 if unable to speak safely). You do not need to finish this questionnaire.',familyDangerPathway:'Immediate safety comes first. Call Police 999 now, or SMS 70999 if unable to speak safely. Do not wait for an MP session or online reply.',familyConcernPathway:'For non-immediate concerns about abuse, neglect or domestic violence, contact the 24-hour NAVH helpline. If danger becomes immediate, call Police 999.',workDeadlineWarning:'Employment claims can have strict deadlines: commonly one month from the last day for wrongful dismissal; salary claims generally one year while employed or six months after leaving. Check your specific route with TADM promptly.',
 urgentNote:'If you cannot afford food or essentials in the next few days, contact ComCare promptly. This guide does not submit requests or provide emergency response.',
};
const zh:typeof en={
 student:'学生制作的示范网站',language:'语言',textSize:'字体大小',normal:'标准',large:'大',skip:'跳至主要内容',
 eyebrow:'让求助更清楚、更简单',heroTitle:'寻求帮助，不应如此困难。',heroDescription:'遇到经济困难、住房问题、罚单或其他政府事务，却不知道该找哪个机构？回答几个简单问题，找到合适的官方渠道。',
 noAccount:'无需注册账号',noSensitive:'无需提供敏感资料',free:'免费使用',how:'使用方法',how1:'告诉我们您的需要',how1Detail:'选择相关援助类别',how2:'回答简单问题',how2Detail:'不需填写收入金额或上传文件',how3:'查看下一步',how3Detail:'获取官方链接、联络方式与指引',
 startHere:'从这里开始',chooseTopic:'您需要哪一方面的帮助？',topicHint:'请选择最符合您情况的选项，之后仍可更改。',findingFor:'您要为谁寻求帮助？',myself:'我自己',caregiver:'我照顾的人',
 guideTitle:'这是援助指南，并非申请表。',guideBody:'邻里助理（NeighbourAssist）与新加坡政府没有隶属关系。我们协助您找到官方渠道；只有有关机构可以审核及批准申请。',
 allTopics:'所有类别',question:'问题',of:'共',chooseAnswer:'请选择一个答案',back:'返回',continue:'继续',seeGuidance:'查看指引',
 privacyTitle:'我们重视您的隐私。',privacyBody:'这里不需要提供身份证号码、CPF 存款数额、银行结单或个人医疗资料。',privacyDetail:'您的回答不会发送给政府机构。选项只会在本网页使用期间暂时保留。',
 guidanceLabel:'您的指引',guidanceTitle:'建议您从这里开始。',guidanceIntro:'根据您的回答，以下官方服务可能与您的情况有关。这不代表您一定符合资格，也不表示申请已获批准。',startingPoint:'建议先联系',why:'推荐原因：',situationTitle:'您提到的问题',suggestedMessage:'联系有关机构时，您可以说明：',
 nextSteps:'下一步怎么做',guideStepsTitle:'请按照以下步骤',guideVerified:'官方资料来源',guideSource:'查看政府官方说明',guideChecked:'已参照部分官方资料核对',guideMayChange:'这里提供一般指引，不能保证所有外部网页内容不变。如步骤或条件有更新，请以政府机构的最新官方说明为准。',contactPath:'您选择的求助方式',onlineTitle:'使用官方网站',onlineDetail:'打开官方网站，了解有关服务，并按照指示查询或申请。',onlineUrgent:'您表示急需帮助。您可以拨打 ComCare 热线，而不必等待网上回复。',phoneTitle:'通过电话寻求协助',phoneDetail:'拨打以下官方电话号码，说明您的需要，并询问下一步。',phoneFallback:'这里没有已核实的热线号码。请到官方网站查询最新联络方式。',phoneScriptUrgent:'您可以这样说：「我目前没有足够的钱购买食物或生活必需品。请问有什么紧急援助？」',phoneScriptOther:'您可以这样说：「我想了解适合自己情况的援助。应该如何开始？」',inpersonTitle:'亲自前往求助',inpersonDetail:'先查阅官方网站，确认应前往哪个服务地点，并了解需要携带什么资料。',inpersonSso:'如需 ComCare 援助，可通过官方社会服务办事处目录寻找合适的办事处，或先致电 ComCare。',unsureTitle:'不确定怎样联系？',unsureDetail:'您可以使用官方网站、拨打列出的热线，或向有关机构询问亲自办理的方法。',visitWebsite:'打开官方网站',findSso:'寻找社会服务办事处',callNow:'拨打官方热线',officialPhone:'官方热线',noPhone:'到官方网站查询联络方式',hours:'服务时间',
 otherInfo:'其他相关信息',learnMore:'到官方网站了解详情',prepareTitle:'联系前可准备什么',prepareIntro:'以下只是可能有帮助的资料。只有在官方机构要求时才提供文件。',print:'打印此指引',privacyReminder:'切勿通过本示范网站上传个人文件或分享 Singpass 密码。',changeAnswers:'修改答案',startAgain:'重新开始',about:'关于本项目及限制',browse:'浏览援助类别',lifesg:'LifeSG',footerLine:'让求助更清楚。学生黑客松示范项目。',
 aboutLabel:'关于本项目',aboutTitle:'让人们更容易找到援助。',about1:'邻里助理是为 2026 年 Neighborhood Hacks 黑客松制作的独立学生示范网站。项目源于在议员接见选民活动中的观察：一些年长居民不熟悉网上援助渠道，另一些则需要排队很久。',about2:'本网站不收集证明文件、不审核资格、不接收正式申请，也无法访问政府数据库。正式申请请使用官方渠道。',findAssistance:'浏览援助类别',
 hdbTenureWarning:'建屋局一般要求现有公共租赁组屋的登记承租人已居住至少两年，才可申请调换租赁组屋。由于您选择少于两年，请先向建屋局查询；本指南不能决定是否有特殊处理方式。',pathwayTitle:'下一步可以怎样求助？',pathwayUrgent:'如急需食物或生活必需品，请尽快联系 ComCare，不必等待接见选民活动。',pathwayAgency:'可先向负责机构咨询或申请。如希望获得人手指导，也可以向议员寻求帮助。',pathwayFollowup:'您仍在等待回复。可使用参考编号向有关机构查询进展，也可以向议员寻求协助。',pathwayReview:'您已联系有关机构，但申请被拒或问题仍未解决。可询问复核程序，并考虑向议员寻求协助。',mpsSectionTitle:'需要向议员寻求帮助？',mpsSectionIntro:'接见选民活动（MPS）让您向议员或其志愿者解释情况，但不能保证申请获批或处理更快。',mpsShow:'准备参加接见选民活动',mpsHide:'收起准备摘要',mpsFind:'查找我的议员 — 国会官网',mpsSteps:'如何使用这份摘要',mpsStep1:'使用国会官网查找您的选区和议员，并在议员网页确认最新接见选民时间、地点或联络资料。',mpsStep2:'核对以下摘要，如有错误可返回修改答案；如有需要，可打印一份。',mpsStep3:'如可能，先联系接见选民活动团队，询问活动安排及所需文件，再前往。',mpsPrint:'打印接见选民准备摘要',mpsNotes:'接见选民准备摘要',mpsSituation:'您选择的情况',mpsChecklist:'可准备的资料',mpsPrivacy:'这份摘要只根据您在本装置上选择的答案生成，不会发送给议员、政府机构或服务器。',mpsAfter:'议员或志愿者可能协助解释申诉渠道，但有关政府机构仍负责作出决定。',
 fineCourtPathway:'法庭传票与一般机构咨询不同。请优先遵守法庭规定的出庭和程序要求；即使另向议员求助，也不能代替法庭程序。',fineCourtWarning:'您选择了法庭传票或须出庭的情况。请立即按传票指示办理；向机构或议员求情不会自动延迟聆讯。',finePaidWarning:'您表示罚款已经缴清。部分机构付款后不再考虑申诉。请先查阅发出机构的官方规定。',fineDeadlineWarning:'请核对罚单上的缴费、申诉或出庭期限。本网站不能延长期限或取消处罚。',
 emergencyPoliceTitle:'即时危险：立即联系警方',emergencyPoliceAction:'拨打警方 999',emergencyPoliceSms:'如无法安全通话，请发短信至 70999。不要等候本网站或议员接见活动。',
 familySafetyBanner:'如果有人正面临即时危险，请立即拨打警方 999；如无法安全通话，可发送短信至 70999。无需完成本问卷。',familyDangerPathway:'人身安全最重要。如有即时危险，请立即拨打警方 999；无法安全通话时可发短信至 70999。不要等候议员接见活动或网上回复。',familyConcernPathway:'如担心家人遭受虐待、忽视或家庭暴力，但暂无即时危险，请联系全天候 NAVH 热线。如出现即时危险，请拨打警方 999。',workDeadlineWarning:'劳动纠纷可能有严格期限：一般非正当解雇申诉须在离职后一个月内提出；薪资索偿通常为在职期间纠纷发生后一年内，或离职后六个月内。请尽快向 TADM 核实。',
 urgentNote:'如果您未来几天无法负担食物或必需品，请尽快联络 ComCare。本网站不会提交申请，也不是紧急救援服务。',
};
export const messages={en,zh};

const categoriesZh:Record<Category,{label:string;summary:string}>={
 financial:{label:'日常生活开销',summary:'食物、账单、收入及经济援助'},housing:{label:'住房与租金',summary:'政府租赁组屋、住房开支及换小房'},cpf:{label:'公积金与退休',summary:'了解公积金提款和长者援助'},health:{label:'医疗费用',summary:'诊所补贴及医药账单'},municipal:{label:'邻里设施问题',summary:'电梯、公共设施维修和清洁'},fines:{label:'罚单与申诉',summary:'停车罚单、交通违例及个人代步工具处罚'},employment:{label:'工作与雇佣',summary:'欠薪、解雇与职场纠纷'},family:{label:'家庭与社会支持',summary:'家庭关系、照护与托儿援助'},unsure:{label:'不确定',summary:'帮我找到合适的求助渠道'},
};
export function categoryText(id:Category,language:Language,english:{label:string;summary:string}) {return language==='zh'?categoriesZh[id]:english;}

type QuestionZh={title:string;hint?:string;options:Record<string,string>};
const questionZh:Record<string,QuestionZh>={
 f_urgent:{title:'您是否急需钱购买食物或生活必需品？',hint:'例如，未来几天可能没有足够的钱买饭或其他必需品。',options:{yes:'是，我急需帮助',no:'暂时还能应付',unsure:'我不确定'}},
 f_need:{title:'您目前最难负担哪项日常开销？',hint:'只需选择类别，无需填写任何金额。',options:{food:'食物和日常用品',utilities:'水电煤气或其他账单',rent:'房租或住房开支',living:'一般生活开销',unsure:'其他／我不确定'}},
 f_existing:{title:'您目前是否正在领取 ComCare 援助？',hint:'如果不知道，可以选择“不确定”。',options:{yes:'是',no:'否',unsure:'我不确定'}},
 f_duration:{title:'您预计需要帮助多久？',options:{short:'短期',long:'较长时间',unsure:'我不确定'}},
 f_work:{title:'哪项描述最符合您的情况？',hint:'我们不会询问您的收入、CPF 余额或银行资料。',options:{unable:'因年龄、健康或残疾而无法工作',low:'有工作，但收入不足',temporary:'暂时失业或需要照顾家人',unsure:'其他／我不确定'}},
 f_age:{title:'您是否已满 65 岁？',hint:'这有助于显示乐龄补贴的信息，并不会决定您是否符合资格。',options:{yes:'是',no:'否',skip:'不愿透露'}},
 h_type:{title:'您目前住在哪里？',options:{public_rental:'建屋局公共租赁组屋',owner:'自己拥有的建屋局组屋',private_rental:'私人租赁住房',unsure:'我不确定'}},
 h_goal:{title:'您希望解决哪一种住房问题？',options:{smaller:'想搬到面积较小或更负担得起的房子',rent:'难以支付租金',tenancy:'需要协助处理登记住户或租约',other:'其他／我不确定'}},
 h_context:{title:'为什么您想搬家或改变住房安排？',hint:'无需透露姓名、地址或家庭纠纷详情。',options:{alone:'现在独居，不需要这么大的房子',cost:'住房费用负担太重',mobility:'行动不便，想找更合适的住处',other:'其他／我不确定'}},
 h_rent:{title:'您面对哪方面的租金困难？',options:{ongoing:'每个月的租金都难以负担',arrears:'已有未缴付的租金',change:'租金或家庭情况最近改变',unsure:'其他／我不确定'}},
 c_age:{title:'您是否已满 55 岁？',options:{yes:'是',no:'否',unsure:'不愿透露／不确定'}},
 c_goal:{title:'您希望了解什么？',options:{withdraw:'我可以提取部分公积金吗？',support:'长者可以获得政府补助吗？',balance:'如何查看退休储蓄或入息资料？',unsure:'我不确定'}},
 m_type:{title:'您主要担心哪一种医疗开销？',options:{clinic:'全科医生或牙科诊所费用',bill:'无法负担医院或其他医疗账单',unsure:'我不确定'}},
 h_tenure:{title:'您已在目前的建屋局公共租赁组屋住了多久？',hint:'建屋局一般要求现有租赁组屋已居住至少两年才可申请调换租赁组屋；正式审核由建屋局决定。',options:{under2:'少于两年','2plus':'两年或以上',unsure:'我不确定'}},
 h_household:{title:'哪项最符合您目前的居住安排？',hint:'这里只需概括情况，不需要姓名、地址或租约编号。',options:{alone:'我独自居住',family:'我与家人或其他家庭成员同住',shared:'我与非家人合住',unsure:'我不确定／不愿透露'}},
 agency_status:{title:'您是否已就此问题联系过负责的政府机构？',hint:'例如住房问题联系建屋局、公积金问题联系公积金局、医院账单则联系医疗机构。',options:{first:'还没有，这是第一次求助',waiting:'已联系，仍在等待回复',rejected:'已联系，但申请或要求被拒绝',unresolved:'已联系，但问题仍未解决',unsure:'我不确定'}},
 h_review:{title:'您最希望有关机构重新考虑哪方面的困难？',hint:'只需选择主要原因；具体情况可向官方人员解释。',options:{family:'家庭或照护情况已改变',mobility:'行动或无障碍设施方面有困难',affordability:'费用难以负担',other:'其他／我不确定'}},
 c_65:{title:'您是否已满 65 岁？',hint:'乐龄补贴计划只会自动评估符合条件的 65 岁及以上新加坡公民；此问题不会决定资格。',options:{yes:'是',no:'否',unsure:'不确定／不愿透露'}},
 c_concern:{title:'公积金或退休事项最让您困扰的是哪方面？',hint:'请勿在此提供 CPF 存款、Singpass 登录资料或提款金额。',options:{rules:'规则或官方信件看不懂',online:'不方便使用网上服务',money:'需要为眼前生活开销作规划',other:'其他／不确定'}},
 m_support:{title:'您是否向有关医疗机构询问过账单援助？',hint:'医疗社工可以解释医院或医药费用方面的可能援助。',options:{yes:'是，已经询问过',no:'还没有',unsure:'不确定／不适用'}},
 m_barrier:{title:'关于医疗费用，您最需要哪方面的帮助？',hint:'这有助于推荐联络渠道，而非决定资格。',options:{bill:'了解账单或付款方式',subsidy:'了解诊所补贴',person:'与职员当面讨论',unsure:'我不确定'}},
 n_issue:{title:'您想反映哪种邻里问题？',options:{lift:'电梯或公共设施',cleanliness:'环境清洁或垃圾',maintenance:'公共走廊维修或照明',unsure:'其他／不确定'}},
 n_report:{title:'您是否已经通过官方渠道反映这个问题？',options:{yes:'是，但问题仍未解决',no:'还没有',unsure:'不确定'}},

 p_issuer:{title:'哪一个机构发出这张罚单或处罚通知？',hint:'请查看通知上所写的机构名称，不需要在这里输入罚单编号。',options:{hdb:'建屋局 HDB（停车罚单）',ura:'市区重建局 URA（停车罚单）',tp:'交通警察 Traffic Police',lta:'陆路交通管理局 LTA（包括电动滑板车）',other:'其他政府机构',unsure:'我不确定'}},
 p_stage:{title:'这张罚单目前处于什么阶段？',hint:'请注意罚单的截止日期和是否规定出庭。法庭传票应尽快处理。',options:{notice:'我刚收到违例或罚款通知',court:'我已收到法庭传票或须出庭的通知',paid:'罚款已经缴清',unsure:'我不确定'}},
 p_goal:{title:'您希望了解哪一方面？',hint:'本指南不能代替您申诉或缴付罚款。',options:{appeal:'如何申请申诉或复核',pay:'如何查询或缴交罚款',status:'如何查询申诉进度',hardship:'我难以负担罚款',unsure:'我不确定应该怎么办'}},
 p_reason:{title:'您想要求复核罚单的主要原因是什么？',hint:'此问题不会判断申诉是否成立。初犯或无心之失不代表一定可以豁免。',options:{error:'我认为罚单可能开错了',medical:'当时发生医疗紧急情况',breakdown:'当时车辆故障或发生特殊情况',first:'这是第一次违例或无心之失',hardship:'我难以负担罚款',other:'其他原因／我不确定'}},

 w_issue:{title:'您需要处理哪一类工作或雇佣问题？',hint:'请选择最接近的类别。这里不需要雇主姓名、工资数额或工作文件。',options:{salary:'欠薪、迟发工资、假期工资或其他工作报酬',dismissal:'我认为自己遭到不合理解雇或被迫辞职',fairness:'职场歧视、骚扰或不公平对待',injury:'工伤或与工作有关的疾病',other:'其他工作问题／不确定'}},
 w_status:{title:'您目前是否仍为有关雇主工作？',hint:'索偿期限可能视乎是否已经离职而不同；本网站不判断您是否符合资格。',options:{current:'是，我仍在那里工作',left:'否，我已经离职',self:'我是自雇人士／不确定自己的雇佣身份',unsure:'不确定／不愿透露'}},
 w_recency:{title:'您是什么时候离职的？',hint:'一般非正当解雇索偿须在离职后一个月内向 TADM 提出。不要为了等待议员接见而错过期限。',options:{month:'大约一个月内',older:'已经超过一个月',unsure:'不清楚／不愿透露'}},
 family_safety:{title:'家中是否有人正面临危险，或您担心出现暴力或虐待？',hint:'如有人正面临即时危险，请立即拨打警方 999。无需在本网站说明姓名或事件详情。',options:{danger:'有人正面临即时危险',concern:'可能出现虐待、忽视或家庭暴力，但未表示有即时危险',no:'没有，这涉及其他家庭问题',unsure:'不确定／不愿透露'}},
 family_issue:{title:'您希望了解哪一类家庭或照护支持？',hint:'只需选择大致类别，无需填写家人的姓名、私人情况或文件。',options:{relationship:'家庭关系压力或家庭辅导',divorce:'婚姻、分居或离婚相关支持',caregiving:'照顾长者或其他需要帮助的家人',childcare:'学前教育、托儿费用或补贴',financial:'家庭基本生活开销或其他综合困难',other:'其他家庭问题／不确定'}},
 u_need:{title:'以下哪项最接近您需要帮助的方面？',options:{financial:'日常生活开销',housing:'住房与租金',cpf:'公积金与退休',health:'医疗费用',municipal:'邻里设施',fines:'罚单或处罚',employment:'工作与雇佣',family:'家庭与照护',unsure:'其他／我不确定'}},
 contact:{title:'您希望用哪种方式寻求帮助？',hint:'我们仍会显示官方网站。',options:{online:'使用官方网站',phone:'通过电话联系',inperson:'亲自前往寻求协助',unsure:'我不确定'}},
};
export function questionText(q:Question,language:Language):Question{if(language==='en')return q;const tr=questionZh[q.id];if(!tr)return q;return {...q,title:tr.title,hint:tr.hint,options:q.options.map(o=>({...o,label:tr.options[o.value]??o.label}))};}
export function hasChineseQuestion(id:string):boolean{return !!questionZh[id]}

const agencyZh:Record<string,string>={
 'Ministry of Social and Family Development':'社会及家庭发展部','CPF Board':'中央公积金局','Housing & Development Board':'建屋发展局','Ministry of Health':'卫生部','Municipal Services Office':'市政服务事务署','Government of Singapore':'新加坡政府','Singapore Police Force':'新加坡警察部队','Land Transport Authority':'陆路交通管理局','Urban Redevelopment Authority':'市区重建局','Singapore Courts':'新加坡法院','Ministry of Manpower':'人力部','Agency for Integrated Care':'护联中心（AIC）','Early Childhood Development Agency':'幼儿培育署（ECDA）',
};
const serviceZh:Record<string,{name:string;description:string;steps:string[];checklist:string[];caution:string;offline?:string;phoneHours?:string}>={
 comcare_urgent:{name:'咨询 ComCare 紧急援助',description:'如果您无法负担生活必需品，请尽快联络 ComCare，询问临时援助。',steps:['尽快拨打 ComCare 热线。','说明您急需食物或其他生活必需品方面的援助。','询问有哪些临时援助或附近的支持服务。'],checklist:['简单说明目前缺乏哪些必需品','社会服务办事处要求的相关资料'],caution:'只有有关机构可以审核申请。本网站不会替您提交申请。',offline:'向 ComCare 询问如何前往社会服务办事处。',phoneHours:'每天上午 7 时至午夜'},
 comcare_smta:{name:'咨询 ComCare 经济援助',description:'如果您的家庭难以应付基本生活开销，短期至中期援助可能适用。',steps:['打开官方 SupportGoWhere 网站，或拨打 ComCare 热线。','说明日常开销方面的困难。','询问如何由社会服务办事处评估您的情况。'],checklist:['官方申请要求的身份资料','按要求提供家庭及工作情况','按要求提供相关证明文件'],caution:'有经济困难不代表一定符合资格。社会服务办事处会评估您的情况。',offline:'前往社会服务办事处，或拨打热线询问最近的地点。',phoneHours:'每天上午 7 时至午夜'},
 comcare_lta:{name:'咨询 ComCare 长期援助',description:'长期无法工作且缺乏经济支持的人士，可以询问长期援助是否适合自己。',steps:['联络 ComCare 或附近的社会服务办事处。','说明自己可能长期需要经济帮助。','询问如何接受全面评估。'],checklist:['官方评估所需的身份及家庭资料','办事处要求的相关文件'],caution:'这只是建议咨询的援助方式，不代表已符合资格或获得批准。',offline:'与社会服务办事处讨论您的情况。',phoneHours:'每天上午 7 时至午夜'},
 comcare_existing:{name:'联络您现有的 ComCare 个案员或办事处',description:'如果情况有变，可向原本负责您的社会服务办事处询问重新评估。',steps:['联络原本负责您的办事处或个案员。','说明有什么改变以及目前需要什么帮助。','询问是否可以重新检讨已有的援助。'],checklist:['如知道，可准备原有的参考编号','简单说明有哪些改变'],caution:'是否调整援助由有关机构决定。',offline:'联络您目前所属的社会服务办事处。',phoneHours:'每天上午 7 时至午夜'},
 sso:{name:'向社会服务办事处求助',description:'如果不确定适合哪一种经济援助，社会服务办事处可向您解释有关选择。',steps:['致电 ComCare 或寻找社会服务办事处。','说明您难以负担哪些日常必需开销。','询问评估安排及其他申请方法。'],checklist:['官方申请所需的身份资料','办事处要求您携带的文件'],caution:'这里仅提供信息，并非正式申请。',offline:'拨打热线查询最近的社会服务办事处。',phoneHours:'每天上午 7 时至午夜'},
 silver:{name:'了解乐龄补贴计划（Silver Support）',description:'符合条件的 65 岁及以上长者会获自动评估，无需自行申请。',steps:['阅读官方乐龄补贴计划说明。','如已满 65 岁，可通过公积金局官方渠道查看情况。','如有疑问，请联络中央公积金局。'],checklist:['如决定通过官方系统查看情况，可能需要 Singpass'],caution:'年满 65 岁并不代表一定符合资格。'},
 hdb_transfer:{name:'向建屋局询问公共租赁组屋换屋事宜',description:'现有公共租赁组屋租户可以向建屋局查询是否能申请换屋，须符合条件。',steps:['阅读建屋局官方公共租赁组屋换屋指引。','如果希望换到较小的租赁组屋，请询问是否可以申请。','只通过建屋局官方渠道申请，或到负责您的建屋局分行询问。'],checklist:['目前的租赁组屋资料','建屋局要求时提供已登记住户资料','建屋局官方渠道要求的相关文件'],caution:'不是所有换屋申请都能获批。建屋局会考虑规定及房屋供应。',offline:'前往负责您租赁组屋的建屋局分行。'},
 hdb_tenant:{name:'向建屋局询问租金援助',description:'建屋局为符合条件的公共租赁租户提供有关租金困难、转介及换较小单位的指引。',steps:['阅读建屋局提供的租户经济困难指引。','联络负责您租赁组屋的建屋局分行，说明情况。','询问可用的援助，以及是否需要社会服务办事处转介。'],checklist:['目前租赁组屋的基本资料','简单说明租金方面的困难'],caution:'请勿假设租金调整或换屋一定获批。',offline:'联系负责您租赁组屋的建屋局分行。'},
 hdb_change:{name:'向建屋局询问租赁住户变更',description:'建屋局设有处理公共租赁组屋租户和住户变更的程序。',steps:['阅读建屋局有关租约变更的官方指引。','寻找负责您房屋的建屋局分行。','询问您的家庭变化是否符合相关条件。'],checklist:['现有公共租赁组屋资料','打算更改的住户登记信息'],caution:'资格和文件要求由建屋局决定。',offline:'前往负责您的建屋局分行。'},
 hdb_rightsize:{name:'了解自有组屋换小房的选择',description:'考虑换较小组屋的年长屋主，可查阅建屋局的退休规划和乐龄安居花红资料。',steps:['查看建屋局乐龄安居花红的官方说明。','向建屋局了解搬家可能带来的财务影响。','不要仅凭本指南作出卖房决定。'],checklist:['供官方评估使用的现有住房资料','关于住房费用及退休收入的问题'],caution:'乐龄安居花红有具体条件，不是所有换小房的住户都自动符合资格。'},
 hdb_general:{name:'向建屋局咨询住房问题',description:'建屋局可以说明哪一种住房服务适合您的情况。',steps:['查看建屋局官方网站或前往分行。','说明您的房子是租的还是自有的。','询问合适的申请或援助渠道。'],checklist:['住房情况的基本信息'],caution:'本网站不能判断您的住房资格或租约权利。',offline:'前往建屋局分行或官方服务地点。'},
 cpf_withdraw:{name:'了解公积金提款条件',description:'年满 55 岁者可能可按规定提取部分公积金。实际可提款金额须向公积金局查询。',steps:['阅读中央公积金局官方提款说明。','如有需要，通过官方 CPF 网站查看自己的退休资料。','了解提款对未来退休入息可能造成的影响。'],checklist:['如需使用官方 CPF 服务，可准备 Singpass'],caution:'切勿向本网站提供公积金密码或账户余额。我们无法计算您的可提款金额。'},
 cpf_general:{name:'查看公积金局退休指引',description:'中央公积金局提供退休储蓄、每月入息及提款规则的官方资料。',steps:['打开中央公积金局官方网站。','查找退休入息、提款或相关资料。','如有疑问，通过官方渠道联络公积金局。'],checklist:['有关退休储蓄的问题'],caution:'本指南不提供个人财务建议。'},
 chas:{name:'了解 CHAS 诊所补贴',description:'CHAS 可协助符合条件者减轻参与计划的全科和牙科诊所门诊费用。',steps:['阅读 CHAS 官方说明。','通过官方服务查询补贴情况或申请方法。','如无法网上办理，请向 CHAS 寻求协助。'],checklist:['CHAS 官方渠道要求的资料'],caution:'补贴级别和资格由政府评估。本网站不能确定您可获得的补贴。',phoneHours:'工作日上午 8:30 至下午 6 时（公共假日除外）'},
 medifund:{name:'向医疗社工询问保健基金（MediFund）',description:'对于通过其他付款方式后仍难以负担医疗账单的合资格病人，保健基金可能提供帮助。',steps:['向相关医疗机构询问如何联络医疗社工。','说明您难以支付医疗费用。','询问保健基金及其他援助。'],checklist:['关于医疗账单的问题','仅通过官方渠道提供医疗社工要求的文件'],caution:'是否符合保健基金资格由有关医疗机构评估。',offline:'在获批准的医疗机构联系医疗社工。'},
 health_general:{name:'查询医疗费用援助',description:'适合的援助取决于诊所、医院或其他医疗开销的类别。',steps:['打开卫生部官方补贴资料。','查找相关医疗费用类别。','如正在医院就医，可要求与医疗社工交谈。'],checklist:['医疗开销的大致类别'],caution:'请勿向本网站上传医疗记录。'},
 oneservice:{name:'通过 OneService 反映邻里问题',description:'OneService 会把公共照明、清洁等市政反馈转交有关机构或市镇理事会。',steps:['打开 OneService 官方网站，选择官方反馈渠道。','在官方平台说明问题和地点。','按官方指示提供照片或联络资料。'],checklist:['问题的准确地点及发现时间','使用 OneService 聊天机器人时，准备问题描述及至少一张照片','只在官方反馈渠道提供所需联络资料'],caution:'OneService 处理市政反馈，并非紧急救援渠道。如有人正面临即时危险，请直接联络紧急服务。'},

 fine_hdb:{name:'查询建屋局停车罚单与申诉',description:'建屋局设有处理所发停车罚单的申诉服务，通常须提供特殊情况及证明。初犯不能保证罚单获撤销。',steps:['确认罚单是由建屋局发出。','先阅读建屋局的申诉条件，再使用官方申诉服务。','如需缴费、查询申诉结果或期限，请查阅罚单及建屋局官方联络指引。'],checklist:['供官方服务查询的罚单编号及期限','如需申诉，准备有关证明文件','之前的申诉确认通知（如有）'],caution:'建屋局通常只考虑有证明的特殊情况，罚款金额不能随意协商减少。请留意期限，不要假设议员可取消罚单。'},
 fine_ura:{name:'查询 URA 停车罚单与申诉',description:'市区重建局（URA）提供官方申诉、缴费和查询申诉结果渠道，并说明大部分申诉不获接纳。',steps:['确认停车罚单由 URA 发出。','了解 URA 的申诉条件；忘记启动 Parking.sg 通常不获接纳。','按照通知上的期限，从 URA 官方网页选择申诉、缴费或查询结果服务。'],checklist:['URA 罚单编号及截止日期','如需申诉，准备医疗或车辆维修等证明','之前的申诉确认通知（如有）'],caution:'URA 指出多数申诉遭拒，重复申诉也可能不获受理。初犯、无心之失或议员求情信不保证豁免。'},
 fine_tp:{name:'了解交通警察的违例申诉规定',description:'交通警察只考虑有文件证明的医疗紧急情况申诉；单凭第一次违例并不足够。',steps:['确认通知由交通警察发出，并核对截止日期。','阅读交通警察官方申诉条件，了解医疗紧急情况所需的证据。','如适用，使用官方 Traffic e-Appeals 服务；其他查询及缴费则使用警察部队的官方渠道。'],checklist:['仅在官方渠道使用的罚单或报告参考编号','医疗紧急情况的证明（如需申诉）','使用官方电子服务所需的 Singpass 和电邮'],caution:'如果没有新证据，交通警察不会考虑重复申诉。初犯不代表会获批准，更不能忽略法庭日期。'},
 fine_lta:{name:'向陆交局查询罚单及个人代步工具违例',description:'陆交局处理车辆及个人代步工具违例；一般车辆申诉服务不一定适用于电动滑板车罚单。',steps:['确认罚单由 LTA 发出，以及属于车辆还是个人代步工具违例。','查阅陆交局官方罚单网页；所列申诉服务是针对车辆相关违例。','电动滑板车等案件请通过陆交局官方联络渠道查询适用程序，不要直接假设使用同一申诉表格。'],checklist:['通知的违例类别及发出机构','缴费、回复或出庭期限','官方机构要求的有关文件'],caution:'个人代步工具违例可能进入法庭程序。不要忽略出庭日期，也不要假设议员能够免除处罚。'},
 fine_court:{name:'了解法庭传票及下一步',description:'法庭传票必须依照法庭程序处理；向机构或议员求情不会自动取消出庭要求。',steps:['立即查阅传票上的法庭、日期、时间及具体指示。','阅读新加坡法院有关监管违例的官方说明，向检控机构查询正式申述方式。','除非法庭正式另有指示，否则必须按规定出庭；有需要可寻求合资格的法律帮助。'],checklist:['法庭传票及出庭日期','已向机构或法庭提交资料的确认通知','按官方人员要求提供的证明'],caution:'切勿错过出庭日期。本网站不提供法律意见，不会代为认罪、上诉或申请延期。'},
 fine_unknown:{name:'先确认是哪一个机构发出罚单',description:'不同政府机构及法庭处理不同处罚。请先查看通知上的机构和截止日期。',steps:['从罚单找出发出机构、通知类别、期限及是否须出庭。','通过罚单所列的官方网址，或 LifeSG 查找有关政府服务。','向发出机构确认应使用哪项缴费、复核或申诉渠道；如果有传票，也须另行遵守法庭指示。'],checklist:['机构名称及罚单类别','回复或出庭期限','之前的官方回复（如有）'],caution:'没有适用于所有罚单的统一申诉方式。LifeSG 只是服务目录，不提供法律意见。无心之失或初犯不保证罚款获撤销。'},

 work_salary:{name:'向 TADM 咨询欠薪或雇佣报酬索偿',description:'TADM 为符合条件的工资与雇佣报酬纠纷提供咨询及调解，现职与离职员工的时限不同。',steps:['阅读人力部的雇佣纠纷说明，通过 TADM 的 Ask TADM 服务或官方电子服务查询。','一般在职员工可在纠纷发生后一年内提出工资索偿；离职员工通常须在离职后六个月内办理。请尽快向 TADM 核实具体期限。','保留雇佣条款及工资记录，只向 TADM、人力部或其他获授权人员提供。'],checklist:['工资或工作报酬纠纷的大致类别','与期限有关的日期','只在正式渠道要求时提供雇佣文件及工资单'],caution:'TADM 是否受理视乎雇佣身份及索偿种类。家政工人、部分公务员、海员或自雇人士可能有不同程序；本网站不会代为索偿。'},
 work_dismissal:{name:'向 TADM 咨询可能涉及的不合理解雇',description:'TADM 处理符合条件的不合理解雇索偿；一般须在离职后一个月内提出。',steps:['查看人力部对不合理解雇的解释，包括非自愿辞职的情况。','一般不合理解雇索偿须在最后工作日后一个月内向 TADM 提出；怀孕相关或年龄相关个案可能有其他途径和期限。','使用 TADM 正式咨询或申诉服务，不要等候议员接见，也不要假设本网站可以判断案件。'],checklist:['供正式核实期限的最后工作日期','官方要求时提供的雇佣及解雇文件','只与获授权人员讨论的相关记录'],caution:'申诉时限可能很短。本网站无法判断是否构成不合理解雇，也不保证调解或提供法律意见。'},
 work_fairness:{name:'就职场骚扰或不公平对待寻求建议',description:'人力部建议遇到歧视、骚扰等职场不公问题的人联系 TAFEP 寻求帮助。',steps:['查阅人力部有关职场歧视和骚扰的指引；在安全情况下了解内部投诉途径。','通过官方 TAFEP 渠道咨询或反映职场不公平待遇。','如有人身威胁或伤害，应优先向警方或有关应急服务求助；这里不是紧急报案渠道。'],checklist:['职场问题的大致类别','只在正式咨询时提供的相关日期或来往记录','有关保障、投诉与后续程序的问题'],caution:'TAFEP 的建议或反馈不等于已确定有歧视或索偿成功。2026 年不能把计划于日后实施的《职场公平法》当作已全面生效。'},
 work_injury:{name:'了解人力部的工伤赔偿指引',description:'人力部说明符合条件的工伤和职业病如何按工伤赔偿制度申报及评估。',steps:['先取得必要医疗帮助，并尽快通知雇主或主管发生工伤。','阅读人力部工伤索偿指引，了解报告、医药费及病假工资的处理方式。','若雇主未按规定办理或出现争议，请通过人力部官方工伤渠道查询。'],checklist:['事故日期及通知雇主的情况','人力部或获授权保险公司要求的医疗单据','现有参考编号或保险机构回复（如有）'],caution:'本指南不能代替紧急医疗服务，也不判断赔偿资格。工伤申报义务及适用范围视乎情况而定；勿在此上传医疗记录。'},
 work_general:{name:'查找适当的雇佣咨询渠道',description:'人力部区分工资索偿、解雇申诉、职场骚扰等问题，不同情况可能由不同机构处理。',steps:['阅读人力部雇佣咨询目录，确定应联系 TADM、TAFEP、工会或其他机构。','核实有关法律或雇佣安排是否适用；目录不会自动判断个人资格。','尽早向官方咨询部门了解时限、所需资料及正确程序。'],checklist:['雇佣问题的大致类别','向正式顾问咨询的问题及相关重要日期'],caution:'人力部指出部分雇佣安排及纠纷不属一般法定程序。本网站不提供法律意见或代为投诉。'},
 family_danger:{name:'有人面临即时危险时，请立即联系警方',description:'若生命或人身安全正面临即时危险，社会及家庭发展部建议立即拨打警方 999；若无法安全说话，可发送短信至 70999。',steps:['如有人正面临即时危险，请立即拨打警方 999；如无法安全通话，请发短信至 70999。','不要等候填写表格或参加议员接见活动；应遵照紧急服务人员的指示。','如非即时危险，亦可拨打全天候反暴力与性骚扰热线 NAVH 1800-777-0000 了解支持。'],checklist:['先保障人身安全，报警前无需准备文件','只向警方或获授权支援人员提供必要资料'],caution:'本网站不会代为报警、追踪个案或保证人身安全。不要等待本网站或议员的回复。',offline:'如可安全离开现场，请前往安全地点并联系警方或附近警务单位。',phoneHours:'24 小时'},
 family_protection:{name:'联系全国反暴力与性骚扰热线 NAVH',description:'社会及家庭发展部设有 24 小时 NAVH 热线，为家庭暴力、虐待或忽视问题提供建议及通报渠道。',steps:['拨打 NAVH 热线 1800-777-0000，咨询或通报虐待、暴力或忽视情况。','如不方便安全通话，可在安全情况下使用 MSF 官方网上通报渠道；只向官方提供相关个人资料。','如危险变得即时紧急，请拨打警方 999，或发送短信至 70999；不要依赖议员接见处理紧急保护。'],checklist:['在安全情况下向专业人员概述问题','关于保护措施或支持服务的问题'],caution:'无需向 NeighbourAssist 透露敏感情况。有人面临即时危险时应联系警方 999，不要只拨打 NAVH。',offline:'向 MSF 或 NAVH 询问安全的家庭服务中心或专门支援渠道。',phoneHours:'24 小时'},
 family_fam:{name:'了解 MSF 家庭辅导及关系支持',description:'FAM 中心提供婚姻、离婚及家庭关系辅导与相关课程。',steps:['查阅社会及家庭发展部 FAM 计划网页，选择适合的家庭关系或婚姻辅导主题。','查看附近的 FAM 中心，或拨打 MSF 热线并说明想咨询家庭辅导或离婚支持。','询问预约和网上或面对面辅导方式；本网站不要求透露家庭私事。'],checklist:['想咨询的家庭辅导主题','有关预约及计划选择的问题'],caution:'FAM 服务是否合适要视乎个人情况。如有暴力或即时危险，应先使用保护或报警渠道。'},
 family_fsc:{name:'寻找家庭服务中心 FSC',description:'家庭服务中心为面对社会及情绪困难的家庭提供资讯、社会工作支持和转介服务。',steps:['打开 MSF 官方家庭服务中心目录，选择 Family Service Centres。','通过政府网站的定位工具查询服务地点；无需在 NeighbourAssist 输入住址。','联系合适的中心，询问能否处理相关需要或转介其他服务。'],checklist:['家庭或社会支持需求的大致类别','如何联系附近中心和预约的问题'],caution:'查询不等于任何计划已批准。如有人面临即时危险，应先联系紧急或保护服务。'},
 family_caregiving:{name:'向 AIC 咨询照护与乐龄支援',description:'护联中心（AIC）的 AIC Link 可向照顾者及长者提供社区护理和相关援助资讯。',steps:['通过 AIC 官方网站或 AIC Link 询问照护与社区护理服务。','按实际需要了解照护培训、暂托、长者支持及有关补助计划。','如正式申请要求医疗或身份资料，只能通过获授权官方渠道提供；本网站无法决定资格。'],checklist:['需要哪一类照护帮助','有关服务地点、补贴或支持方式的问题'],caution:'AIC 官方热线或服务可能会询问身份证资料；不要将这些资料交给 NeighbourAssist。由相关机构评估服务和补贴资格。',offline:'通过 AIC 官网查找附近的 AIC Link 服务地点。'},
 family_childcare:{name:'了解学前教育及托儿补贴',description:'LifeSG 和幼儿培育署 ECDA 说明学前教育报名及符合条件的托儿补贴申请方法。',steps:['使用 LifeSG 学前教育及托儿指南，了解报名方式和相关补贴。','孩子确认入学后，符合条件的家庭可根据托儿中心发送的指引使用官方 LifeSG Form 1 处理 ECDA 入学及补贴申请。','如不确定申请手续，请通过托儿中心或 ECDA 公布的渠道查询。'],checklist:['想咨询的学前教育和补贴类别','如已报名，托儿中心提供的官方申请指引'],caution:'本网站不计算补贴资格，也不会提交托儿申请；由 ECDA 及获授权的官方服务评估并接收家庭个人资料。'},
 lifesg:{name:'通过 LifeSG 寻找政府服务',description:'LifeSG 提供政府服务的官方资料和入口。',steps:['打开 LifeSG 官方网站。','浏览符合您需要的服务。','如有需要，可请值得信任的照顾者帮忙。'],checklist:['简要说明需要哪方面的帮助'],caution:'这是独立学生示范网站，不能代表政府提交申请。'},
};
export function hasChineseService(id:string):boolean{return !!serviceZh[id]}
export function serviceText(service:Service,lang:Language):Service {
 if(lang==='en')return service;
 const s=serviceZh[service.id];if(!s)return service;
 return {...service,...s,agency:agencyZh[service.agency]??service.agency};
}

const reasonsZh:Record<string,string>={
 'This is a suitable official starting point for further information.':'这是查询官方援助服务的一个起点。',
 'You indicated that food or other essential expenses need urgent attention.':'您表示急需钱购买食物或其他生活必需品。',
 'You indicated that you already receive ComCare support.':'您表示已经在领取 ComCare 援助。',
 'You mentioned being unable to work and needing support over a longer period.':'您表示无法工作，而且可能需要较长期的帮助。',
 'You mentioned difficulties meeting everyday expenses or a temporary income problem.':'您表示难以负担日常开销，或暂时面对收入困难。',
 'An SSO can help clarify which programme may apply.':'社会服务办事处可协助了解哪些援助可能适用。',
 'You said you rent an HDB public rental flat and want a smaller home.':'您表示住在公共租赁组屋，并希望换成较小的房子。',
 'You said you are a public-rental tenant struggling with rental costs.':'您表示住在公共租赁组屋，并面对租金压力。',
 'You asked about the tenancy or registered occupants of a public rental flat.':'您希望了解公共租赁组屋的租约或登记住户事宜。',
 'You said you own an HDB flat and are considering moving to a smaller home.':'您表示拥有一间组屋，并考虑换成较小的住房。',
 'You mentioned difficulty paying rent in a privately rented home. An SSO can discuss possible financial support.':'您表示难以支付私人住房租金。社会服务办事处可讨论可能的经济援助。',
 'Private tenancy questions are different from HDB public-rental transfers. This is a general official directory, not a tenancy decision.':'私人租赁与建屋局公共租赁组屋不同。这里提供一般官方服务入口，不作租约决定。',
 'HDB can confirm which housing procedure is appropriate for your living situation.':'建屋局可解释哪项住房程序适合您的情况。',
 'You asked about support payments for seniors. Silver Support is automatically assessed.':'您想了解长者补助。乐龄补贴计划由政府自动评估。',
 'You said you are at least 55 and want to understand CPF withdrawal conditions.':'您表示已满 55 岁，想了解公积金提款条件。',
 'CPF Board can explain the options available for your age and circumstances.':'中央公积金局可说明适合您年龄和情况的选择。',
 'You mentioned GP or dental clinic costs.':'您提到全科或牙科诊所费用。',
 'You mentioned difficulty paying a hospital or other medical bill.':'您提到难以支付医院或其他医疗账单。',
 'MOH can guide you toward the right scheme for the care involved.':'卫生部可提供与所需医疗服务相关的援助资料。',
 'This concerns your neighbourhood environment or municipal facilities.':'这与邻里环境或市政设施有关。',


 'You asked about unpaid wages or employment payment, for which TADM provides dispute advice.':'您希望了解欠薪或工作报酬纠纷，可向 TADM 咨询。',
 'You reported a possible wrongful dismissal; some claims have a short filing deadline.':'您认为自己可能遭到不合理解雇；部分索偿有很短的期限。',
 'You mentioned workplace discrimination, harassment or unfair treatment; MOM directs these enquiries to TAFEP.':'您提到职场歧视、骚扰或不公平对待；人力部建议向 TAFEP 咨询。',
 'You asked about an injury or illness related to work; MOM provides work-injury claim guidance.':'您希望了解工伤或职业病；人力部提供工伤索偿指引。',
 'MOM can help identify the correct channel for your employment issue.':'人力部可帮助您确定有关雇佣问题的适当咨询渠道。',
 'You reported immediate danger; emergency police assistance must come before general family counselling.':'您表示有人正面临即时危险，应先联系警方求助，而非等待一般家庭辅导。',
 'You reported concern about possible abuse, neglect or violence; NAVH provides specialist support.':'您担心出现虐待、忽视或暴力情况，NAVH 可提供专业支援。',
 'You asked about relationship, marriage or separation support; MSF offers FAM services.':'您希望了解家庭关系、婚姻或分居支持；MSF 提供 FAM 服务。',
 'You asked for caregiving or eldercare guidance; AIC Link is a relevant starting point.':'您希望了解照护或乐龄支援，可先咨询 AIC Link。',
 'You asked about preschool, childcare or related subsidies; LifeSG and ECDA provide official guidance.':'您希望了解学前教育、托儿或补贴，LifeSG 与 ECDA 有相关官方指引。',
 'You mentioned broader family difficulties; an FSC can discuss social needs and referrals.':'您提到家庭生活和社会支持困难，家庭服务中心可协助了解相关资源。',
 'A Family Service Centre can help identify suitable family and community support.':'家庭服务中心可协助了解相关家庭与社区支持。',
 'You reported a court summons or required court date. Court instructions take priority.':'您已收到法庭传票或须出庭的通知；必须优先遵守法庭指示。',
 'You identified HDB as the issuer of the parking notice.':'您表示停车罚单由建屋局发出，应使用建屋局的官方渠道。',
 'You identified URA as the issuer of the parking notice.':'您表示停车罚单由市区重建局发出，应使用 URA 的官方渠道。',
 'You identified Traffic Police as the issuer of the offence notice.':'您表示通知由交通警察发出，应查阅交通警察的申诉规定。',
 'You identified LTA as the issuer; vehicle and active-mobility procedures may differ.':'您表示通知由陆交局发出；车辆与个人代步工具案件的程序可能不同。',
 'Identify the issuing agency before choosing an appeal or payment route.':'请先确认发出罚单的机构，再选择安全、正确的缴费或申诉渠道。',

};
export function reasonText(reason:string,lang:Language):string{return lang==='en'?reason:reasonsZh[reason]??'根据您的答案，以下官方渠道可能有帮助。'}

const detailLabel:Record<string,{en:string;zh:string}>={
 'f_need:food':{en:'I need help with food and daily essentials.',zh:'我需要食物和日用品方面的帮助。'},
 'f_need:utilities':{en:'I am finding it difficult to pay utility or household bills.',zh:'我难以支付水电或家庭账单。'},
 'f_need:rent':{en:'I am struggling with rent or housing expenses.',zh:'我难以负担租金或住房开销。'},
 'f_need:living':{en:'I am struggling with general living costs.',zh:'我难以负担一般生活开销。'},
 'h_context:alone':{en:'I live alone now and would like to consider a smaller home.',zh:'我现在独居，想考虑换较小的住房。'},
 'h_context:cost':{en:'My current housing costs are difficult to afford.',zh:'我目前的住房费用难以负担。'},
 'h_context:mobility':{en:'I have mobility difficulties and would like a more suitable home.',zh:'我行动不便，想住在更合适的地方。'},
 'h_rent:ongoing':{en:'I have trouble paying rent each month.',zh:'我每个月都难以支付租金。'},
 'h_rent:arrears':{en:'I have unpaid rent and need to know what help is available.',zh:'我有未缴付的租金，想了解有哪些援助。'},
 'h_rent:change':{en:'My rent or household circumstances have recently changed.',zh:'我的租金或家庭情况最近发生改变。'},
 'p_reason:error':{en:'I want to check whether the notice was issued in error.',zh:'我想核实这张罚单是否开错了。'},
 'p_reason:medical':{en:'I want to ask about a medical emergency at the time of the notice.',zh:'我想说明当时发生的医疗紧急情况。'},
 'p_reason:breakdown':{en:'I want to ask about a vehicle breakdown or unusual event.',zh:'我想说明当时的车辆故障或其他特殊情况。'},
 'p_reason:first':{en:'This was a first offence or an honest mistake. I want to understand the official policy.',zh:'这是第一次违例或无心之失，我想了解官方规定。'},
 'p_reason:hardship':{en:'I am struggling to afford the penalty and want to ask the agency about available options.',zh:'我难以负担这笔罚款，希望向有关机构了解可用的选择。'},
};
export function situationText(a:Answers,lang:Language):string|null {
 for(const key of ['f_need','h_context','h_rent','p_reason']){const val=a[key];if(val&&detailLabel[`${key}:${val}`])return detailLabel[`${key}:${val}`][lang];}
 return null;
}
