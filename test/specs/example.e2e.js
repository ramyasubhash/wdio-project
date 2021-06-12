import LoginPage from '../pageobjects/login.page'
import LogoutPage from '../pageobjects/logout.page'
import DashboardPage from '../pageobjects/dashboard.page'
import StopwordsPage from '../pageobjects/stopwords.page'
import Page from '../pageobjects/page'
import assert from 'assert'
import allureReporter from '@wdio/allure-reporter'

describe('My Login application', () => {
    beforeEach(async () => {
        await LoginPage.open()
    })

    it('should login with valid credentials', async () => {
        // await LoginPage.open()
        await LoginPage.login('sw_only', 'Sw@2021')
        await DashboardPage.landOnStopWords()
        await StopwordsPage.addingStopWord('testwdio', 'test:wdio')
        //assert.equal(browser.getTitle(), 'stopwaords')

        // browser.takeScreenshot()

        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!'
        // )
    })

    // afterEach(async () => {
    //     await LogoutPage.logout()
    // })
})
