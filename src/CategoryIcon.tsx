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
   // Piggy bank with rounded back, clear slot and floating savings coin.
   // The larger viewBox preserves detail at the small category-card size.
   return <svg {...shared} viewBox="0 0 48 48" strokeWidth={2.65}>
    <circle cx="23" cy="8.9" r="5.35"/>
    <path d="M24.8 6.9c-.8-.85-3.6-.8-3.7.9-.1 1.6 3.9 1 3.9 2.9 0 1.6-2.9 1.7-3.9.8M23 5.8v6.2" strokeWidth={1.45}/>
    <path d="M9.5 24.4C13.5 18.4 22.4 17.3 28.6 19.5c1.6.6 2.8 1.2 4.2 2.2l2.4-2.2c1.1-.9 2.3-.9 3.2-.5l-.7 5c1 .9 1.8 2 2.1 3.2l1.5.4c1.2.3 1.7 1.1 1.7 2.2v3.1c0 1.6-.8 2.2-2 2.6l-2.3.7c-.9 1.4-2.8 2.8-4.7 3.6l-.7 3.1h-4.1l-.7-2.6c-3.6.9-7.5.9-10.7.1l-.7 2.5h-4.1l-.9-3.7c-2.9-1.7-4.8-4.8-4.8-8.3 0-2.3.6-4.1 2.2-5.5Z"/>
    <path d="M8.2 29.4c-3.4.4-4.9-1.5-3.7-3.4 1-1.6 2.9-.8 2.3.7"/>
    <path d="M18.1 23.6h9" strokeWidth={2.15}/>
    <circle cx="35.8" cy="28" r="1.05" fill="currentColor" stroke="none"/>
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
