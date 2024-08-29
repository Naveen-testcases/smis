class createtickets{

createtickets (){

 cy.get('[title="Create Tickets"]').click();

}

morebutton(){
     cy.contains('more')
}
checkbox(){

     cy.get('[type="checkbox"]').click();
}

bulkcreateticket(){

     cy.get(' Create Bulck Tickets ') 
}

bulkcreateticket(){

     cy.get(' Create Bulck Tickets ')
}

selectorganization(){
     cy.get('#organization')
}
    
selectcircle(){
     cy.get('#circle')
}
  
selectdivision(){
     cy.get('#division')
}

selectsubdivision(){
     cy.get('#subdivision')
}

selectsection(){
     cy.get('#section')
}

selectsectionuser(){
     cy.get('#sectionUser')
}
CommissionStatus(){
     cy.get('#commissionStatus')
}
selectticketcategory(){
     cy.get('[placeholder="Select Category"]')
}

taskcategory(){
     cy.get('[placeholder="Select Category"]')
}

EllapsedTime(){
     cy.get('#ellapsedTime')
}

Integrated(){
   cy.get('#integrated')
}

TicketRemarks(){
     cy.get('#ticketRemarks')
}

savebutton(){
     cy.get('[type="submit"]')
}

clickorganization(){
     cy.get('.ng-option ng-star-inserted')
}
spdcl (){
     cy.contains('SPDCL')

}

}
export default createtickets 