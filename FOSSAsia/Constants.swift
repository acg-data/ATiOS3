//
//  Constants.swift
//  FOSSAsia
//
//  Created by Jurvis Tan on 5/2/16.
//  Copyright © 2016 FossAsia. All rights reserved.
//

import Foundation

struct Constants {

    static let numberOfTracks = 16
    static let jsonFileExtension = ".json"
    static let localNotificationIdentifier = "LocalNotification"
    static let sessionsStoryboardName = "Sessions"
    static let individualEventStoryboard = "IndividualEvent"
    static let eventViewControllerID = "EventViewController"
    static let okTitle = "OK"
    static let cancelTitle = "Cancel"
    static let appStoreAlertTitle = "Open App Store?"
    static let appStoreAlertMessage = "Tapping OK will temporarily exit this application and open the app's page on the App Store"

    struct UserDefaultsKey {
        static let FilteredTrackIds = "FilteredTrackIds"
        static let dataJsonKey = "data"
        static let attributesJsonKey = "attributes"
        static let emailJsonKey = "email"
        static let passwordJsonKey = "password"
        static let typeJsonKey = "type"
        static let userJsonValue = "user"
        static let firstName = "firstName"
        static let lastName = "lastName"
        static let acessToken = "acessToken"

    }

    struct Url {
        static let registerUrl = "https://open-event-api-dev.herokuapp.com/v1/users"
        static let loginUrl = "https://open-event-api-dev.herokuapp.com/auth/session"
        static let aceTicketAPI = "https://api.aceticket.com/v1"
        static let eventsEndpoint = "https://api.aceticket.com/v1/events"
        static let ticketsEndpoint = "https://api.aceticket.com/v1/tickets"
        static let venuesEndpoint = "https://api.aceticket.com/v1/venues"
    }

    struct alertMessage {
        static let logoutMessageTitle = "Do you want to Sign Out?"
        static let logoutMessage = "Click Yes to Sign Out!"
        static let noTitle = "No"
        static let yesTitle = "Yes"
    }

    struct Header {
        static let contentType = "Content-Type"

        static let contentTypeValueSignup = "application/vnd.api+json"
        static let contentTypeValueLogin = "application/json"

    }

    struct ResponseMessages {
        static let InvalidParams = "Email or Password incorrect"
        static let ServerError = "Problem connecting to server!"
        static let successMessageSignup = "Account created successfully"
        static let successMessageLogin = "Successfully signed in"
        static let checkParameter = "Please check your entries"

    }


    struct Sessions {
        static let track = "track"
        static let id = "id"
        static let sessionId = "session_id"
        static let title = "title"
        static let description = "description"
        static let location = "location"
        static let speakers = "speakers"
        static let startTime = "start_time"
        static let endTime = "end_time"
        static let speakerName = "name"
    }

    struct Location {
        static let lattitude = 42.3601
        static let longitude = -71.0589
        static let spanCoordinate = 0.01
        static let annotationTitle = "Ace Ticket"
    }

    struct SettingsManager {
        static let keyForEvent = "HasEvents"
        static let keyForMicrolocations = "HasMicrolocations"
        static let favesJSON = "faves.json"
    }

    struct Images {
        static let navbarFaveHighlighted = "navbar_fave_highlighted"
        static let navbarFave = "navbar_fave"
    }
    struct MoreViewController {
        static let message = "I am using Ace Ticket iOS app to find great seats for sports, concerts, and theater events. Check it out at https://www.aceticket.com/"
        static let subject = "Check out Ace Ticket!"
        static let Title = "Subject"
    }
}
