import LoginPage from '../pageobjects/login.page'
import LogoutPage from '../pageobjects/logout.page'
import DashboardPage from '../pageobjects/dashboard.page'
import StopwordsPage from '../pageobjects/stopwords.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('sw_only', 'Sw@2021')
        await DashboardPage.landOnStopWords()
        await StopwordsPage.addingStopWord('testwdio', 'test:wdio')
        await LogoutPage.logout()
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!'
        // )
    })
})
