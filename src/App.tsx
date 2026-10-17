import {useEffect,useRef,useState} from 'react';
import {categories,questions,getQuestionIds,getRecommendations,type Category,type Answers,type Service} from './engine';
import {messages,categoryText,questionText,reasonText,serviceText,situationText,type Language,type TextSize} from './i18n';
import './style.css';

type View='home'|'quiz'|'results'|'about';
type Contact='online'|'phone'|'inperson'|'unsure';
const SSO_DIRECTORY='https://www.msf.gov.sg/our-services/directories';
const safePhone=(phone:string)=>`tel:${phone.replace(/\D/g,'')}`;

function ContactGuidance({service,method,lang}:{service:Service;method:Contact;lang:Language}){
 const t=messages[lang];
 const isUrgent=service.id==='comcare_urgent';
 if(method==='phone')return <div className="contact-guidance" aria-live="polite">
  <h3>{t.phoneTitle}</h3><p>{t.phoneDetail}</p>
  {service.phone?<><a className="btn btn-primary full" href={safePhone(service.phone)}>{t.callNow}: {service.phone}</a>{service.phoneHours&&<p className="contact-detail">{t.hours}: {service.phoneHours}</p>}<p className="spoken-script">{isUrgent?t.phoneScriptUrgent:t.phoneScriptOther}</p></>:<><p>{t.phoneFallback}</p><a className="btn btn-primary full" href={service.url} target="_blank" rel="noopener noreferrer">{t.noPhone} ↗</a></>}
 </div>;
 if(method==='inperson')return <div className="contact-guidance" aria-live="polite">
  <h3>{t.inpersonTitle}</h3><p>{t.inpersonDetail}</p><p>{service.offline??t.inpersonDetail}</p>
  {service.id.startsWith('comcare')||service.id==='sso'?<><p>{t.inpersonSso}</p><a className="btn btn-primary full" href={SSO_DIRECTORY} target="_blank" rel="noopener noreferrer">{t.findSso} ↗</a></>:<a className="btn btn-primary full" href={service.url} target="_blank" rel="noopener noreferrer">{t.visitWebsite} ↗</a>}
  {isUrgent&&service.phone&&<p className="contact-detail">{t.urgentNote} <a href={safePhone(service.phone)}>{service.phone}</a></p>}
 </div>;
 if(method==='online')return <div className="contact-guidance" aria-live="polite">
  <h3>{t.onlineTitle}</h3><p>{t.onlineDetail}</p><a className="btn btn-primary full" href={service.url} target="_blank" rel="noopener noreferrer">{t.visitWebsite} ↗</a>
  {isUrgent&&<p className="urgent-note">{t.onlineUrgent} {service.phone&&<a href={safePhone(service.phone)}>{service.phone}</a>}</p>}
 </div>;
 return <div className="contact-guidance" aria-live="polite"><h3>{t.unsureTitle}</h3><p>{t.unsureDetail}</p>
  {service.phone&&<a className="btn btn-outline full" href={safePhone(service.phone)}>{t.callNow}: {service.phone}</a>}
  {service.offline&&<p className="contact-detail">{service.offline}</p>}
  <a className="btn btn-primary full" href={service.url} target="_blank" rel="noopener noreferrer">{t.visitWebsite} ↗</a>
  {isUrgent&&<p className="urgent-note">{t.urgentNote}</p>}
 </div>;
}

