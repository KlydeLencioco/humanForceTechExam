class articlePage {
    bannerArticlePage = () => cy.get('[class="relative bg-yellow pb-8 pt-20 md:pb-20 desk:pt-28"]')    
    textBlockArticle = () => cy.get('div[class="w-full"] [class="mx-auto w-full lg:w-8/12"]')

    validateArticleBannerVisible() {
        this.bannerArticlePage().should('be.visible')
    }

    validateTextBlockVisible() {
        this.textBlockArticle().should('be.visible')
    }

    valiidateArticleURL ()  {
        cy.url().should('eq', 'https://humanforce.com/blog/7-benefits-of-workforce-analytics-for-business/')
    }
}

export default new articlePage()
