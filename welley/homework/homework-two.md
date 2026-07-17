Before continuing to homework 2, please do the following:

1. in the terminal, checkout the master branch: `git checkout master`

2. pull the latest changes: `git pull`

3. create and checkout a new branch for your homework 2: `git checkout -b <yourName>-homework-two`

---

1. Create a file in your folder named homework-two.spec.ts 

2. Copy the code from tests/template.spec.ts into your file

3. Convert your css selectors from homework #1 into playwright selectors and assert they are visible

---

- name the test case in the style 'check x element is visible'

- if you made multiple selectors for an element, you can put them in the same test case


You may need to click on multiple elements to get to your desired element. In this case, you need to create selectors for those elements and click them with .click(); for example, to close modal could be like 
```await page.locator('modal-close-button-selector').click();```


Playwright docs: https://playwright.dev/docs/locators 


---

example:


```
test('check header is visible', async ({ page }) => {
    await expect(page.locator('my-header')).toBeVisible();
});
```

---

4. follow instructions in readme.md for running the project and preparing to run tests

5. run your tests `npm run test:folderName` i.e. npm run test:Moore

6. create a PR and add Sean as a reviewer
