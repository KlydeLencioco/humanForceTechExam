import humanForceHomePage from '../../../cypress/pageObject/humanForce/homePage.js'
import timeAndAttendancePage from '../../../cypress/pageObject/humanForce/timeAndAttendancePage.js'
import articlePage from '../../../cypress/pageObject/humanForce/articlePage.js'

describe('User Story 1', () => {
    beforeEach(() => {
        cy.viewport('macbook-16')
    })
    it('User can access Humanforce website', () => {
        humanForceHomePage.visitHumanForceHomePage()
        humanForceHomePage.validateHomeBannerVisible()
    })

    it('User can navigate to "Time & Attendance" page', () => {
        humanForceHomePage.clickTimeAndAttendanceLink()
        timeAndAttendancePage.validateTimeAndAttendanceBannerVisible()
    })

    it('User can access and read the article "7 benefits of workforce analytics for business"', () => {
        timeAndAttendancePage.clickTargetArticleLink()
        articlePage.validateArticleBannerVisible()
        articlePage.validateTextBlockVisible()
        articlePage.valiidateArticleURL()
    })
})
