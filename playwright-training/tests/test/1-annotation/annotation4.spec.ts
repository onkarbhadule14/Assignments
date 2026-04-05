import{test,expect} from '@playwright/test';

// test.fail () ==>  I am expecting this test case to fail. Highlight if this test case is not failing. 
test.fail('test case - 1', async () => {
  console.log('test case - 1');
  expect(1).toBe(2); 
});

test('test case - 2', async () => {
  console.log('test case - 2');
});

test('test case - 3', async () => {
  console.log('test case - 3');
});