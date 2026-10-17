import type {Category} from './engine';

// Uniform SVG icons avoid font-dependent alignment and sizing differences.
// Icons are decorative; category buttons already contain readable text labels.
export default function CategoryIcon({category}:{category:Category}){
 const shared={
  viewBox:'0 0 24 24',
  fill:'none',
  stroke:'currentColor',
  strokeWidth:2.4,
  strokeLinecap:'round' as const,
  strokeLinejoin:'round' as const,
  className:'category-svg',
  focusable:'false' as const,
  'aria-hidden':true as const,
 };
 switch(category){
  case 'financial':
   return <svg {...shared}>
    <rect x="3.5" y="6.5" width="17" height="11" rx="2.5"/>
    <circle cx="12" cy="12" r="2.2"/>
    <path d="M6.8 12h.01M17.2 12h.01"/>
   </svg>;
  case 'housing':
   return <svg {...shared}>
    <path d="M3.5 10 12 3.5 20.5 10"/>
    <path d="M6 9.5V20h12V9.5"/>
    <path d="M10 20v-5h4v5"/>
   </svg>;
  case 'cpf':
   return <svg {...shared}>
    <ellipse cx="9" cy="8" rx="4" ry="2.4"/>
    <path d="M5 8v3c0 1.3 1.8 2.4 4 2.4s4-1.1 4-2.4V8"/>
    <ellipse cx="15.5" cy="14.5" rx="3.5" ry="2.1"/>
    <path d="M12 14.5v2.3c0 1.1 1.6 2.1 3.5 2.1s3.5-1 3.5-2.1v-2.3"/>
   </svg>;
  case 'health':
   return <svg viewBox="0 0 24 24" className="category-svg" focusable="false" aria-hidden="true">
    <path fill="currentColor" d="M10 3.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V9.5H19.75c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75H14v5.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 0 1-.75-.75V13.5H4.25a.75.75 0 0 1-.75-.75v-2.5c0-.41.34-.75.75-.75H10z"/>
   </svg>;
  case 'municipal':
   return <svg {...shared}>
    <rect x="5" y="3.5" width="14" height="17" rx="2"/>
    <path d="M8 7.5h2M14 7.5h2M8 11.5h2M14 11.5h2M10 20.5v-5h4v5"/>
   </svg>;
  case 'unsure':
   return <svg {...shared}>
    <circle cx="12" cy="12" r="8.5"/>
    <path d="M9.7 9.1a2.4 2.4 0 1 1 4.1 1.7c-.86.86-1.8 1.43-1.8 2.5"/>
    <circle cx="12" cy="17.2" r="0.7" fill="currentColor" stroke="none"/>
   </svg>;
 }
}
