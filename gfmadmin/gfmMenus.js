/// <reference types="cypress" />

class gfmMenus {

    createTickectsMenu() {
        cy.get("a[title='Create Tickets']").should('be.visible').click();
        cy.url().should('include','https://pre-prod.smis.pixelvidetesting.com/home/create-tickets');
    }

    createBultTicketsButton() {
        cy.contains('Create Bulk Tickets').should('be.visible').click();
    }

    save() {
        cy.contains('Save').scrollIntoView().click();
    }

    mandatoryfieldsValidations() {
        const validations = [
            'Please, Select Organization',
            'Please, Select User Type',
            'Please, Select Commissioned Status',
            'Please, Select Meter Status',
            'Please, Select Ticket Category',
            'Please, Select Task Category',
            'Please, Enter Ellapsed Time',
            'Please, Select Integrate Status',
            'Please, Fill Remarks'
        ];

        validations.forEach((validation) => {
            cy.contains(validation).scrollIntoView().should('be.visible');
        });
    }

    selectOrganization() {
        cy.get('#organization').should('exist').click();
        // Select the third option in the organization dropdown
        cy.get('span.ng-option-label.ng-star-inserted').eq(1).scrollIntoView().click();
        cy.contains('Select Section').click({ force: true });
    }

    selectCircle() {

        cy.contains('Create Bulk Tickets').scrollIntoView();  
        cy.get('#circle  > .ng-select-container > .ng-value-container').should('exist').click();
        cy.get('ng-select[placeholder="Select Circle"]').should('be.visible').within(() => {
            cy.get('.ng-option-label').each(($circle) => {
                if ($circle.text().includes('KADAPA')) {
                    cy.wrap($circle).click();
                }
            });
        });
    }

    selectDivision() {
        
        cy.get('body').click();
        cy.get('#division > .ng-select-container > .ng-value-container').click({force: true});
        //cy.contains(' GOOTY ').click();
        cy.wait(300)
        cy.get('.ng-option.ng-star-inserted').contains('KADAPA').first().click({force: true});
       
    }

    selectSubdivision() {
        cy.get('body').click();
        //cy.xpath('//ng-select[@id="subdivision"]').click({ force: true })
        cy.get('#subdivision > .ng-select-container > .ng-value-container').click({ force: true });
        cy.wait(300)
        cy.get('.ng-option.ng-star-inserted').contains('KADAPA OCC1').first().click({ force: true })
    }

    selectSection()
    {
        cy.get('body').click();
        cy.get('#section > .ng-select-container > .ng-value-container').click({force: true});
        cy.get('.ng-option.ng-star-inserted').contains('C K DINNE').first().click({ force: true })

    }
    selectUser()
    {

        cy.get('body').click();
        //cy.get('#sectionUser').click();
        //cy.contains('Section User').click();
        cy.contains('label', 'Section User').should('exist');

    }
}

export default gfmMenus;
