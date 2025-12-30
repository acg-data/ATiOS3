//
//  TicketViewModel.swift
//  FOSSAsia
//
//  Created by Ace Ticket on 2025.
//  Copyright © 2025 Ace Ticket. All rights reserved.
//

import Foundation

protocol TicketPresentable {
    var ticketTitle: String { get }
    var ticketEvent: String { get }
    var ticketVenue: String { get }
    var ticketDate: String { get }
    var ticketSection: String { get }
    var ticketPrice: String { get }
    var ticketQRCode: String { get }
    var ticketStatus: String { get }
}

struct TicketViewModel: TicketPresentable {
    let ticket: Ticket
    
    init(_ ticket: Ticket) {
        self.ticket = ticket
    }
}

// MARK: - TicketPresentable Conformance
extension TicketViewModel {
    var ticketTitle: String {
        return ticket.eventTitle
    }
    
    var ticketEvent: String {
        return ticket.eventTitle
    }
    
    var ticketVenue: String {
        return ticket.venue
    }
    
    var ticketDate: String {
        return ticket.getFormattedDate()
    }
    
    var ticketSection: String {
        return ticket.getSectionRowSeat()
    }
    
    var ticketPrice: String {
        return ticket.getFormattedPrice()
    }
    
    var ticketQRCode: String {
        return ticket.qrCode
    }
    
    var ticketStatus: String {
        switch ticket.status {
        case .purchased:
            return "Active"
        case .used:
            return "Used"
        case .expired:
            return "Expired"
        case .refunded:
            return "Refunded"
        }
    }
}