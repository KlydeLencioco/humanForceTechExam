import humanForceHomePage from '../../../cypress/pageObject/humanForce/homePage.js'
import timeAndAttendancePage from '../../../cypress/pageObject/humanForce/timeAndAttendancePage.js'
import articlePage from '../../../cypress/pageObject/humanForce/articlePage.js'

describe('User Story 1', () => {
    beforeEach(() => {
        cy.viewport('macbook-16')
    })
    it('User visits Human Force Home Page', () => {
        humanForceHomePage.visitHumanForceHomePage()
        humanForceHomePage.validateHomeBannerVisible()
    })

    it('User navigates to Time and Attendance link', () => {
        humanForceHomePage.clickTimeAndAttendanceLink()
        timeAndAttendancePage.validateTimeAndAttendanceBannerVisible()
    })

    it('User navigates to 7 benefits of workforce analytics for business', () => {
        timeAndAttendancePage.clickTargetArticleLink()
        articlePage.validateArticleBannerVisible()
        articlePage.validateTextBlockVisible()
        articlePage.valiidateArticleURL()
    })
})