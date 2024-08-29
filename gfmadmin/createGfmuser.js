

import Generator from '../../Generators'

class CreateGFMUsers 
{
    save()
    {
        cy.contains('Submit').click(); 

    }
    mandatoryfieldsValidations() {
        const validations = [
            'Name is required',
            'Mobile number is required',
            'Organization is required',
            'Circle is required',
            'Division is required',
            'Subdivision is required',
            'Section is required'
        ];
    
        validations.forEach((validation) => {
            cy.contains(validation).scrollIntoView().should('be.visible');
        });
    }
    
 
    addNew()
    {
        cy.get('.add_btn.appearance-filled.size-small.shape-rectangle.icon-start.status-basic.nb-transition').click();

    }

    Name()
    {
        cy.get('#userName').type('')

    }

}