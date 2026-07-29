import { inventoryPageLocators as inventoryPage } from '../../locators/inventory_pages';
class InventoryActions {

    addToCartBackpack() { 
        cy.get(inventoryPage.backpackAddToCart).click();       
        cy.get(inventoryPage.cartIcon).click();

    }
    inventoryList() {
        cy.get(inventoryPage.inventoryList);
    }

}
export default new InventoryActions();