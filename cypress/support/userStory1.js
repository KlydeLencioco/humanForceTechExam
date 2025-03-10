import humanForceHomePage from '../../cypress/pageObject/humanForce/homePage.js'
import timeAndAttendancePage from '../../cypress/pageObject/humanForce/timeAndAttendancePage.js'
import articlePage from '../../cypress/pageObject/humanForce/articlePage.js'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am in Humanforce home Page', () => {
    humanForceHomePage.visitHumanForceHomePage()
})

When('I click Time And Attendance link at the bottom of the Page', () => {
    humanForceHomePage.clickTimeAndAttendanceLink()
})

Then('I am navigated to Time And Attendance Page', () => {
    timeAndAttendancePage.validateTimeAndAttendanceBannerVisible()
})
