import LoginActions from "../../support/actions/login/loginActions";

describe('TC001 Login Page',() => {
    beforeEach(() => {
        LoginActions.visitPage();
    });
    describe('TC001.01 Login with valid credentials', () => {
        it('should login successfully', () => {
            LoginActions.fillLoginForm("standard_user", "secret_sauce");
            LoginActions.clickLoginButton();
            cy.url().should('include', '/inventory.html');
        });
    });
     describe('TC001.02 Login with invalid credentials', () => {
        it('should display an error message with invalid credentials', () => {
            // Fill in the login form with invalid credentials
            LoginActions.fillLoginForm("invalid_user", "invalid_password");
            LoginActions.clickLoginButton();
            cy.get("[data-test='error']").should("be.visible").and("contain", "Epic sadface: Username and password do not match any user in this service");
        });
    });

});