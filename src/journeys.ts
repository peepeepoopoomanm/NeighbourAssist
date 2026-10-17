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
  online:['打开建屋局“Transfer to Another Public Rental Flat”（转租另一间公共租赁组屋）网页，先阅读租约及转租条件。','点击申请链接，并按现有租赁组屋的管理分局选择地区；之后会进入 FormSG 申请表。','按提示使用自己的 Singpass 登录并填写官方要求的资料。建屋局会审核，不能保证获批较小组屋。'],
  phone:['拨打建屋局分局热线 6225-5432，咨询公共租赁组屋转租事宜。','说明希望搬到较小的租赁组屋，并询问现有租约由哪间分局负责。','询问申请条件、正确申请渠道，以及能否到分局当面申请。'],
  inperson:['找出负责现有租赁组屋的建屋局分局并确认联络方式。','询问是否需要先预约，或可到柜台提交转租申请。','按建屋局要求携带租约及申请人资料。未获确认前不要自行终止现有租约。']
 },hdbPhone),
 hdb_tenant:g('https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/assistance-for-tenants','https://www.hdb.gov.sg/renting-a-flat/public-rental-scheme/tenancy-matters/assistance-for-tenants',{
  online:['Read HDB’s “Assistance for Tenants of Public Rental Flats” page.','Look at the listed options: possible rent-arrears instalments, SSO referrals, social support, or rightsizing to a smaller rental flat.','Contact the HDB Branch handling your rental flat to ask which measure may apply; the page is guidance, not an automatic approval.'],
  phone:['Call the HDB Branch Service Line at 6225-5432.','Say whether the difficulty is monthly rental costs, outstanding rent or a change in your household.','Ask about instalments, possible rightsizing, or referral to a Social Service Office.'],
  inperson:['Contact the branch managing your public rental flat and check when you can speak with staff.','Explain which rental expenses are difficult to afford and ask about available assistance.','Follow the official instructions for any instalment arrangement, rightsizing enquiry, or SSO referral.']
 },{
  online:['阅读建屋局“Assistance for Tenants of Public Rental Flats”（公共租赁组屋租户援助）网页。','查看所列选项：租金欠款分期付款、社会服务办事处转介、其他社会支援或换成较小租赁组屋。','联络负责您租约的建屋局分局，询问适合哪项措施；网页并不代表自动获批。'],
  phone:['拨打建屋局分局热线 6225-5432。','说明困难属于每月租金、未缴租金，或家庭情况变化。','询问分期付款、换小组屋或转介社会服务办事处的选项。'],
  inperson:['联系管理现有租赁组屋的分局，确认何时可以与职员面谈。','说明哪些租金开销难以负担，并询问援助选项。','按官方指示处理分期付款、换房查询或转介事宜。']
 },hdbPhone),
 hdb_change:g(HDB_CHANGE,HDB_CHANGE,{
  online:['Open HDB’s “Tenancy Matters for Public Rental Flats” page.','Choose the relevant topic: “Change of Occupiers” or “Change of Tenancy”. These are different requests.','Follow the official instructions for that topic and provide applicant and occupier details only in the official channel.'],
  phone:['Call HDB’s Branch Service Line at 6225-5432.','Explain whether you need to update authorised occupiers or change who holds the rental tenancy.','Ask which official application to use and whether an in-person option is appropriate.'],
  inperson:['Contact the HDB Branch managing the current public rental flat.','Ask about the process for changing a tenant or registered occupier and any appointment requirements.','Provide documents only to the authorised HDB service when requested.']
 },{
  online:['打开建屋局公共租赁组屋“Tenancy Matters”（租约事宜）网页。','按需要选择“Change of Occupiers”（更改登记住户）或“Change of Tenancy”（更改承租人）；两者不同。','按照有关官方指示办理，只在官方渠道提供申请人及住户资料。'],
  phone:['拨打建屋局分局热线 6225-5432。','说明需要更新登记住户，还是更改租约上的承租人。','询问应使用哪项官方申请，以及是否可以当面办理。'],
  inperson:['联系负责现有公共租赁组屋的建屋局分局。','询问更改承租人或登记住户的程序，以及是否需要预约。','只有在建屋局正式要求时，才向获授权渠道提供文件。']
 },hdbPhone),
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
 },hdbPhone),
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
  online:['阅读卫生部 MediFund（医疗基金）网页，了解剩余医药账单的援助条件。','这里没有供所有人自行申请的网上表格；应联系接受治疗的获批准医疗机构内的医疗社工。','只有有关机构可以评估个案，并通过获授权渠道要求文件。'],
  phone:['拨打接受治疗的医院或获批准医疗机构的官方电话号码。','要求联系医疗社工，咨询剩余账单及可能的医疗基金援助。','询问如何安排评估及需要准备哪些文件。'],
  inperson:['到有关医院或获批准医疗机构的登记处／收费处，询问如何联系医疗社工。','说明医药账单难以负担，询问医疗基金或其他付款援助。','按照机构的评估程序办理；NeighbourAssist 不能代为提交申请。']
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
  online:['Open the OneService page and choose its official App or Chatbot reporting channel.','For the App, choose “Submit Case”, select the closest category, add a photo and enter the location and details.','For the chatbot, follow the prompts for a description, at least one photo, location, time and contact details. Submit only through OneService.'],
  phone:['OneService’s listed reporting options are its App and Chatbot; this guide does not have a verified reporting hotline.','Open the OneService official page to choose an available channel, or use the appropriate agency’s contact details if you cannot report online.','For an immediate danger, contact emergency services directly rather than a feedback app.'],
  inperson:['OneService reports are submitted through official digital channels; there is no general walk-in reporting process confirmed here.','Ask a trusted person to help with the official App or Chatbot, with your permission, or contact the responsible agency.','Prepare the issue description, precise location and photo when possible.']
 },{
  online:['打开 OneService 官方网页，选择应用程序或聊天机器人举报渠道。','如使用应用程序，按“Submit Case”，选择最接近的类别，加入照片、地点及问题详情。','如使用聊天机器人，请按提示提供描述、至少一张照片、地点、发生时间和联络资料。只在 OneService 官方渠道提交。'],
  phone:['OneService 官方列出的举报渠道是应用程序和聊天机器人；本指南没有已核实的举报热线。','打开官方网页选择合适渠道；如不能网上举报，可查询负责机构的联络方式。','若有即时危险，应直接联系紧急服务，不要依赖反馈应用程序。'],
  inperson:['OneService 主要通过官方电子渠道接收反馈；本指南未核实统一的柜台举报程序。','可在对方同意下请可信赖的人协助使用官方应用程序或聊天机器人，或联络负责机构。','尽可能准备问题描述、准确地点和照片。']
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
