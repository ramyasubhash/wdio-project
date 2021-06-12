/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage {
    /**
     * define selectors using getter methods
     */
    get dashboard() {
        return $('//h1[contains(text(), "Dashboard")]')
    }

    get dataMenu() {
        return $('//ul[@class="nav"]//li[2]')
    }

    get stopWordsMenu() {
        return $('//a[@href="/data/stop-words"]')
    }

    async landOnStopWords() {
        await (await this.dashboard).isDisplayed()
        browser.pause(3000)
        await (await this.dataMenu).isDisplayed()
        await (await this.dataMenu).click()
        await (await this.stopWordsMenu).click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
}

export default new DashboardPage()
