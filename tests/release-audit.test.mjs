import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('production public assets do not include the obsolete referral engine',()=>{
 assert.equal(existsSync(new URL('../public/demo-engine/engine.js',import.meta.url)),false);
 assert.ok(read('demo/index.html').includes('Legacy development preview'));
 assert.ok(read('demo/preview.js').includes("from './engine.js'"));
});

test('sensitive questionnaire answers stay in React memory without outbound case submissions',()=>{
 for(const path of ['src/App.tsx','src/engine.ts','src/mps.ts']){
  const source=read(path);
  for(const suspicious of [/(^|[^\w])fetch\s*\(/, /XMLHttpRequest\s*\(/, /navigator\.sendBeacon\s*\(/, /localStorage\s*\./, /sessionStorage\s*\./, /document\.cookie/, /dangerouslySetInnerHTML/]){
   assert.doesNotMatch(source,suspicious,`Unexpected browser storage/network API in ${path}`);
  }
 }
});

test('official MP lookup uses HTTPS Parliament website',()=>{
 const content=read('src/mps.ts');
 assert.match(content,/https:\/\/www\.parliament\.gov\.sg\/mps\/find-mps-in-my-constituency/);
 assert.match(content,/return \{/);
});
