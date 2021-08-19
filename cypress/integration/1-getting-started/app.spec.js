describe("My app setup", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/");
    });

    it("should go to my app", () => {
        cy.contains("Edit src/App.tsx and save to reload.");
    });

    it("can click plus button", () => {
        cy.contains("+").click();
        cy.get("span:first").should("contain", "1");
    });

    it("can click minus button", () => {
        cy.get("[data-cy=minus]").click();
        cy.get("span:first").should("contain", "-1");
    });

    it("try to set amount", () => {
        cy.contains("Add Amount");
        cy.get("input:first").clear().type(4);
        cy.contains("Add Amount").dblclick();
        cy.get("span:first").should("contain", "8");
    });

    it("try to set the async amount", () => {
        cy.contains("Add Async");
        cy.get("input:first").clear().type(4);
        cy.contains("Add Async").click();
        cy.get("span:first").should("contain", "4");
    });
});
