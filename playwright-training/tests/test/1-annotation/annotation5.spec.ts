import{test,expect} from '@playwright/test';

// test.slow()==> I am expecting this test case to be executed a little slow.
//  Wait for some more time to complete the promise. 

test('testcase1', async ({ }) => {
    console.log('testcase1');
    //expect(1).toBe(2);
});

test('testcase2', async ({ }) => {
    test.slow();//increase the timeout for this test case * 3 times of default timeout
    console.log('testcase2');
    //signInBtn.click()//sample instruction to make the test case slow 
});

test('testcase3', async ({ }) => {
    console.log('testcase3');
});