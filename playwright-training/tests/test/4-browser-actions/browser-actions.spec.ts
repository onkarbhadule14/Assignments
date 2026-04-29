import{test,expect, chromium} from '@playwright/test';

//Browser actions are all about the set of methods that we are going to use to perform the actions on the browser.
 test('Browser Actions', async ({ page }) => {

    //1. To navigate to a URL           
    await page.goto('https://www.google.com/');

    //2. To get the title of the page
    const title = await page.title();
    console.log('Title of the page is: ' + title);                                  

    //3. To get the URL of the page
    const url = await page.url();
    console.log('URL of the page is: ' + url);      

    //4. To get the content of the page
    const content = await page.content();
    console.log('Content of the page is: ' + content);

    //5. To take a screenshot of the page   
    await page.screenshot({ path: 'screenshot.png' });

      







 });