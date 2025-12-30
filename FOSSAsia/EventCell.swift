//
//  EventCell.swift
//  FOSSAsia
//
//  Created by Jurvis Tan on 29/1/16.
//  Copyright © 2016 FossAsia. All rights reserved.
//

import UIKit
import MGSwipeTableCell

typealias EventCellWithTypePresentable = EventTypePresentable & EventDetailsPresentable & EventAddToCalendarPresentable

class EventCell: MGSwipeTableCell {
    @IBOutlet weak var favoriteImage: UIImageView!
    @IBOutlet weak var typeView: UIView!
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var timingLabel: UILabel!
    @IBOutlet weak var priceLabel: UILabel!
    @IBOutlet weak var venueLabel: UILabel!

    fileprivate var viewModel: EventCellWithTypePresentable?

    func configure(withPresenter presenter: EventCellWithTypePresentable) {
        viewModel = presenter
        titleLabel.text = viewModel!.eventName
        typeView.backgroundColor = viewModel!.typeColor
        timingLabel.text = viewModel!.timing
        
        // Extract venue from timing (assuming format: "HH:mm - HH:mm - Venue")
        let timingParts = viewModel!.timing.components(separatedBy: " - ")
        if timingParts.count >= 3 {
            venueLabel.text = timingParts[2]
        } else {
            venueLabel.text = "Location: " + viewModel!.timing
        }
        
        // Set price label (dummy price for now)
        let category = viewModel!.eventName.contains("Red Sox") ? "Baseball" : "Event"
        let basePrice = category == "Baseball" ? 75 : 50
        let formatter = NumberFormatter()
        formatter.numberStyle = .currency
        formatter.currencySymbol = "$"
        let priceString = formatter.string(from: NSNumber(value: basePrice)) ?? "$\(basePrice)"
        priceLabel.text = "From \(priceString)"
        
        // Styling for Ace Ticket
        priceLabel.backgroundColor = UIColor(hexString: "E3F2FD")
        priceLabel.layer.cornerRadius = 4
        priceLabel.layer.masksToBounds = true
        priceLabel.textColor = UIColor(hexString: "1565C0")
        priceLabel.font = UIFont.systemFont(ofSize: 14, weight: .bold)
        
        // Venue styling
        venueLabel.textColor = UIColor(hexString: "757575")
        venueLabel.font = UIFont.systemFont(ofSize: 12, weight: .regular)
        
        // Title styling
        titleLabel.textColor = UIColor(hexString: "212121")
        titleLabel.font = UIFont.systemFont(ofSize: 16, weight: .medium)
        
        // Timing styling
        timingLabel.textColor = UIColor(hexString: "757575")
        timingLabel.font = UIFont.systemFont(ofSize: 14, weight: .regular)

        if (viewModel!.isFavorite) {
            favoriteImage.transform = CGAffineTransform.identity
            favoriteImage.alpha = 1.0
        } else {
            favoriteImage.transform = CGAffineTransform(scaleX: 0.1, y: 0.1)
            favoriteImage.alpha = 0.0
        }
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        let color = typeView.backgroundColor
        super.setSelected(selected, animated: animated)

        if selected {
            typeView.backgroundColor = color
            self.contentView.backgroundColor = Colors.highlightedBackgroundColor
        }
    }

    override func setHighlighted(_ highlighted: Bool, animated: Bool) {
        let color = typeView.backgroundColor
        super.setHighlighted(highlighted, animated: animated)

        if highlighted {
            typeView.backgroundColor = color

            self.contentView.backgroundColor = Colors.highlightedBackgroundColor
        }
    }

}
