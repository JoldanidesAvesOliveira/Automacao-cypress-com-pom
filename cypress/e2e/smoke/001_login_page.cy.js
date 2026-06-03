import LoginActions from '../../support/actions/login/loginActions';

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

});