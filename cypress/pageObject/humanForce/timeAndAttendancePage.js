class timeAndAttendancePage {
    bannerTimeAndAttendance = () => cy.get('[class="banner relative bg-yellow"')
    linkTargetArticle = () => cy.get('a[class="desk:hover:underline"][href="/blog/7-benefits-of-workforce-analytics-for-business/"]')
    
    validateTimeAndAttendanceBannerVisible() {
        this.bannerTimeAndAttendance().should('be.visible')
    }

    clickTargetArticleLink() {
        this.linkTargetArticle().click()
    }

}

export default new timeAndAttendancePage()
