//Annotations are all about a set of keywords and default methods that we are going to use to run and 
// create your test cases in playwright.

// test ==> Test is a default main method that will be considered as a independent test case.

// test.only() ==> Test.only method is going to help us to run only that particular test 
// case which is marked with only keyword.


import { test, expect } from '@playwright/test';
/*

test('Name of Test Case', async ({ page:any }) => {
  await any.goto('https://login.salesforce.com/');

  // Expect a title "to contain" a substring.
  await expect(any).toHaveTitle(/Salesforce/);
})

*/

//independent test case
 /* test.only('name of the test case', async ({ page:any }) => {
 // test steps and assertions
});

*/

// test.describe() ==> Test.describe method is going to help us to group the test cases as a single block. 

test.describe('Group Name 1', () => {

    test('Group 1 - Test Case 1', async ({}) => {
    console.log('Group 1 - Test Case 1');
  });

    test('Group 1 - Test Case 2', async ({}) => {
    console.log('Group 1 - Test Case 2');
  });
});

test.describe('Group Name 2', () => {

    test('Group 2 - Test Case 1', async ({}) => {
    console.log('Group 1 - Test Case 1');
  });

    test('Group 2 - Test Case 2', async ({}) => {
    console.log('Group 2 - Test Case 2');
  });
});



