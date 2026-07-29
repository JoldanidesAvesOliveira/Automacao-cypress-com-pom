import InventoryActions from "../../support/actions/inventory/inventoryActions";
import LoginActions from "../../support/actions/login/loginActions";
describe('Inventory Page', () => {
    beforeEach(() => {
        // Perform login before each test
        LoginActions.visitPage();
        LoginActions.fillLoginForm('standard_user', 'secret_sauce');
        LoginActions.clickLoginButton()
    });
    it('should display the correct products', () => {
        // Test implementation
        
        InventoryActions.inventoryList();
        cy.get("[data-test='inventory-list']").should('be.visible');
    });
});