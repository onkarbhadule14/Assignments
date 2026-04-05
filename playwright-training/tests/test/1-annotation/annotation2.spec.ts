import { test, expect } from '@playwright/test';

// test.skip() ==> Test.skip method is going to help us to skip 
// that particular test case which is marked with skip keyword.

test.skip('salesforce login page', async ({ page:any }) => {
  await any.goto('https://login.salesforce.com/');

  // Expect a title "to contain" a substring.
  await expect(any).toHaveTitle(/Salesforce/);
})

test('test case - 1', async ({ page:any }) => {
    console.log('test case - 1');
})

test('test case - 2', async ({ page:any }) => {
    console.log('test case - 2');
})

test('test case - 3', async ({ page:any }) => {
    console.log('test case - 3');
})