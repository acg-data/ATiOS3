//
//  Ticket.swift
//  FOSSAsia
//
//  Created by Ace Ticket on 2025.
//  Copyright © 2025 Ace Ticket. All rights reserved.
//

import Foundation

struct Ticket {
    let id: String
    let eventId: String
    let eventTitle: String
    let venue: String
    let date: Date
    let section: String
    let row: String
    let seat: String
    let qrCode: String
    let status: TicketStatus
    let price: Double
}

extension Ticket {
    enum TicketStatus: String, Codable {
        case purchased = "purchased"
        case used = "used"
        case expired = "expired"
        case refunded = "refunded"
    }
}

// MARK: - Codable Support for JSON parsing
extension Ticket {
    init(fromDictionary dict: [String: Any]) throws {
        guard let id = dict["id"] as? String,
              let eventId = dict["event_id"] as? String,
              let eventTitle = dict["event_title"] as? String,
              let venue = dict["venue"] as? String,
              let dateString = dict["date"] as? String,
              let section = dict["section"] as? String,
              let row = dict["row"] as? String,
              let seat = dict["seat"] as? String,
              let qrCode = dict["qr_code"] as? String,
              let statusString = dict["status"] as? String,
              let price = dict["price"] as? Double else {
            throw NSError(domain: "TicketDecodingError", code: 1, userInfo: [NSLocalizedDescriptionKey: "Missing required fields"])
        }
        
        self.id = id
        self.eventId = eventId
        self.eventTitle = eventTitle
        self.venue = venue
        self.section = section
        self.row = row
        self.seat = seat
        self.qrCode = qrCode
        self.price = price
        
        // Parse date string to Date
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ssZ"
        guard let date = dateFormatter.date(from: dateString) else {
            throw NSError(domain: "TicketDecodingError", code: 2, userInfo: [NSLocalizedDescriptionKey: "Invalid date format"])
        }
        self.date = date
        
        // Parse status
        guard let status = TicketStatus(rawValue: statusString) else {
            throw NSError(domain: "TicketDecodingError", code: 3, userInfo: [NSLocalizedDescriptionKey: "Invalid status"])
        }
        self.status = status
    }
}

// MARK: - Helper methods
extension Ticket {
    func getFormattedDate() -> String {
        let formatter = DateFormatter()
        formatter.dateStyle = .medium
        formatter.timeStyle = .short
        return formatter.string(from: date)
    }
    
    func getFormattedPrice() -> String {
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.currencySymbol = "$"
        return formatter.string(from: NSNumber(value: price)) ?? "$\(price)"
    }
    
    func getSectionRowSeat() -> String {
        return "\(section), Row \(row), Seat \(seat)"
    }
}