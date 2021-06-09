import Page from './page'

class StopwordsPage extends Page {
    get stopWordsLibraryTitle() {
        return $('//h1[contains(text(), "Stop Words Library")]')
    }

    get stopWordsTitle() {
        return $('//h1[contains(text(), "Stop Words")]')
    }

    get stopWordsLayoutTitle() {
        return $('//h4[contains(text(), "Stop Words")]')
    }

    get stopWordsDefinition() {
        return $('//h4[contains(text(), "Stop Words Definition")]')
    }

    get addStopWordButton() {
        return $('//button[contains(text(), " Add Stop Word ")]')
    }

    get stopWordName() {
        return $('#stopWordName')
    }

    get stopWordTextBox() {
        return $('//input[@role="combobox"]')
    }

    get comboBoxValues() {
        return $('//div[@class="col-md-9 multiple-select no-dropdown"]')
    }

    get optionsButton() {
        return $('//button[contains(text(), "Options")]')
    }

    get saveOption() {
        return $(
            '//div[@class="dropdown-content dropdown-menu show"]//button[1]'
        )
    }

    get saveExitOption() {
        return $(
            '//div[@class="dropdown-content dropdown-menu show"]//button[2]'
        )
    }

    get stopWordsTable() {
        return $('//tbody[@class="ui-table-tbody"]')
    }

    get stopWordsTableRows() {
        return $$('//tbody[@class="ui-table-tbody"]//tr')
    }

    get stopWordsTableColumn() {
        return $$('//tbody[@class="ui-table-tbody"]//tr[3]//td[2]')
    }

    get stopWordsLastColumn() {
        return $$('//tbody[@class="ui-table-tbody"]//tr[3]//td[1]')
    }

    get checkBoxes() {
        return $$('//div[@role="checkbox"]')
    }

    get buttonLink() {
        return $$('//div[@role="checkbox"]')
    }
    get viewEditButton() {
        return $('//span[contains(text(), "View/Edit")]')
    }

    get deleteButton() {
        return $('//button[contains(text(), "Delete "")]')
    }

    get tableCheckboxes() {
        return $$('//div[@class="ui-chkbox ui-widget"]')
    }

    get dialogButtonYes() {
        return $(
            '//div[@class="modal-footer"]//button[contains(text(), "Yes")]'
        )
    }

    async addingStopWord(stopwordname, stopwardsInput) {
        await (await this.addStopWordButton).click()
        await (await this.stopWordName).setValue(stopwordname)
        browser.debug()
        const stopwardsInputList = stopwardsInput.split(':')
        stopwardsInputList.forEach(async (element) => {
            await (await this.stopWordTextBox).setValue(element)
            clickEnter()
        })
    }
}
export default new StopwordsPage()
