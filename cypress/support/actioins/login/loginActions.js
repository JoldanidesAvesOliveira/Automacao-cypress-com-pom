import { loginPageLocators as lPL } from '../../locators/login_page';
class LoginActions {
visitPage(){
    cy.visit("/");
}
fillLoginForm(username, password){
    cy.get(lPL.Username).type(username);
    cy.get(lPL.Password).type(password);
        
}
clickLoginButton(){
    cy.get(lPL.LoginButton).click();
}
}

export default new LoginActions();