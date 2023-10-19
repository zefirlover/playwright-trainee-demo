const { test, expect } = require('@playwright/test');
const { ProductMapPage } = require('../pages/productMap.page');

let productMapPage;

test.describe('Products Map Page testing', () => {
    test.beforeEach(async ({ page }) => {
        productMapPage = new ProductMapPage(page);
        await productMapPage.goToProducts(); 
    })

    test('While click on NavbarCatalog button, Catalog container is visible', async () => {
        await productMapPage.clickCatalogButton();
        await expect(productMapPage.catalogContainer).toBeVisible();
    });

    test('First firstCategoryLabel contains text "budivelna-tekhnika"', async () => {
        await expect(productMapPage.firstCategoryLabel).toHaveText("Будівельна техніка");
    })
});