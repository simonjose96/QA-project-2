module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    cardNumberField: '#number',
    codeField: '.card-second-row #code',
    drivermessage: '#comment',

    // Buttons
    callATaxiButton: '//button[contains(text(), "Call a taxi")]',
    SupportiveButton: '//div[starts-with(text(), "Supportive")]',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    PaymentmethodButton:'//div[@class="pp-text"]',
    AddcardButton: 'div=Add card',
    randomclick: '.plc',
    nextButton: '//button[contains(text(), "Next")]',
    confirmButton: '//button[contains(text(), "Confirm")]',
    linkButton: '//button[contains(text(), "Link")]',
    closebutton: '.payment-picker .section.active .close-button',
    orderrequirements: '//div[@class="reqs-header"]',
    slider: '//div[contains(text(),"Blanket and handkerchiefs")]/following-sibling::div',
    counterplus: '.r-counter .counter .counter-plus',
    // Modals
    phoneNumberModal: '.modal',
    carmodal: '.workflow-subcontainer.tariff-picker.tariff-cards',

    //grid
    blanketlabel: '//div[starts-with(text(), "Blanket and handkerchiefs")]'

    // Functions
    /*fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },*/
};