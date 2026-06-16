1. Create a file in your folder named homeworkTwo.ts 

2. Copy the code from template.ts into your file

3. Convert your css selectors from homework #1 into playwright selectors and assert they are visible

---

- for 1 element, use 1 test case. 

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

4. run your tests 

5. create a PR and add Sean as a reviewer
