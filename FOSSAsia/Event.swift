//
//  Event.swift
//  FOSSAsia
//
//  Created by Jurvis Tan on 29/1/16.
//  Copyright © 2016 FossAsia. All rights reserved.
//

import Foundation

struct Event {
    enum Track: Int, CustomStringConvertible {
        case mlb = 1
        case nhl, nba, nfl, ncaa, concerts, theater, comedy, festivals, wrestling, mma, ufc, soccer, golf, tennis, racing
        var description: String {
            switch self {
            case .mlb: return "MLB"
            case .nhl: return "NHL"
            case .nba: return "NBA"
            case .nfl: return "NFL"
            case .ncaa: return "NCAA"
            case .concerts: return "Concerts"
            case .theater: return "Theater"
            case .comedy: return "Comedy"
            case .festivals: return "Festivals"
            case .wrestling: return "WWE"
            case .mma: return "MMA"
            case .ufc: return "UFC"
            case .soccer: return "Soccer"
            case .golf: return "Golf"
            case .tennis: return "Tennis"
            case .racing: return "Racing"
            }
        }

        func getTrackColor() -> UIColor {
            switch self {
            case .mlb:
                return UIColor(hexString: "1976D2")!
            case .nhl:
                return UIColor(hexString: "0D47A1")!
            case .nba:
                return UIColor(hexString: "C62828")!
            case .nfl:
                return UIColor(hexString: "1565C0")!
            case .ncaa:
                return UIColor(hexString: "2E7D32")!
            case .concerts:
                return UIColor(hexString: "6A1B9A")!
            case .theater:
                return UIColor(hexString: "AD1457")!
            case .comedy:
                return UIColor(hexString: "EF6C00")!
            case .festivals:
                return UIColor(hexString: "00897B")!
            case .wrestling:
                return UIColor(hexString: "424242")!
            case .mma:
                return UIColor(hexString: "9E9E9E")!
            case .ufc:
                return UIColor(hexString: "B71C1C")!
            case .soccer:
                return UIColor(hexString: "455A64")!
            case .golf:
                return UIColor(hexString: "33691E")!
            case .tennis:
                return UIColor(hexString: "F57F17")!
            case .racing:
                return UIColor(hexString: "D84315")!
            }
        }
    }

    let id: String
    let trackCode: Track
    let title: String
    let shortDescription: String
    let speakers: [Speaker]?
    let location: String
    let startDateTime: Date
    let endDateTime: Date
    var favorite: Bool
}
