/// <reference types="cypress" />

// GET

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI4ODMiLCJlbWFpbCI6ImpheXNocmkyMEBuYXZndXJ1a3VsLm9yZyIsImlhdCI6MTY5NzAxNTAyMywiZXhwIjoxNzI4NTcyNjIzfQ.G6T02H9I2nNHDsbZJ1SkocXmbHbIfNxVAYusv5Rn0Yo";
const headers = {
  Authorization: `Bearer ${token}`
};

describe ("HTTP Requests",()=>{
    it("GET /pathways/names",()=>{
      cy.request('GET', 'https://merd-api.merakilearn.org/pathways/names')
      .its('status')
      .should('equal', 200);
    })
    
    it("GET /search/popular",()=>{
      cy.request('GET', 'https://merd-api.merakilearn.org/search/popular')
      .its('status')
      .should('equal', 200);
    })


    it("GET /assessment/1/student/result", () => {
      cy.request({
        method: 'GET',
        url: 'https://merd-api.merakilearn.org/assessment/1/student/result',
        headers: headers
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });



    it("GET /assessment/allAssessments", () => {
      cy.request({
        method: 'GET',
        url: 'https://merd-api.merakilearn.org/assessment/allAssessments', // Corrected URL
        headers: headers
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });



    it("GET /assessment/1", () => {
    
      const headers = {
        Authorization: `Bearer ${token}`
      };
      cy.request({
        method: 'GET',
        url: 'https://merd-api.merakilearn.org/assessment/1', // Your specified URL
        headers: headers
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });


    
    
    


    
})