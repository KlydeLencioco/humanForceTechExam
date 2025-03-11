class humanForceHomePage {
    bannerHomePage = () => cy.get('[class="banner z-20 w-full"]')
    linkTimeAndAttendance = () => cy.get('li[class="mb-3"] [href="/product/workforce-management/time-and-attendance/"]')

    visitHumanForceHomePage () {
        cy.visit('https://humanforce.com/')
    }

    clickTimeAndAttendanceLink() {
        this.linkTimeAndAttendance().click()
    }

    validateHomeBannerVisible () {    
        this.bannerHomePage().should('be.visible')
    }


}

export default new humanForceHomePage()
