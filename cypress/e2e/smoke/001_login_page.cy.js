import loginActions from "../../support/actions/login/loginActions";

describe('TC001 Login Page',() => {
    beforeEach(() => {
        loginActions.visitPage();
    });
    describe('TC001.01 Login with valid credentials', () => {
        it('should login successfully', () => {
            loginActions.fillLoginForm("standard_user", "secret_sauce");
            loginActions.clickLoginButton();
            cy.url().should('include', '/inventory.html');
        });
    });
     describe('TC001.02 Login with invalid credentials', () => {
        it('should display an error message with invalid credentials', () => {
            // Fill in the login form with invalid credentials
            loginActions.fillLoginForm("invalid_user", "invalid_password");
            loginActions.clickLoginButton();
            cy.get("[data-test='error']").should("be.visible").and("contain", "Epic sadface: Username and password do not match any user in this service");
        });
    });

});