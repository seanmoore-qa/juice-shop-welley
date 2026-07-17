Git Cheatsheet

References: 
    https://git-scm.com/docs
    youtube.com/watch?v=4Ze7HAcsuJY&themeRefresh=1 


What to do when starting work on a new task/branch:

- On the main branch (master in this case), make sure you're up-to-date with the latest changes: `git pull`
- Create and checkout a new branch to start working on: `git checkout -b my-new-branch-name`


What to do when you've made all the code changes you needed to and are ready to push your branch to github:

- add your changes to pre-commit: `git add .` 
- commit the changes: `git commit -m "some short but descriptive commit message"`
- push your branch to github: `git push origin my-branch-name` 
- open github and continue with making a pull request


What to do when you have already pushed your branch to github (with or without creating a pull request), but you need to add more changes to it:

- while on your branch, make whatever changes you need to.
- add your changes to pre-commit: `git add .` 
- commit the changes: `git commit -m "some short but descriptive commit message"`
- push your branch to github: `git push origin my-branch-name` 
- now your changes will be added to the existing branch on github (and to the pull request, if existing).


How to create a pull request after pushing your branch to github:

- Go to the repository on github, you should see a green banner about your branch. Click the CTA button in the banner.
- delete any pre-generated description and click to create a pull request. 

ALT:
- go to the repository pull requests tab
- click 'new pull request'
- you will see 2 buttons, 'base: master' and 'compare: master', change compare from master to your branch. 
- delete any pre-generated description and click to create a pull request. 

---
Playwright Reference Guide

Installation: 
    docs: https://playwright.dev/docs/intro 

Basics: 
    docs: https://playwright.dev/docs/writing-tests 

Locators: 
    docs: https://playwright.dev/docs/locators 

Tests:
    docs: https://playwright.dev/docs/running-tests#running-tests

Actions:
    docs: https://playwright.dev/docs/input 

Assertions: 
    docs: https://playwright.dev/docs/test-assertions 

Debugging:
    docs: https://playwright.dev/docs/debug 

VSC plugin:
    docs: https://playwright.dev/docs/getting-started-vscode 