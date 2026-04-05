import { test, expect } from '@playwright/test';

test('test case - 1', { tag: '@smoke' }, async () => {
  console.log('test case smoke- 1');
});

test('test case - 2', { tag: '@sanity' }, async () => {
  console.log('test case sanity - 1');
});                         

test('test case - 3', { tag: '@regression' }, async () => {
  console.log('test case regression - 1');
});    

test('test case - 4', { tag: "@smoke And @sanity" }, async () => {
  console.log('test case smoke and sanity- 2');
});