export default function App(){
 const [view,setView]=useState<View>('home');
 const [category,setCategory]=useState<Category>('financial');
 const [answers,setAnswers]=useState<Answers>({});
 const [questionIndex,setQuestionIndex]=useState(0);
 const [size,setSize]=useState<TextSize>('normal');
 const [language,setLanguage]=useState<Language>('en');
 const [prepared,setPrepared]=useState<string[]>([]);
 const [forWhom,setForWhom]=useState<'self'|'caregiver'>('self');
 const topicsRef=useRef<HTMLElement|null>(null);
 const t=messages[language];
 const ids=getQuestionIds(category,answers);
 const currentQuestion=questions[ids[Math.min(questionIndex,ids.length-1)]];
 const q=questionText(currentQuestion,language);
 const result=getRecommendations(category,answers);
 const primary=serviceText(result.primary,language);
 const secondary=result.secondary.map(s=>serviceText(s,language));
 const chosenMethod=(answers.contact??'unsure') as Contact;
 const topicName=(id:Category)=>categoryText(id,language,categories.find(c=>c.id===id)??{label:'Assistance',summary:''}).label;
 const situation=situationText(answers,language);
 useEffect(()=>{document.documentElement.lang=language==='zh'?'zh-Hans':'en';document.title=language==='zh'?'邻里助理 — 寻找援助':'NeighbourAssist — Find support';},[language]);
 const scrollTop=()=>window.scrollTo({top:0,behavior:'instant'});
 const start=(c:Category)=>{setCategory(c);setAnswers({});setPrepared([]);setQuestionIndex(0);setView('quiz');scrollTop()};
 const home=()=>{setView('home');setAnswers({});setPrepared([]);setQuestionIndex(0);scrollTop()};
 const browse=()=>{if(view!=='home')setView('home');setAnswers({});setPrepared([]);setQuestionIndex(0);window.setTimeout(()=>topicsRef.current?.scrollIntoView({behavior:'smooth',block:'start'}),30)};
 const selectAnswer=(value:string)=>{
  // Forget answers to later questions if someone changes an earlier branch.
  const retained=Object.fromEntries(ids.slice(0,questionIndex).filter(id=>answers[id]).map(id=>[id,answers[id]]));
  setAnswers({...retained,[q.id]:value});setPrepared([]);
 };
 const next=()=>{const updated=getQuestionIds(category,answers);if(questionIndex>=updated.length-1)setView('results');else setQuestionIndex(i=>i+1);scrollTop()};
 const back=()=>{if(view==='results'){setView('quiz');setQuestionIndex(getQuestionIds(category,answers).length-1)}else if(view==='quiz'&&questionIndex>0){setQuestionIndex(i=>i-1)}else setView('home');scrollTop()};
 return <div className={`site text-${size}`} lang={language==='zh'?'zh-Hans':'en'}>
  <a href="#main" className="skip">{t.skip}</a>
  <header className="topbar"><div className="container top-inner">
   <button className="brand" onClick={home} aria-label="NeighbourAssist"><span className="brand-mark" aria-hidden="true">n<span>+</span></span><span>NeighbourAssist</span></button>
   <div className="top-actions"><span className="student-tag">{t.student}</span>
    <label className="setting"><span>{t.language}</span><select aria-label={t.language} value={language} onChange={e=>setLanguage(e.target.value as Language)}><option value="en">English</option><option value="zh">简体中文</option></select></label>
    <label className="setting"><span>{t.textSize}</span><select aria-label={t.textSize} value={size} onChange={e=>setSize(e.target.value as TextSize)}><option value="normal">{t.normal}</option><option value="large">{t.large}</option><option value="extra">{t.extra}</option></select></label>
   </div>
  </div></header>
  <main id="main">
  {view==='home'&&<><section className="hero"><div className="container hero-inner"><div className="hero-copy"><span className="eyebrow">{t.eyebrow}</span><h1>{t.heroTitle}</h1><p>{t.heroDescription}</p><div className="hero-bits"><span>✓ {t.noAccount}</span><span>✓ {t.noSensitive}</span><span>✓ {t.free}</span></div></div>
   <div className="hero-panel" aria-label={t.how}><span className="panel-label">{t.how}</span>{[[t.how1,t.how1Detail],[t.how2,t.how2Detail],[t.how3,t.how3Detail]].map(([name,detail],i)=><div className="hero-step" key={name}><span className="step-bubble">0{i+1}</span><div><strong>{name}</strong><small>{detail}</small></div></div>)}</div></div></section>
   <section ref={topicsRef} id="topics" className="container category-section"><div className="section-head"><div><span className="eyebrow">{t.startHere}</span><h2>{t.chooseTopic}</h2><p>{t.topicHint}</p></div></div>
    <div className="audience"><span className="audience-title">{t.findingFor}</span><div className="segment" role="group" aria-label={t.findingFor}><button aria-pressed={forWhom==='self'} className={forWhom==='self'?'selected':''} onClick={()=>setForWhom('self')}>{t.myself}</button><button aria-pressed={forWhom==='caregiver'} className={forWhom==='caregiver'?'selected':''} onClick={()=>setForWhom('caregiver')}>{t.caregiver}</button></div></div>
    <div className="categories">{categories.map(c=>{const label=categoryText(c.id,language,c);return <button className="category-card" key={c.id} onClick={()=>start(c.id)}><span className="category-icon" aria-hidden="true">{c.symbol}</span><span className="category-details"><strong>{label.label}</strong><small>{label.summary}</small></span><span className="card-arrow" aria-hidden="true">→</span></button>})}</div>
    <aside className="info-strip"><span className="info-icon" aria-hidden="true">i</span><div><strong>{t.guideTitle}</strong><p>{t.guideBody}</p></div></aside>
   </section></>}
  {view==='quiz'&&<section className="container flow-wrap"><div className="breadcrumb"><button onClick={home}>{t.allTopics}</button><span aria-hidden="true">/</span><span>{topicName(category)}</span></div><div className="flow-layout"><div className="question-card">
   <div className="question-top"><span className="eyebrow">{topicName(category)}</span><strong>{t.question} {questionIndex+1} / {ids.length}</strong></div>
   <div className="progress" role="progressbar" aria-label={t.question} aria-valuenow={questionIndex+1} aria-valuemin={0} aria-valuemax={ids.length}><span style={{width:`${(questionIndex+1)/ids.length*100}%`}}/></div>
   <h1 className="question-title">{q.title}</h1>{q.hint&&<p className="question-hint">{q.hint}</p>}
   <fieldset className="answer-set"><legend className="sr-only">{t.chooseAnswer}</legend>{q.options.map(o=><label key={o.value} className={'answer '+(answers[q.id]===o.value?'answer-selected':'')}><input type="radio" name={q.id} value={o.value} checked={answers[q.id]===o.value} onChange={()=>selectAnswer(o.value)}/><span className="radio-circle" aria-hidden="true"/><span>{o.label}</span></label>)}</fieldset>
   <div className="flow-actions"><button onClick={back} className="btn btn-outline">← {t.back}</button><button disabled={!answers[q.id]} onClick={next} className="btn btn-primary">{questionIndex===ids.length-1?t.seeGuidance:t.continue} →</button></div>
   </div><aside className="support-card"><div className="support-mark">♡</div><h2>{t.privacyTitle}</h2><p>{t.privacyBody}</p><div className="support-rule"/><p>{t.privacyDetail}</p></aside></div></section>}
  {view==='results'&&<section className="container results-wrap"><div className="breadcrumb"><button onClick={home}>{t.allTopics}</button><span aria-hidden="true">/</span><span>{topicName(category)}</span><span aria-hidden="true">/</span><span>{t.guidanceLabel}</span></div>
   <div className="result-heading"><span className="eyebrow">{t.guidanceLabel}</span><h1>{t.guidanceTitle}</h1><p>{t.guidanceIntro}</p></div>
   <div className="result-layout"><div><article className="recommendation"><div className="recommendation-top"><span className="result-symbol" aria-hidden="true">✓</span><div><span className="eyebrow">{t.startingPoint}</span><h2>{primary.name}</h2><span className="agency-name">{primary.agency}</span></div></div>
    <p className="result-desc">{primary.description}</p><div className="reason"><strong>{t.why}</strong> {reasonText(result.reason,language)}</div>
    {situation&&<div className="situation-note"><strong>{t.situationTitle}</strong><p>{t.suggestedMessage} “{situation}”</p></div>}
    <div className="contact-heading eyebrow">{t.contactPath}</div><ContactGuidance service={primary} method={chosenMethod} lang={language}/>
    <h3>{t.nextSteps}</h3><ol className="instruction-list">{primary.steps.map((s,i)=><li key={i}>{s}</li>)}</ol>
    {primary.phone&&<p className="call-line">{t.officialPhone}: <a href={safePhone(primary.phone)}>{primary.phone}</a> {primary.phoneHours&&<small>({primary.phoneHours})</small>}</p>}
    <p className="caution">{primary.caution}</p>
   </article>{secondary.map(s=><article className="secondary-recommendation" key={s.id}><span className="eyebrow">{t.otherInfo}</span><h3>{s.name}</h3><p>{s.description}</p><a href={s.url} target="_blank" rel="noopener noreferrer">{t.learnMore} ↗</a><small>{s.caution}</small></article>)}</div>
   <aside className="checklist"><h2>{t.prepareTitle}</h2><p>{t.prepareIntro}</p>{primary.checklist.map(item=><label className="check-item" key={item}><input type="checkbox" checked={prepared.includes(item)} onChange={e=>setPrepared(p=>e.target.checked?[...p,item]:p.filter(x=>x!==item))}/><span>{item}</span></label>)}<div className="check-actions"><button onClick={()=>window.print()} className="btn btn-outline full">{t.print}</button></div><p className="check-note">{t.privacyReminder}</p></aside>
   </div><div className="result-footer"><button onClick={back} className="btn btn-outline">← {t.changeAnswers}</button><button onClick={home} className="btn btn-outline">{t.startAgain}</button></div>
  </section>}
  {view==='about'&&<section className="container about-section"><span className="eyebrow">{t.aboutLabel}</span><h1>{t.aboutTitle}</h1><p>{t.about1}</p><p>{t.about2}</p><button className="btn btn-primary" onClick={browse}>{t.findAssistance} →</button></section>}
  </main><footer className="footer"><div className="container footer-inner"><div><strong>NeighbourAssist</strong><p>{t.footerLine}</p></div><div><button onClick={()=>{setView('about');scrollTop()}}>{t.about}</button><button onClick={browse}>{t.browse}</button><a href="https://www.life.gov.sg/" rel="noopener noreferrer" target="_blank">{t.lifesg} ↗</a></div></div></footer>
 </div>;
}
