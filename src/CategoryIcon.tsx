import type {Category} from './engine';

// Consistent line icons replace platform-dependent Unicode glyphs.
// Decorative: each category button already has a readable text label.
export default function CategoryIcon({category}:{category:Category}){
 const shared={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:2.2,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,className:'category-svg',focusable:'false' as const,'aria-hidden':true as const};
 switch(category){
  case 'financial':
   return <svg {...shared}><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6.5 12h.01M17.5 12h.01"/></svg>;
  case 'housing':
   return <svg {...shared}><path d="m3 10 9-7 9 7"/><path d="M5 9v12h14V9"/><path d="M9 21v-7h6v7"/></svg>;
  case 'cpf':
   return <svg {...shared}><circle cx="9" cy="9" r="5"/><path d="M9 6v6M7.5 7.5h2a1.5 1.5 0 0 1 0 3h-2"/><path d="M15.5 7.5a6.5 6.5 0 1 1-8 8"/></svg>;
  case 'health':
   return <svg {...shared}><path d="M12 4.5v15M4.5 12h15"/></svg>;
  case 'municipal':
   return <svg {...shared}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M10 21v-6h4v6"/></svg>;
  case 'unsure':
   return <svg {...shared}><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.6-2.5 2.1-2.5 3.5"/><path d="M12 17.1h.01"/></svg>;
 }
}
