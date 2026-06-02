import loginActions from '../../support/actioins/login/loginActions';   

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

});