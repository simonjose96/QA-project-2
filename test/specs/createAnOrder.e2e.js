const page = require('../../page');
//const helper = require('../../helper')

describe('Create an order', () => {


    it('Setting up the addresses', async ()=> {
        await browser.url('/')
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        await browser.pause(3000);
    })

    it('Supportive plan', async ()=> {
        await browser.url('/') 
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
        const SupportiveButton = await $(page.SupportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
        await browser.pause(2000);
    })

    it('Filling in the phone number', async ()=> {
        await browser.url('/') 
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
        const SupportiveButton = await $(page.SupportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed();
        const phoneNumberField= await $(page.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(helper.getPhoneNumber('+1'));
        await $(page.nextButton).click();
        const codeField = await $(page.codeField);
        await expect(codeField).toBeDisplayed();
        const confirmButton = await $(page.confirmButton);
        await confirmButton.click();
        await browser.pause(3000);

            
    }) 

    it('Adding a credit card', async ()=> {

        await browser.url('/') 
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        
        await callATaxiButton.click();
        const SupportiveButton = await $(page.SupportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
        const PaymentmethodButton = await $(page.PaymentmethodButton);
        await PaymentmethodButton.click();
        const AddcardButton = await $(page.AddcardButton);
        
        await AddcardButton.click();
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.setValue('1234 0000 0011');     
        const codeField = await $(page.codeField);
        await codeField.setValue('1234');
        const randomclick = await $(page.randomclick);
        await randomclick.click();
        const linkButton = await $(page.linkButton);
        
        await linkButton.click();
        
       const closebutton = await $(page.closebutton);
       
       await closebutton.click();
       await browser.pause(2000);
        
    })
     

    it('Writing a message to the driver', async ()=> {
        
        await browser.url('/') 
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
        const SupportiveButton = await $(page.SupportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
        const drivermessage = await $(page.drivermessage);
        await drivermessage.waitForDisplayed();
        await drivermessage.setValue('Be on Time');
        await browser.pause(2000);

    })

   

    it('Ordering Blanket and handkerchiefs', async ()=> {
        
        await browser.url('/') 
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
        const SupportiveButton = await $(page.SupportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
        //const orderrequirements = await $(page.orderrequirements);
        //await orderrequirements.waitForDisplayed();
        //await orderrequirements.click();
        await browser.pause(4000);
        const blanketlabel = await $(page.blanketlabel);
        await blanketlabel.waitForDisplayed();
        const slider = await $(page.slider);
        await slider.waitForDisplayed();
        await slider.click();
        await browser.pause(4000);

    })
     
    it('Ordering 2 ice creams', async ()=> {
        
        await browser.url('/') 
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
        const SupportiveButton = await $(page.SupportiveButton);
        await SupportiveButton.waitForDisplayed();
        await SupportiveButton.click();
        const counterplus = await $(page.counterplus);
        await counterplus.waitForDisplayed();
        await counterplus.click();
        await counterplus.click();
        await browser.pause(3000);
    }) 

    it('The car search modal appears', async ()=> {
        
        await browser.url('/') 
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
        const carmodal = await $(page.carmodal)
        expect(carmodal).toBeExisting();
        await browser.pause(2000);

    })
    
    /*
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    }) 
    
    */

})
