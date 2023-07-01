# Sprint 8 project
/*
Brief Description:
This project involves the testing of certain functionality of Urban Route app through automation testing using web driver io. It focusses on UI test for ordering a taxi.

Technologies used:
Visual Studio Code, Git Bash,& GitHub  were the different technologies used for this project. nodejs


Steps Taken in this project: 
1. HM08-QA-US folder was created in the user folder using the terminal.
2. The reposotary was created using GITBASH
3. The reposotary is cloned to GITHUB.
4. NPM was started in the terminal using "npm install" code.
5. Server is started.
6. Uesd the page object framework in which the page.js file has all the page elements defined.
7. Package,json, wdio.config,js, createAnOrder.e2e.js, page.js, & helper.js were the files used for this project.  
8. page,js and helper.js are the modules which were used to generate random numbers for phone numbers and to initialize and define the selctors in the app.
9. In total eight tests were conducted as per the project requirement
10. All the major part of the testing were done in createAnOrder file.
11. "Setting up address" function automatically fills the from and to adrreses on the respective fileds.
12. "Supportive plan" funciton selectes the supportive taxi.
13. "Filling in the phone number" function fills the phone number field with a random numnber in correct format using helpe.js file.
14. "Adding a credit card" funtion adds the credit card filling in the credit card number, CVV and linking it as per the requirement15. 
15. "Writing a message to the driver" function simply inputs a message in the appropriate field.
16. "Ordering Blanket and handkerchiefs" function selects the slider to add blanket and handkerchiefs to the order.
17. "Ordering 2 ice creams" function orderts two ice creams to the current order.
18. "The car search modal" appears function ensures that the car search modal appears.
19. . Package.json file defined the chrome and firefox version.
20. Wdio.config.js defined the mocha structure including the server http address.
21. Each test required one it funcion.
22. Each test were run using the command "npm run wdio".
23. The file was commited to github from the terminal using the code "git push"

*/