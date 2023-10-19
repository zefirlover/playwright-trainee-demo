const { expect } = require('@playwright/test');

exports.ProductMapPage = class ProductMapPage {
    constructor(page) {
        this.page = page;
        this.catalogButton = page.locator('.NavbarCatalog_wrapper__kVmUY');
        this.catalogContainer = page.locator('.Catalog_container__0jVbE');
        this.firstCategoryLabel = page.locator('label[for="category1"]');
    }

    async goToProducts() {
        await this.page.goto('/products');
    }

    async clickCatalogButton() {
        await this.catalogButton.click();
    }
}