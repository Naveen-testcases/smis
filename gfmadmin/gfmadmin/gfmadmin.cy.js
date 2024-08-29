
import gfmMenus from "../../pageobject/gfmadmin/gfmMenus";


describe('GFM',()=>{
    beforeEach(function () {
        cy.fixture('Section_login').then(function (data) {
            globalThis.data = data
            cy.clearAllCookies();
            cy.clearAllLocalStorage();
            //cy.section_logins(globalThis.data.gfmusername, globalThis.data.gfmpassword);

        })           
})
   
    it('GFMAdmin', () => {    
       const gfmAdmin = new gfmMenus ();    
       cy.section_logins(globalThis.data.gfmusername, globalThis.data.gfmpassword);
            gfmAdmin.createTickectsMenu();
            cy.wait(300)
            gfmAdmin.createBultTicketsButton();
            cy.wait(300)
            gfmAdmin.save();
            gfmAdmin.mandatoryfieldsValidations();
            cy.wait(300)
            gfmAdmin.selectOrganization();
            cy.wait(300)
            gfmAdmin.selectCircle();
            cy.wait(300)
            gfmAdmin.selectDivision();
            cy.wait(300)
            gfmAdmin.selectSubdivision();
            gfmAdmin.selectSection();

           // })

    
    })   
    });

