import type {Service} from './engine';
import type {Language} from './i18n';

// Source-checked: 18 October 2026. These guides explain confirmed routes and
// deliberately avoid unverified button-by-button instructions inside external services.
export type HelpMethod='online'|'phone'|'inperson'|'unsure';
export type GuideRecord={
 url:string;
 source:string;
 en:{online:string[];phone:string[];inperson:string[]};
 zh:{online:string[];phone:string[];inperson:string[]};
 phone?:string;
 phoneHours?:string;
};
const MSF='https://www.msf.gov.sg/what-we-do/comcare';
const SSO='https://www.msf.gov.sg/our-services/directories';
const HDB_CONTACT='https://www.hdb.gov.sg/about-us/contact-us';
const CPF_CONTACT='https://www.cpf.gov.sg/service/';
const HDB_TRANSFER='https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/transfer-to-another-public-rental-flat';
const HDB_CHANGE='https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters';
const CHAS='https://chas.moh.gov.sg/Home/Welcome';
const ONESERVICE='https://www.oneservice.gov.sg/oschatbot-faqs/';
const cpfPhone='1800-227-1188';
const cpfHours='Mon–Fri, 8:30 am–5:30 pm';
const hdbPhone='6225-5432';
const hdbHours='Mon–Fri, 8am–5pm (except public holidays)';
const g=(url:string,source:string,en:GuideRecord['en'],zh:GuideRecord['zh'],phone?:string,phoneHours?:string):GuideRecord=>({url,source,en,zh,phone,phoneHours});
export const guides:Record<string,GuideRecord>={
 comcare_urgent:g(MSF,MSF,{
  online:['On the MSF ComCare page, find “Interim Assistance (IA)” and select “Apply for IA”. This takes you to the official application channel.','If you cannot afford food or other essentials in the next few days, do not wait for an online reply: call the ComCare hotline promptly.','Provide your personal details and supporting documents only within the official application, if requested.'],
  phone:['Call ComCare at 1800-222-0000 (7 am to midnight daily).','Say you need urgent temporary help with food or essential expenses. Ask about Interim Assistance and what you should do today.','Ask whether you should contact an SSO or community partner and what information to prepare.'],
  inperson:['Call ComCare first if the need is urgent; ask which nearby Social Service Office or Community Club can help.','Use the official SSO directory to check the location and opening hours before travelling.','Explain the immediate need to staff. They will advise the assessment and what documents they need.']
 },{
  online:['在社会及家庭发展部的 ComCare 网页找到“Interim Assistance (IA)”，点击“Apply for IA”，进入官方申请渠道。','如果未来几天无法负担食物或必需品，请尽快拨打 ComCare 热线，不要只等待网上回复。','只有在官方申请平台要求时，才提供个人资料或证明文件。'],
  phone:['拨打 ComCare 热线 1800-222-0000（每天上午 7 时至午夜）。','说明您急需食物或其他必需品援助，并询问临时援助（IA）及今天应采取的行动。','询问应联络哪一间社会服务办事处或社区伙伴，以及需要准备什么资料。'],
  inperson:['情况紧急时，请先致电 ComCare，询问附近哪间社会服务办事处或民众俱乐部可以协助。','使用官方办事处目录，先确认地点及开放时间再出门。','向职员说明紧急需要，由他们告知评估方式和所需文件。']
 }),
 comcare_smta:g(MSF,MSF,{
  online:['On the MSF ComCare page, look for “Short-To-Medium-Term Assistance (SMTA)” and choose “Apply for SMTA”.','The link takes you to SupportGoWhere. Follow its instructions to apply using your own authorised credentials.','Prepare household information and supporting documents when the official form requests them; an SSO will assess your application.'],
  phone:['Call ComCare at 1800-222-0000 and explain which essentials or household bills are difficult to afford.','Ask whether Short-to-Medium-Term Assistance is worth applying for and how to begin.','Ask what documents to prepare and how to apply if you cannot use the internet.'],
  inperson:['Open the MSF directory to find a nearby Social Service Office and check its opening hours.','Ask for help applying for ComCare Short-to-Medium-Term Assistance.','Bring the documents the office requests; the SSO assesses the application, not this website.']
 },{
  online:['在 ComCare 官方网页找到“Short-To-Medium-Term Assistance (SMTA)”并点击“Apply for SMTA”。','链接会转到 SupportGoWhere。请使用自己的获授权账号，按照官方指示申请。','官方表格要求时再准备家庭资料及证明文件；社会服务办事处负责审核。'],
  phone:['拨打 ComCare 热线 1800-222-0000，说明哪些生活必需品或家庭账单难以负担。','询问是否可以申请短期至中期援助（SMTA），以及如何开始。','询问所需文件，以及无法上网时可以怎样申请。'],
  inperson:['使用社会及家庭发展部的官方目录寻找附近的社会服务办事处，并核实开放时间。','到场说明需要协助申请 ComCare 短期至中期援助。','按办事处要求携带相关文件；正式审核由办事处进行。']
 }),
 comcare_lta:g(MSF,MSF,{
  online:['On the MSF ComCare page, find “Long-Term Assistance (LTA)” and select “Apply for LTA”.','Follow the official instructions on SupportGoWhere. Explain the long-term inability to work only through the authorised application.','If the application is difficult, ask an SSO for an in-person assessment.'],
  phone:['Call ComCare at 1800-222-0000.','Say you want to ask about long-term assistance for someone who may be permanently unable to work.','Ask how an SSO assesses the case and which supporting documents may be needed.'],
  inperson:['Find the nearest SSO through the official MSF directory and confirm its hours.','Ask an officer about ComCare Long-Term Assistance, explaining the broad circumstances.','Let the officer advise the full assessment; do not assume the questionnaire confirms eligibility.']
 },{
  online:['在 ComCare 官方网页找到“Long-Term Assistance (LTA)”并点击“Apply for LTA”。','按照 SupportGoWhere 的官方说明申请，只在获授权的官方表格提供长期无法工作的相关资料。','如难以完成网上申请，可以向社会服务办事处寻求当面协助。'],
  phone:['拨打 ComCare 热线 1800-222-0000。','说明想询问长期援助，受助人可能长期无法工作。','询问社会服务办事处如何评估，以及可能需要哪些文件。'],
  inperson:['通过社会及家庭发展部官方目录找到附近的办事处，并确认开放时间。','向职员咨询 ComCare 长期援助，并概述有关情况。','由职员解释评估程序；本问卷并不能确定资格。']
 }),
 comcare_existing:g(MSF,MSF,{
  online:['Locate your existing SSO or caseworker contact information in previous official correspondence.','Ask the current SSO how to update your case when expenses or household circumstances change.','If you cannot reach your caseworker, use the ComCare hotline or official SSO directory.'],
  phone:['Call your existing SSO or caseworker if you know the contact. Otherwise call ComCare at 1800-222-0000.','Explain what changed since your last assessment (for example, living costs or ability to work).','Ask whether your case can be reviewed and whether any new supporting documents are needed.'],
  inperson:['Contact the SSO handling your existing case to ask how to arrange a review.','Confirm opening hours and whether you need an appointment before visiting.','Bring your existing case reference if available and discuss changed circumstances with staff.']
 },{
  online:['先从以前的官方信件查找负责您个案的社会服务办事处或个案员联络方式。','联系原办事处，询问当生活开销或家庭情况改变时应如何更新个案。','如无法联系个案员，可使用 ComCare 热线或官方办事处目录。'],
  phone:['如知道号码，请联络原办事处或个案员；否则拨打 ComCare 1800-222-0000。','说明上次评估后出现的改变，例如开销增加或工作能力改变。','询问能否重新检讨个案，以及是否需要补交文件。'],
  inperson:['联系负责现有个案的社会服务办事处，询问如何安排重新评估。','到访前确认开放时间及是否需要预约。','如知道个案参考编号，可带上并向职员说明情况变化。']
 }),
 sso:g(SSO,SSO,{
  online:['Use the MSF SSO directory to find the office serving your area.','Check the office address, hours and contact details.','Ask the office which ComCare or other assistance route you should use; do not guess your eligibility.'],
  phone:['Call ComCare at 1800-222-0000 if you do not know which assistance scheme fits.','Describe the general type of difficulty, such as food, bills or rent.','Ask for the right SSO, what to prepare, and whether an in-person application is suitable.'],
  inperson:['Use the official MSF directory to find a Social Service Office and confirm its opening hours.','Tell the officer you are unsure which financial assistance scheme is appropriate.','Follow their instructions for assessment and any documents they request.']
 },{
  online:['使用社会及家庭发展部的办事处目录寻找服务您地区的社会服务办事处。','核实办事处地址、开放时间及联络方式。','询问适合的 ComCare 或其他援助渠道，不要自行推断资格。'],
  phone:['如果不清楚适合哪项援助，可拨打 ComCare 1800-222-0000。','大致说明困难属于食物、账单或租金等哪方面。','询问应联系哪间办事处、需要准备什么，以及是否适合当面申请。'],
  inperson:['使用官方目录寻找社会服务办事处，并确认开放时间。','向职员说明您不确定适合哪项经济援助。','按照职员要求进行评估，并准备所需文件。']
 }),
 silver:g('https://www.cpf.gov.sg/member/retirement-income/government-support/silver-support-scheme','https://www.cpf.gov.sg/member/retirement-income/government-support/silver-support-scheme',{
  online:['Read CPF Board’s Silver Support page. This scheme is automatically assessed; there is no application to submit.','Use the official eligibility-check link on that page if you want to check status.','If the result is unclear, use CPF Board’s official contact channels; being aged 65 or older alone does not confirm eligibility.'],
  phone:['Call CPF Board at 1800-227-1188 during its published hotline hours.','Ask how to check Silver Support eligibility or payment status.','Do not give your Singpass password or banking credentials over the phone.'],
  inperson:['Go to the CPF Board contact page and book a service-centre appointment before visiting.','Ask for assistance understanding Silver Support and how automatic assessment works.','Bring only documents CPF Board asks you to bring through its official channels.']
 },{
  online:['阅读公积金局的乐龄补贴计划（Silver Support）网页。政府会自动评估，无需自行申请。','如想查看情况，可使用该网页上的官方资格查询链接。','如结果不清楚，请通过公积金局官方渠道询问；年满 65 岁不代表一定符合资格。'],
  phone:['在公积金局公布的热线时间拨打 1800-227-1188。','询问如何查看乐龄补贴资格或付款情况。','不要在电话中透露 Singpass 密码或银行登录资料。'],
  inperson:['先到公积金局官方联络网页预约服务中心，再前往。','询问乐龄补贴计划及自动评估方式。','只携带公积金局通过官方渠道要求的文件。']
 },cpfPhone,cpfHours),
 hdb_transfer:g(HDB_TRANSFER,'https://www.hdb.gov.sg/change-rental-flat-under-public-rental-scheme/get-help',{
  online:['Open “Transfer to Another Public Rental Flat” on HDB’s website. Check the stated tenancy and transfer conditions first.','Select the application link, then choose the zone of the HDB Branch managing your current rental flat. The service directs you to a FormSG application.','Sign in with your own Singpass when prompted and supply the details requested there. HDB will assess the transfer; a smaller flat is not guaranteed.'],
  phone:['Call the HDB Branch Service Line at 6225-5432 to ask about transferring a public rental flat.','Explain that you want to request a smaller rental flat and ask which HDB Branch manages your current tenancy.','Ask about transfer conditions, the correct application route and whether the branch can help you apply in person.'],
  inperson:['Identify the HDB Branch managing your existing public rental flat and check its contact details.','Ask whether you should visit or arrange an appointment to submit a rental-flat transfer request over the counter.','Bring the tenancy and applicant information HDB asks for. Do not end your current tenancy before HDB confirms the appropriate next steps.']
 },{
  online:['打开建屋局“Transfer to Another Public Rental Flat”（申请调换另一间公共租赁组屋）网页，先阅读租约及换屋条件。','点击申请链接，并按现有租赁组屋的管理分局选择地区；之后会进入 FormSG 申请表。','按提示使用自己的 Singpass 登录并填写官方要求的资料。建屋局会审核，不能保证获批较小组屋。'],
  phone:['拨打建屋局分局热线 6225-5432，咨询公共租赁组屋换屋事宜。','说明希望搬到较小的租赁组屋，并询问现有租约由哪间分局负责。','询问申请条件、正确申请渠道，以及能否到分局当面申请。'],
  inperson:['找出负责现有租赁组屋的建屋局分局并确认联络方式。','询问是否需要先预约，或可到柜台提交换屋申请。','按建屋局要求携带租约及申请人资料。未获确认前不要自行终止现有租约。']
 },hdbPhone,hdbHours),
 hdb_tenant:g('https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/assistance-for-tenants','https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/assistance-for-tenants',{
  online:['Read HDB’s “Assistance for Tenants of Public Rental Flats” page.','Look at the listed options: possible rent-arrears instalments, SSO referrals, social support, or rightsizing to a smaller rental flat.','Contact the HDB Branch handling your rental flat to ask which measure may apply; the page is guidance, not an automatic approval.'],
  phone:['Call the HDB Branch Service Line at 6225-5432.','Say whether the difficulty is monthly rental costs, outstanding rent or a change in your household.','Ask about instalments, possible rightsizing, or referral to a Social Service Office.'],
  inperson:['Contact the branch managing your public rental flat and check when you can speak with staff.','Explain which rental expenses are difficult to afford and ask about available assistance.','Follow the official instructions for any instalment arrangement, rightsizing enquiry, or SSO referral.']
 },{
  online:['阅读建屋局“Assistance for Tenants of Public Rental Flats”（公共租赁组屋租户援助）网页。','查看所列选项：租金欠款分期付款、社会服务办事处转介、其他社会支援或换成较小租赁组屋。','联络负责您租约的建屋局分局，询问适合哪项措施；网页并不代表自动获批。'],
  phone:['拨打建屋局分局热线 6225-5432。','说明困难属于每月租金、未缴租金，或家庭情况变化。','询问分期付款、换小组屋或转介社会服务办事处的选项。'],
  inperson:['联系管理现有租赁组屋的分局，确认何时可以与职员面谈。','说明哪些租金开销难以负担，并询问援助选项。','按官方指示处理分期付款、换房查询或转介事宜。']
 },hdbPhone,hdbHours),
 hdb_change:g(HDB_CHANGE,HDB_CHANGE,{
  online:['Open HDB’s “Tenancy Matters for Public Rental Flats” page.','Choose the relevant topic: “Change of Occupiers” or “Change of Tenancy”. These are different requests.','Follow the official instructions for that topic and provide applicant and occupier details only in the official channel.'],
  phone:['Call HDB’s Branch Service Line at 6225-5432.','Explain whether you need to update authorised occupiers or change who holds the rental tenancy.','Ask which official application to use and whether an in-person option is appropriate.'],
  inperson:['Contact the HDB Branch managing the current public rental flat.','Ask about the process for changing a tenant or registered occupier and any appointment requirements.','Provide documents only to the authorised HDB service when requested.']
 },{
  online:['打开建屋局公共租赁组屋“Tenancy Matters”（租约事宜）网页。','按需要选择“Change of Occupiers”（更改登记住户）或“Change of Tenancy”（更改承租人）；两者不同。','按照有关官方指示办理，只在官方渠道提供申请人及住户资料。'],
  phone:['拨打建屋局分局热线 6225-5432。','说明需要更新登记住户，还是更改租约上的承租人。','询问应使用哪项官方申请，以及是否可以当面办理。'],
  inperson:['联系负责现有公共租赁组屋的建屋局分局。','询问更改承租人或登记住户的程序，以及是否需要预约。','只有在建屋局正式要求时，才向获授权渠道提供文件。']
 },hdbPhone,hdbHours),
 hdb_rightsize:g('https://www.hdb.gov.sg/managing-my-home/retirement-planning/monetising-flat-for-retirement/silver-housing-bonus','https://www.hdb.gov.sg/managing-my-home/retirement-planning/monetising-flat-for-retirement/silver-housing-bonus',{
  online:['Read HDB’s Silver Housing Bonus page to understand rightsizing an owned home to a smaller flat.','Check the current conditions, including the next flat type, CPF Retirement Account requirements and when an SHB application is possible.','Before selling or committing to a purchase, seek independent guidance on costs, proceeds and retirement payouts.'],
  phone:['Contact HDB using its published housing sales or branch enquiry channels on the official contact page.','Say you own an HDB flat and are considering moving to a smaller flat for retirement.','Ask about Silver Housing Bonus conditions and which consultation or service is relevant before making any transaction.'],
  inperson:['Use HDB’s official contact page to find the appropriate sales service and confirm whether an appointment is required.','Ask about rightsizing and the Silver Housing Bonus before committing to sell or buy.','Review the financial implications with the relevant professionals; this guide is not financial advice.']
 },{
  online:['阅读建屋局乐龄安居花红（Silver Housing Bonus）网页，了解拥有组屋的屋主如何换小房。','核对现行条件，包括下一间组屋类型、公积金退休户头要求及申请时机。','卖房或决定购买前，先了解开销、售屋所得及退休入息的影响。'],
  phone:['使用建屋局官方联络网页列出的售屋或分局咨询渠道。','说明您拥有组屋，考虑换成较小组屋以安排退休生活。','在交易前先询问乐龄安居花红条件及合适的咨询服务。'],
  inperson:['从建屋局官方联络网页查找适合的销售服务，并确认是否需要预约。','正式决定卖买之前，先咨询换小房及乐龄安居花红事宜。','向有关专业人士了解财务影响；本指南不是个人理财建议。']
 }),
 hdb_general:g(HDB_CONTACT,HDB_CONTACT,{
  online:['On the HDB contact page, select the part relevant to renting, owning, or housing finance.','Use the listed contact or e-service link to ask which housing process fits your situation.','Avoid sharing address or identity details with NeighbourAssist; supply them only if requested by HDB.'],
  phone:['For rental or lease enquiries, call HDB’s Branch Service Line at 6225-5432.','Describe whether the home is owned or rented and what you want to change.','Ask which department or application route to use.'],
  inperson:['Use HDB’s contact page to find the appropriate HDB Branch or Hub service.','Check whether you need an appointment before visiting.','Speak with an HDB officer about the housing enquiry and follow their advice.']
 },{
  online:['在建屋局联络网页选择与租赁、拥有组屋或住房贷款有关的部分。','使用页面列出的联络渠道或电子服务，询问适合的住房程序。','不要在 NeighbourAssist 提供地址或身份资料；只有建屋局正式要求时才提交。'],
  phone:['如需咨询租赁或租约，可拨打建屋局分局热线 6225-5432。','说明住房是自有还是租赁，以及您想解决的问题。','询问应该联系哪个部门或使用哪项申请。'],
  inperson:['从建屋局官方联络网页查找合适的分局或建屋局中心服务。','先确认到访前是否需要预约。','向职员说明住房问题并遵照指示办理。']
 },hdbPhone,hdbHours),
 cpf_withdraw:g('https://www.cpf.gov.sg/member/retirement-income/retirement-withdrawals/withdrawing-for-immediate-retirement-needs','https://www.cpf.gov.sg/member/retirement-income/retirement-withdrawals/withdrawing-for-immediate-retirement-needs',{
  online:['Read CPF Board’s “Withdrawing for immediate retirement needs” page and the withdrawal conditions for your age.','Select the official Retirement Dashboard to check your personal withdrawable amount. Do not enter CPF balances here.','If you decide to apply, confirm CPF Account settings and daily withdrawal limits first; changes may require a cooling-off period. Use the official withdrawal application.'],
  phone:['Call CPF Board at 1800-227-1188 during its published hotline hours.','Ask how to check the amount you may withdraw and what it could mean for retirement payouts.','If someone is helping you, ask CPF about its authorised representative process; never share Singpass credentials.'],
  inperson:['Book a CPF Service Centre appointment from the CPF contact page; counter services are by appointment.','Ask the officer to explain retirement withdrawal options and how to view your own eligible amount.','Do not make a withdrawal solely on the basis of this student guide.']
 },{
  online:['阅读公积金局“Withdraw for immediate retirement needs”（退休需要提款）网页和适用年龄的条件。','进入官方退休概况（Retirement Dashboard），查看个人可提取金额；请勿在本网站输入公积金余额。','决定提款前，先核实公积金账户设置及每日提款限额；资料更改可能有冷静期。只使用官方提款申请。'],
  phone:['在官方热线时间拨打公积金局 1800-227-1188。','询问如何查看可提款额，以及提款对日后退休入息的影响。','如有人协助，请向公积金局查询获授权代表的正式程序；切勿分享 Singpass 密码。'],
  inperson:['通过公积金局官方联络网页预约服务中心；柜台服务须预约。','请职员解释退休提款选项，以及如何查看自己的可提款额。','不要只凭学生指南便作出提款决定。']
 },cpfPhone,cpfHours),
 cpf_general:g('https://www.cpf.gov.sg/member/retirement-income',CPF_CONTACT,{
  online:['Open the CPF Board retirement information page.','Choose the topic relevant to your question, such as retirement savings, monthly payouts or withdrawal rules.','To view personal amounts, use CPF’s official sign-in; never enter Singpass credentials in NeighbourAssist.'],
  phone:['Call CPF Board at 1800-227-1188 during the published hours.','Explain whether the question is about account balances, withdrawals or monthly payouts.','Ask where to view your information or how to arrange an appointment.'],
  inperson:['Book a CPF Service Centre appointment through the CPF Board contact page.','Bring your questions about retirement savings or payouts.','Use only the official CPF service to access account-specific information.']
 },{
  online:['打开公积金局的退休入息资讯网页。','选择相关主题，例如退休储蓄、每月入息或提款规定。','如需查看个人金额，请只在公积金局官方网页登录，切勿向本网站提供 Singpass 资料。'],
  phone:['在公布时间拨打公积金局 1800-227-1188。','说明想了解户头余额、提款还是每月退休入息。','询问在哪里查看有关资料，或如何预约。'],
  inperson:['通过公积金局官方联络网页预约服务中心。','准备有关退休储蓄或入息的问题。','只有在公积金局官方渠道才查看个人账户资料。']
 },cpfPhone,cpfHours),
 chas:g(CHAS,CHAS,{
  online:['Open the official CHAS eService page.','Select “LOGIN TO CHAS ESERVICE PORTAL” to view CHAS status or apply/renew if needed.','Follow the official prompts. CHAS subsidy tiers are assessed by the responsible agency; this guide does not decide them.'],
  phone:['Call CHAS at 1800-275-2427 during its published weekday hours.','Ask how to check CHAS status, apply, renew, or find a participating clinic.','Ask what to do if you cannot use the eService.'],
  inperson:['Call the CHAS hotline first to ask about an appropriate assisted application route.','Confirm any location or documents before making a trip; do not assume every clinic processes CHAS applications.','Use CHAS-approved participating clinics for applicable subsidised consultations after your CHAS status is confirmed.']
 },{
  online:['打开官方 CHAS 电子服务网页。','点击“LOGIN TO CHAS ESERVICE PORTAL”，以查看 CHAS 状态或按需要申请／续期。','按照官方指示办理。补贴等级由有关机构审核，本网站不能决定。'],
  phone:['在官方公布的工作日时间拨打 CHAS 热线 1800-275-2427。','询问如何查看 CHAS 状态、申请、续期或寻找参与计划的诊所。','如果无法使用电子服务，请询问其他可获得协助的方式。'],
  inperson:['先拨打 CHAS 热线，询问适合的辅助申请方法。','出门前先确认地点及所需文件；不要假设每间诊所都能处理 CHAS 申请。','确认 CHAS 状态后，可到参与计划的诊所使用适用的门诊补贴。']
 },'1800-275-2427','Mon–Fri, 8:30 am–6 pm (excluding public holidays)'),
 medifund:g('https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund/','https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund/',{
  online:['Read MOH’s MediFund page to understand who can ask for help with remaining medical bills.','There is not a general self-service MediFund online application here; approach a Medical Social Worker at the approved institution where care was received.','Only the institution can assess the case and request documents through authorised channels.'],
  phone:['Call the hospital or approved healthcare institution where treatment took place.','Ask to speak with a Medical Social Worker about paying the remaining bill and possible MediFund support.','Confirm how to arrange an assessment and which documents to prepare.'],
  inperson:['At the hospital or approved healthcare institution, ask the registration or billing counter for a Medical Social Worker.','Explain that paying the medical bill is difficult and ask about MediFund or other financing options.','Follow the institution’s assessment process; NeighbourAssist cannot submit a MediFund application.']
 },{
  online:['阅读卫生部 MediFund（保健基金）网页，了解剩余医药账单的援助条件。','这里没有供所有人自行申请的网上表格；应联系接受治疗的获批准医疗机构内的医疗社工。','只有有关机构可以评估个案，并通过获授权渠道要求文件。'],
  phone:['拨打接受治疗的医院或获批准医疗机构的官方电话号码。','要求联系医疗社工，咨询剩余账单及可能的保健基金援助。','询问如何安排评估及需要准备哪些文件。'],
  inperson:['到有关医院或获批准医疗机构的登记处／收费处，询问如何联系医疗社工。','说明医药账单难以负担，询问保健基金或其他付款援助。','按照机构的评估程序办理；NeighbourAssist 不能代为提交申请。']
 }),
 health_general:g('https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/','https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/',{
  online:['Open MOH’s list of healthcare subsidies and schemes.','Choose the relevant category—for example, outpatient clinic support or assistance with outstanding medical bills.','If already treated at a hospital, ask a Medical Social Worker for advice about suitable financing options.'],
  phone:['Call the official healthcare provider that issued the bill or visit MOH’s website for the relevant scheme’s contact.','Explain which part of the care or bill you need help understanding.','Ask whether a Medical Social Worker can review payment difficulties.'],
  inperson:['Speak with a billing or patient-service officer at the healthcare institution involved.','Ask to meet a Medical Social Worker if paying the bill is difficult.','Only the institution or agency can confirm a subsidy or assistance arrangement.']
 },{
  online:['打开卫生部的医疗补贴及计划总目录。','选择适合的类别，例如门诊补贴或未付医药账单援助。','如已在医院接受治疗，可联系医疗社工询问合适的资助选项。'],
  phone:['拨打发出账单的医疗机构官方电话，或从卫生部网页查询相关计划的联络方式。','说明需要了解哪种医疗服务或账单。','询问是否可以由医疗社工协助检讨付款困难。'],
  inperson:['与有关医疗机构的收费或病人服务职员交谈。','如账单难以负担，要求转介医疗社工。','只有医疗机构或有关机构可以确认补贴或援助安排。']
 }),
 oneservice:g('https://www.oneservice.gov.sg/oneservice/oneservice-app-and-chatbot/',ONESERVICE,{
  online:['Open the OneService page and choose its official App or Chatbot reporting channel.','For the App, choose “Submit Case”, select the closest category, add a photo and enter the location and details.','For the chatbot, provide a description, at least one photo, precise location, time observed and contact details. If you cannot photograph the issue itself, OneService says a photo of the surroundings may be used. Submit only through official OneService.'],
  phone:['OneService’s listed reporting options are its App and Chatbot; this guide does not have a verified reporting hotline.','Open the OneService official page to choose an available channel, or use the appropriate agency’s contact details if you cannot report online.','For an immediate danger, contact emergency services directly rather than a feedback app.'],
  inperson:['OneService reports are submitted through official digital channels; there is no general walk-in reporting process confirmed here.','Ask a trusted person to help with the official App or Chatbot, with your permission, or contact the responsible agency.','Prepare the issue description, precise location and photo when possible.']
 },{
  online:['打开 OneService 官方网页，选择应用程序或支持中文的“Tell Us @ OneService”测试版聊天机器人。旧版聊天机器人仅支持英文。','如使用应用程序，按“Submit Case”，选择最接近的类别，加入照片、地点及问题详情。','聊天机器人需要问题描述、至少一张照片、准确地点、发现时间及联络资料。如无法拍摄问题本身，可按官方指引提供周围环境的照片。只在 OneService 官方渠道提交。'],
  phone:['OneService 官方列出的反馈渠道是应用程序和聊天机器人；本指南没有已核实的举报热线。','打开官方网页选择合适渠道；如不能网上举报，可查询负责机构的联络方式。','若有即时危险，应直接联系紧急服务，不要依赖反馈应用程序。'],
  inperson:['OneService 主要通过官方电子渠道接收反馈；本指南未核实统一的柜台反馈程序。','可在对方同意下请可信赖的人协助使用官方应用程序或聊天机器人，或联络负责机构。','尽可能准备问题描述、准确地点和照片。']
 }),

 fine_hdb:g('https://www.hdb.gov.sg/submit-appeal-against-parking-offence/get-help','https://www.hdb.gov.sg/submit-appeal-against-parking-offence/get-help',{
  online:['Open HDB’s “Submit Appeal Against Parking Offence” information page and confirm your notice was issued by HDB.','Read the appeal criteria first: HDB expects exceptional circumstances such as a medical emergency or breakdown, supported by documents.','If you have relevant evidence, follow HDB’s official appeal link and submit the notice number and documents only on that service. If you want to pay or check a fine instead, use HDB’s linked parking services.'],
  phone:['Use the HDB official Contact Us page for the current parking-enquiry channel; do not assume every HDB branch handles parking appeals.','Explain whether you have a new notice, a submitted appeal or questions about payment; ask for the appropriate HDB parking service.','Read the payment deadline on your notice and ask HDB how its appeal process affects your particular case.'],
  inperson:['Check HDB’s official contact page for assistance locations and whether appointments are required.','Ask HDB whether staff at that location can assist with a parking appeal or payment enquiry before travelling.','Bring the actual notice and only the supporting evidence HDB requests; submit personal details exclusively to the official service.']
 },{
  online:['打开建屋局“Submit Appeal Against Parking Offence”（停车罚单申诉）的官方说明网页，确认罚单由建屋局发出。','先阅读申诉规定。建屋局通常要求医疗紧急情况或车辆故障等特殊情况，并有证明文件。','如有相关证据，请从官方网页进入申诉服务；只在官方平台填写罚单编号并提交文件。如要缴费或查询罚单，请使用建屋局列出的服务。'],
  phone:['从建屋局官方“Contact Us”网页查找最新停车罚单咨询渠道；不要假设所有分行都受理申诉。','说明您想查询罚单、已提交的申诉或缴费方法，询问该联系哪个部门。','查看罚单上的缴费期限，并向建屋局确认申诉对您的个案有何影响。'],
  inperson:['查阅建屋局官方联络网页，确认相关服务地点及是否须预约。','出门前询问该地点是否能协助处理停车罚单申诉或缴费问题。','按要求带上罚单及证明文件；个人身份资料只交给官方机构。']
 }),
 fine_ura:g('https://www.ura.gov.sg/car-parks/parking-offences/appeals/','https://www.ura.gov.sg/car-parks/parking-offences/appeals/',{
  online:['Confirm URA is named on the parking notice, then open URA’s official Appeals page.','Read the requirements and examples of documentary evidence. URA says forgetting to activate a Parking.sg session is not normally accepted.','Choose the official URA appeal, payment or appeal-outcome service based on your need, and follow the deadline on the notice.'],
  phone:['For car-park related enquiries, the URA Contact Us page lists 6329 3434.','Ask which official service handles the notice, whether a review is possible and how you can check a submitted appeal.','Do not provide card numbers or passwords in response to unsolicited calls; confirm the agency contact independently.'],
  inperson:['Read the URA Contact Us page to confirm the URA Centre address and current visiting hours.','Ask whether a parking notice enquiry can be handled in person before travelling; online appeal remains the published service.','Bring the notice or reference number for official staff, and any documentary proof requested by URA.']
 },{
  online:['确认罚单由市区重建局（URA）发出，再打开 URA 官方停车罚单申诉网页。','了解申诉条件及证明文件要求。URA 说明，忘记启动 Parking.sg 停车时段通常不获接纳。','根据需要选择 URA 官方申诉、缴费或查询结果服务，并留意罚单上的截止日期。'],
  phone:['URA 官方联络网页列出停车场事项查询电话 6329 3434。','询问哪项官方服务负责该罚单、能否要求复核，以及如何查询已提交的申诉。','不要因陌生来电而提供银行卡号码或密码；请自行核对官方联络方式。'],
  inperson:['先从 URA 官方联络网页确认 URA Centre 的地址及到访时间。','出门前确认能否当面咨询停车罚单；官方公布的申诉渠道主要是网上服务。','按官方要求带上罚单或参考编号，以及有关证明文件。']
 },'6329 3434'),
 fine_tp:g('https://www.police.gov.sg/E-Services/Submit-Appeal-Against-Traffic-Offence','https://www.police.gov.sg/E-Services/Submit-Appeal-Against-Traffic-Offence',{
  online:['Open the Singapore Police Force Traffic Offence Appeals page and confirm Traffic Police issued the notice.','The published appeal criteria are medical emergencies supported by documents; repeated appeals without fresh evidence are not considered.','If this fits your circumstances, use the official Traffic e-Appeals service with your own Singpass, reference number and supporting evidence. For payments follow the linked official traffic eServices.'],
  phone:['Use the contact or SPF Feedback link from the official Traffic Police appeal page; this guide does not give an unverified dedicated appeal hotline.','Ask whether your matter is a Traffic Police notice or court summons and which official appeal or enquiry channel applies.','Check your notice for response or court deadlines; do not wait for an MP session to address urgent court instructions.'],
  inperson:['First check official SPF enquiry details and ask whether an appointment or in-person assistance is available.','If you have a court summons, follow the court directions; a station visit is not a substitute for a required hearing.','Bring the notice and supporting documents only when official staff ask you to do so.']
 },{
  online:['打开新加坡警察部队的交通违例申诉网页，确认罚单由交通警察发出。','官方规定只考虑有文件证明的医疗紧急情况；如无新的证据，重复申诉不会获考虑。','如符合所述情况，请使用官方 Traffic e-Appeals 服务，以自己的 Singpass、参考编号及证明文件办理。缴费应使用官方交通服务。'],
  phone:['从交通警察官方申诉网页寻找联络或 SPF Feedback 渠道；本指南不提供未经核实的专用申诉热线。','询问手上的通知属于交通警察罚单还是法庭传票，以及适合的正式申诉方式。','查看罚单或传票的期限，不要因为打算找议员求助而延误法庭程序。'],
  inperson:['先从警察部队官方网站核实咨询地点，以及是否需要预约。','如果是法庭传票，应按法庭规定办理；到警局询问不能代替出庭。','只有在官方职员要求时，才携带罚单及有关证明文件。']
 }),
 fine_lta:g('https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/lta_offences_and_fines.html','https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/lta_offences_and_fines.html',{
  online:['Read the issuing agency and notice type. Open OneMotoring’s official LTA Offences & Fines page.','Its listed “Submit Appeal” service is for vehicle-related offences. Do not assume an e-scooter or other active-mobility notice uses the same form.','For active-mobility cases or unclear instructions, use the official LTA contact form to ask which specific enquiry, payment or representation route applies.'],
  phone:['Use the official LTA Contact Us page to find a current enquiry channel rather than relying on an unverified hotline.','State the type of LTA notice without disclosing personal details on NeighbourAssist, and ask how to contact the responsible enforcement team.','Ask how to deal with any deadline or court directions printed on your notice.'],
  inperson:['Use LTA’s official contact page to check whether an appropriate assisted service or appointment is offered.','Confirm the correct office before travelling; the active-mobility process may be different from general vehicle-fine enquiries.','Bring the original notice and requested evidence only to authorised officers. If a court date is printed, follow court instructions.']
 },{
  online:['先查看罚单上的发出机构和违例类别，再打开 LTA 官方 OneMotoring 罚单网页。','网页列出的“Submit Appeal”服务针对车辆相关违例；不要假设电动滑板车等个人代步工具罚单也可用同一表格。','如属个人代步工具违例或指示不清楚，请从陆交局官方联络表格询问专属的查询、缴费或申述渠道。'],
  phone:['从陆交局官方“Contact Us”网页查找最新联络方式；本指南不提供未经核实的热线号码。','简要说明是哪一种 LTA 罚单，询问负责执法的部门；切勿在本网站输入个人资料。','询问罚单上的截止日期或法庭指示应该如何处理。'],
  inperson:['从陆交局官方联络网页查询是否提供相应的当面服务或预约。','出门前确认正确地点；电动滑板车违例程序可能与一般车辆罚单不同。','按职员要求向官方机构出示通知和文件。如有法庭日期，请遵照传票。']
 }),
 fine_court:g('https://www.judiciary.gov.sg/criminal/charged-with-traffic-regulatory-offence','https://www.judiciary.gov.sg/criminal/charged-with-traffic-regulatory-offence',{
  online:['Read the court summons immediately for the required date, time and any available official court service.','Visit the Singapore Courts page on traffic and regulatory offences. An appeal to an issuing agency is not the same as a court appeal or adjournment.','Contact the prosecuting agency for its process if you wish to make representations, and attend court unless officially excused or rescheduled by the court.'],
  phone:['Use the contact details on the summons or Singapore Courts official website, not an unverified hotline.','Ask which office can clarify your required attendance and procedural questions. The court does not provide individual legal advice.','Seek independent legal help if you need advice on charges, pleas, sentencing or appeals.'],
  inperson:['Check the summons for the precise court and hearing time, and check the Singapore Courts page before travelling.','Attend as directed unless the court itself confirms another arrangement; an MP appeal does not cancel a court hearing.','Bring the summons and any official acknowledgements or documents as instructed by the court.']
 },{
  online:['立即查阅法庭传票，确认须出庭的日期、时间和官方程序。','阅读新加坡法院有关交通及监管违例的说明；向执法机构求情与向法院上诉或申请延期不同。','如想向检控机构提出申述，应先查询其正式程序；除非法庭正式通知更改，否则应按规定出庭。'],
  phone:['使用传票或新加坡法院官方网站上的联络方式，不要依赖未经核实的热线。','询问负责部门如何说明出庭要求及程序问题；法庭不会提供个人法律意见。','如涉及控罪、认罪或判刑问题，请考虑寻求独立法律意见。'],
  inperson:['确认传票上列出的法庭、出庭日期和时间，并先查阅新加坡法院的官方说明。','按规定出庭；向议员求助不会自动取消法庭聆讯。','按照法庭要求携带传票、官方回复及有关文件。']
 }),
 fine_unknown:g('https://www.life.gov.sg/','https://www.life.gov.sg/',{
  online:['Find the exact agency and notice category on the document, including its deadline and whether it requires court attendance.','Use that agency’s official website, or LifeSG to locate a government service. There is no universal fine-appeal form.','Ask the issuer which review, payment or complaint channel applies. Never send personal documents through NeighbourAssist.'],
  phone:['Read the notice to identify the issuing authority and its verified contact details.','Call the official published agency number, not a number supplied by an unsolicited message, and ask which unit handles the notice.','Check the deadline and whether there are court instructions that must be followed separately.'],
  inperson:['Use the official agency directory or the notice to find the correct service office.','Check opening hours and appointment rules first and ask if staff can assist with the notice.','Take the official notice and only the records requested by that agency; do not expect every community centre to handle fines.']
 },{
  online:['先从通知找出发出机构、罚单类别及截止日期，并确认是否规定出庭。','使用该机构的官方网站，或从 LifeSG 查找政府服务；政府并没有适用于所有罚单的统一申诉表格。','向发出机构查询复核、缴费或申诉渠道；切勿通过本网站提交个人文件。'],
  phone:['从罚单找出发出机构及经过核实的官方联络方式。','拨打官方公布的电话，而不是陌生短信提供的号码，询问负责处理罚单的部门。','核实相关截止日期，并确认是否有必须另行遵守的法庭指示。'],
  inperson:['从官方机构目录或罚单查找正确的办事地点。','先确认开放时间、预约安排，以及能否当面询问罚单事宜。','按官方要求带上罚单及有关文件；不要假设每间民众俱乐部都能处理罚单。']
 }),

 lifesg:g('https://www.life.gov.sg/','https://www.life.gov.sg/',{
  online:['Open LifeSG’s official website and look for “Topics”.','Choose the area closest to the problem, such as “Financial support and benefits”, “Care and support services” or “Housing and property”.','Follow the linked government service. If you remain unsure, contact the responsible agency rather than submitting private details here.'],
  phone:['LifeSG is a general directory rather than a dedicated caseworker hotline.','Use LifeSG to identify the responsible agency, then find that agency’s official phone contact.','Describe the issue briefly and ask which service or form is relevant.'],
  inperson:['Use LifeSG to identify which government agency is responsible for the issue.','Find that agency’s official office information and check if appointments are needed before visiting.','Ask a trusted caregiver to help if navigating the site is difficult.']
 },{
  online:['打开 LifeSG 官方网站，寻找“Topics”（主题）。','选择最接近的问题类别，例如“Financial support and benefits”（经济援助）、“Care and support services”（照护支援）或“Housing and property”（住房）。','沿着链接进入负责的政府机构。如仍不确定，请直接向有关机构咨询，不要在本网站提交私人资料。'],
  phone:['LifeSG 是政府服务目录，并不是专门处理个案的热线。','先利用 LifeSG 找到负责的机构，再查找该机构的官方电话号码。','简要说明困难，询问适合哪项服务或表格。'],
  inperson:['使用 LifeSG 找出负责有关问题的政府机构。','查看该机构的官方办公地点，并确认是否需要预约再前往。','如难以使用网页，可请可信赖的照顾者协助。']
 })
};
export function getGuide(service:Service,lang:Language,method:HelpMethod){
 const guide=guides[service.id];
 if(!guide)throw new Error('Missing guidance for '+service.id);
 const steps=method==='unsure'
  ? [guide[lang].online[0],guide[lang].phone[0],guide[lang].inperson[0]]
  : guide[lang][method];
 return {
  steps,
  url:guide.url,
  source:guide.source,
  phone:guide.phone??service.phone,
  phoneHours:guide.phoneHours??service.phoneHours,
 };
}
