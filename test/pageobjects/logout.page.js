import Page from './page'

class LogoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logoutDropdown() {
        return $('#dropdownForm1')
    }
    get logoutButton() {
        return $('//div[@class="profile-menu dropdown-menu show"]//button[4]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout() {
        await (await this.logoutDropdown).click()
        await (await this.logoutButton).click()
    }
}

export default new LogoutPage()
