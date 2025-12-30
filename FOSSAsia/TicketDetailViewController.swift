//
//  TicketDetailViewController.swift
//  FOSSAsia
//
//  Created by Ace Ticket on 2025.
//  Copyright © 2025 Ace Ticket. All rights reserved.
//

import UIKit

class TicketDetailViewController: UIViewController {
    
    // MARK: - Properties
    private let ticket: Ticket
    private let viewModel: TicketViewModel
    
    // MARK: - UI Elements
    private let scrollView: UIScrollView = {
        let scrollView = UIScrollView()
        scrollView.translatesAutoresizingMaskIntoConstraints = false
        scrollView.backgroundColor = .white
        return scrollView
    }()
    
    private let contentView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    // Header section
    private let eventImageView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = UIColor(hexString: "E3F2FD")
        view.layer.cornerRadius = 8
        view.layer.masksToBounds = true
        return view
    }()
    
    private let eventTitleLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 24, weight: .bold)
        label.textColor = UIColor(hexString: "212121")
        label.numberOfLines = 0
        return label
    }()
    
    private let venueLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 16, weight: .medium)
        label.textColor = UIColor(hexString: "757575")
        return label
    }()
    
    private let dateLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 16, weight: .medium)
        label.textColor = UIColor(hexString: "757575")
        return label
    }()
    
    // Ticket info section
    private let ticketInfoView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = .white
        view.layer.cornerRadius = 8
        view.layer.borderWidth = 1
        view.layer.borderColor = UIColor(hexString: "E0E0E0").cgColor
        return view
    }()
    
    private let sectionLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 18, weight: .bold)
        label.textColor = UIColor(hexString: "212121")
        label.text = "Ticket Information"
        return label
    }()
    
    private let sectionRowSeatLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 16, weight: .medium)
        label.textColor = UIColor(hexString: "212121")
        label.backgroundColor = UIColor(hexString: "E3F2FD")
        label.layer.cornerRadius = 4
        label.layer.masksToBounds = true
        label.textAlignment = .center
        return label
    }()
    
    private let priceLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 16, weight: .bold)
        label.textColor = UIColor(hexString: "1565C0")
        return label
    }()
    
    private let statusLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 16, weight: .medium)
        label.textColor = UIColor(hexString: "2E7D32") // Green for active
        label.textAlignment = .right
        return label
    }()
    
    // QR Code section
    private let qrCodeView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = .white
        view.layer.cornerRadius = 8
        view.layer.borderWidth = 1
        view.layer.borderColor = UIColor(hexString: "E0E0E0").cgColor
        return view
    }()
    
    private let qrCodeTitleLabel: UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.font = UIFont.systemFont(ofSize: 18, weight: .bold)
        label.textColor = UIColor(hexString: "212121")
        label.text = "Scan at Venue"
        return label
    }()
    
    private let qrCodeImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.translatesAutoresizingMaskIntoConstraints = false
        imageView.contentMode = .scaleAspectFit
        imageView.backgroundColor = .white
        imageView.layer.cornerRadius = 8
        imageView.layer.masksToBounds = true
        return imageView
    }()
    
    // MARK: - Initialization
    init(ticket: Ticket) {
        self.ticket = ticket
        self.viewModel = TicketViewModel(ticket)
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // MARK: - Lifecycle
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        setupData()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.parent?.navigationItem.title = "Ticket Details"
    }
    
    // MARK: - Setup
    private func setupUI() {
        view.backgroundColor = UIColor(hexString: "FFFFFF")
        title = "Ticket Details"
        
        // Setup navigation
        navigationController?.navigationBar.prefersLargeTitles = false
        navigationItem.largeTitleDisplayMode = .never
        
        // Add scroll view
        view.addSubview(scrollView)
        scrollView.addSubview(contentView)
        
        // Header section
        contentView.addSubview(eventImageView)
        eventImageView.addSubview(eventTitleLabel)
        eventImageView.addSubview(venueLabel)
        eventImageView.addSubview(dateLabel)
        
        // Ticket info section
        contentView.addSubview(ticketInfoView)
        ticketInfoView.addSubview(sectionLabel)
        ticketInfoView.addSubview(sectionRowSeatLabel)
        ticketInfoView.addSubview(priceLabel)
        ticketInfoView.addSubview(statusLabel)
        
        // QR Code section
        contentView.addSubview(qrCodeView)
        qrCodeView.addSubview(qrCodeTitleLabel)
        qrCodeView.addSubview(qrCodeImageView)
        
        // Setup constraints
        setupConstraints()
    }
    
    private func setupConstraints() {
        // Scroll view constraints
        NSLayoutConstraint.activate([
            scrollView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            scrollView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            scrollView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            scrollView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        
        // Content view constraints
        NSLayoutConstraint.activate([
            contentView.topAnchor.constraint(equalTo: scrollView.topAnchor),
            contentView.leadingAnchor.constraint(equalTo: scrollView.leadingAnchor),
            contentView.trailingAnchor.constraint(equalTo: scrollView.trailingAnchor),
            contentView.bottomAnchor.constraint(equalTo: scrollView.bottomAnchor),
            contentView.widthAnchor.constraint(equalTo: scrollView.widthAnchor)
        ])
        
        // Header section constraints
        NSLayoutConstraint.activate([
            eventImageView.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 16),
            eventImageView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            eventImageView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            eventImageView.heightAnchor.constraint(equalToConstant: 120),
            
            eventTitleLabel.topAnchor.constraint(equalTo: eventImageView.topAnchor, constant: 16),
            eventTitleLabel.leadingAnchor.constraint(equalTo: eventImageView.leadingAnchor, constant: 16),
            eventTitleLabel.trailingAnchor.constraint(equalTo: eventImageView.trailingAnchor, constant: -16),
            
            venueLabel.topAnchor.constraint(equalTo: eventTitleLabel.bottomAnchor, constant: 4),
            venueLabel.leadingAnchor.constraint(equalTo: eventImageView.leadingAnchor, constant: 16),
            venueLabel.trailingAnchor.constraint(lessThanOrEqualTo: dateLabel.leadingAnchor, constant: -8),
            
            dateLabel.topAnchor.constraint(equalTo: eventTitleLabel.bottomAnchor, constant: 4),
            dateLabel.trailingAnchor.constraint(equalTo: eventImageView.trailingAnchor, constant: -16),
            dateLabel.leadingAnchor.greaterThanOrEqualTo(venueLabel.trailingAnchor, constant: 8)
        ])
        
        // Ticket info section constraints
        NSLayoutConstraint.activate([
            ticketInfoView.topAnchor.constraint(equalTo: eventImageView.bottomAnchor, constant: 16),
            ticketInfoView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            ticketInfoView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            ticketInfoView.heightAnchor.constraint(equalToConstant: 120),
            
            sectionLabel.topAnchor.constraint(equalTo: ticketInfoView.topAnchor, constant: 16),
            sectionLabel.leadingAnchor.constraint(equalTo: ticketInfoView.leadingAnchor, constant: 16),
            sectionLabel.trailingAnchor.constraint(equalTo: ticketInfoView.trailingAnchor, constant: -16),
            
            sectionRowSeatLabel.topAnchor.constraint(equalTo: sectionLabel.bottomAnchor, constant: 12),
            sectionRowSeatLabel.leadingAnchor.constraint(equalTo: ticketInfoView.leadingAnchor, constant: 16),
            sectionRowSeatLabel.trailingAnchor.constraint(equalTo: ticketInfoView.trailingAnchor, constant: -16),
            sectionRowSeatLabel.heightAnchor.constraint(equalToConstant: 32),
            
            priceLabel.topAnchor.constraint(equalTo: sectionRowSeatLabel.bottomAnchor, constant: 12),
            priceLabel.leadingAnchor.constraint(equalTo: ticketInfoView.leadingAnchor, constant: 16),
            
            statusLabel.topAnchor.constraint(equalTo: sectionRowSeatLabel.bottomAnchor, constant: 12),
            statusLabel.trailingAnchor.constraint(equalTo: ticketInfoView.trailingAnchor, constant: -16)
        ])
        
        // QR Code section constraints
        NSLayoutConstraint.activate([
            qrCodeView.topAnchor.constraint(equalTo: ticketInfoView.bottomAnchor, constant: 16),
            qrCodeView.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            qrCodeView.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            qrCodeView.heightAnchor.constraint(equalToConstant: 280),
            qrCodeView.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -16),
            
            qrCodeTitleLabel.topAnchor.constraint(equalTo: qrCodeView.topAnchor, constant: 16),
            qrCodeTitleLabel.leadingAnchor.constraint(equalTo: qrCodeView.leadingAnchor, constant: 16),
            qrCodeTitleLabel.trailingAnchor.constraint(equalTo: qrCodeView.trailingAnchor, constant: -16),
            
            qrCodeImageView.topAnchor.constraint(equalTo: qrCodeTitleLabel.bottomAnchor, constant: 16),
            qrCodeImageView.leadingAnchor.constraint(equalTo: qrCodeView.leadingAnchor, constant: 16),
            qrCodeImageView.trailingAnchor.constraint(equalTo: qrCodeView.trailingAnchor, constant: -16),
            qrCodeImageView.bottomAnchor.constraint(equalTo: qrCodeView.bottomAnchor, constant: -16)
        ])
    }
    
    private func setupData() {
        // Header data
        eventTitleLabel.text = viewModel.ticketTitle
        venueLabel.text = viewModel.ticketVenue
        dateLabel.text = viewModel.ticketDate
        
        // Ticket info data
        sectionRowSeatLabel.text = viewModel.ticketSection
        priceLabel.text = "Price: \(viewModel.ticketPrice)"
        
        // Status styling
        statusLabel.text = "Status: \(viewModel.ticketStatus)"
        switch ticket.status {
        case .purchased:
            statusLabel.textColor = UIColor(hexString: "2E7D32") // Green
        case .used:
            statusLabel.textColor = UIColor(hexString: "E53935") // Red
        case .expired:
            statusLabel.textColor = UIColor(hexString: "757575") // Gray
        case .refunded:
            statusLabel.textColor = UIColor(hexString: "FF6F00") // Orange
        }
        
        // QR Code data
        if let qrImage = QRCodeGenerator.generateTicketQR(ticket: ticket) {
            qrCodeImageView.image = qrImage
        } else {
            qrCodeImageView.backgroundColor = UIColor(hexString: "E0E0E0")
            qrCodeImageView.image = nil
        }
    }
}