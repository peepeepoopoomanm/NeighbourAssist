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

test('quiz and results restore focus to the new heading for keyboard users',()=>{
 const app=read('src/App.tsx');
 assert.match(app,/ref=\{quizTitleRef\} tabIndex=\{-1\}/);
 assert.match(app,/ref=\{resultTitleRef\} tabIndex=\{-1\}/);
 assert.match(app,/quizTitleRef\.current\?\.focus\(\)/);
 assert.match(app,/resultTitleRef\.current\?\.focus\(\)/);
});

test('the website respects reduced-motion preferences and wraps narrow-screen text',()=>{
 const styles=read('src/style.css');
 assert.match(styles,/prefers-reduced-motion:\s*reduce/);
 assert.match(styles,/overflow-wrap:anywhere/);
});

test('Chinese public rental transfer guidance does not say subletting',()=>{
 for(const path of ['src/i18n.ts','src/audience.ts','src/journeys.ts']){
  assert.doesNotMatch(read(path),/转租/,path+' should describe applying for a transfer, not subletting');
 }
});

test('OneService handoff mentions its photo, location and contact requirements',()=>{
 const en=read('src/journeys.ts');
 assert.match(en,/at least one photo, precise location, time observed and contact details/);
 assert.match(en,/旧版聊天机器人仅支持英文/);
});
