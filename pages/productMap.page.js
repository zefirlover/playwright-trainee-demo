const { expect } = require('@playwright/test');
const { PomPage } = require('./pomPage');

const catalogButton = '.NavbarCatalog_wrapper__kVmUY';
const catalogContainer = '.Catalog_container__0jVbE';
const firstCategoryLabel = 'label[for="category1"]';

class ProductMapPage extends PomPage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async getCatalogContainer() {
        return await super.getElement(catalogContainer);
    }

    async getFirstCategoryLabel() {
        return await super.getElement(firstCategoryLabel);
    }

    async openProductsUrl() {
        await super.openUrl('https://rentzila.com.ua/products/');
    }

    async clickCatalogButton() {
        await super.clickElement(catalogButton);
    }
}

module.exports = { ProductMapPage };