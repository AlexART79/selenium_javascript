const { by } = require('protractor');

// locators used in tests
exports.locators = {
    common_locators: {
        sidebar_locator: by.className("layout-sidebar"),
        search: by.xpath(".//input"),
        side_menu_item_locator: by.xpath("./descendant-or-self::ul[@class='layout-submenu']/li[@role='presentation']/a")

    },

    demos_page: {
        introduction: by.xpath("//*[contains(@class, 'introduction')]//h1")
    },

    checkbox_page_locators: {
        first_checkbox_locator: by.xpath("//h3[@class='first']/following-sibling::div/div[contains(@class, 'p-checkbox') and @role='checkbox']"),
        second_checkbox_locator: by.xpath("(//div[contains(@class, 'p-checkbox') and @role='checkbox'])[2]")
    },

    autocomplete_page_locators: {
        basic_autocomplete: by.xpath("(//span[contains(@class, 'p-autocomplete')])[1]"),
        advanced_autocomplete: by.xpath("(//span[contains(@class, 'p-autocomplete')])[2]")
    },
};