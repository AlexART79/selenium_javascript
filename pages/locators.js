const { By } = require('selenium-webdriver');

// locators used in tests
exports.locators = {
    common_locators: {
        sidebar_locator: By.className("layout-sidebar"),
        search: By.xpath(".//input"),
        side_menu_item_locator: By.xpath("./descendant-or-self::ul[@class='layout-submenu']/li[@role='presentation']/a")

    },

    demos_page: {
        introduction: By.xpath("//*[contains(@class, 'introduction')]//h1")
    },

    checkbox_page_locators: {
        first_checkbox_locator: By.xpath("//h3[@class='first']/following-sibling::div/div[contains(@class, 'p-checkbox') and @role='checkbox']"),
        second_checkbox_locator: By.xpath("(//div[contains(@class, 'p-checkbox') and @role='checkbox'])[2]")
    },

    autocomplete_page_locators: {
        basic_autocomplete: By.xpath("(//span[contains(@class, 'p-autocomplete')])[1]"),
        advanced_autocomplete: By.xpath("(//span[contains(@class, 'p-autocomplete')])[2]")
    },

    // google search (main) page
    google_search : {        
        search_box: By.name('q'),        
        results_box: By.id('rcnt')
    }
};