//
//  MyTicketsViewController.swift
//  FOSSAsia
//
//  Created by Ace Ticket on 2025.
//  Copyright © 2025 Ace Ticket. All rights reserved.
//

import UIKit
import Foundation

class MyTicketsViewController: UIViewController {
    
    // MARK: - Properties
    private var tickets: [Ticket] = []
    private var ticketViewModels: [TicketViewModel] = []
    
    // MARK: - UI Elements
    private let tableView: UITableView = {
        let tableView = UITableView()
        tableView.translatesAutoresizingMaskIntoConstraints = false
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "TicketCell")
        tableView.backgroundColor = .white
        return tableView
    }()
    
    private let emptyStateView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.text = "No tickets yet.\nBrowse events to find your next experience!"
        label.textAlignment = .center
        label.textColor = UIColor(hexString: "757575")
        label.font = UIFont.systemFont(ofSize: 16, weight: .regular)
        label.numberOfLines = 0
        
        view.addSubview(label)
        
        NSLayoutConstraint.activate([
            label.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            label.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            label.leadingAnchor.constraint(greaterThanOrEqualTo: view.leadingAnchor, constant: 20),
            label.trailingAnchor.constraint(lessThanOrEqualTo: view.trailingAnchor, constant: -20)
        ])
        
        return view
    }()
    
    // MARK: - Lifecycle
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        loadTickets()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        self.parent?.navigationItem.title = "My Tickets"
    }
    
    // MARK: - Setup
    private func setupUI() {
        view.backgroundColor = .white
        title = "My Tickets"
        
        // Add table view
        view.addSubview(tableView)
        
        // Add empty state view
        view.addSubview(emptyStateView)
        
        // Setup constraints
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            
            emptyStateView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            emptyStateView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            emptyStateView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            emptyStateView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        
        // Configure table view
        tableView.delegate = self
        tableView.dataSource = self
        tableView.separatorStyle = .singleLine
        tableView.separatorColor = UIColor(hexString: "E0E0E0")
        
        // Configure navigation
        navigationController?.navigationBar.prefersLargeTitles = true
    }
    
    // MARK: - Data Loading
    private func loadTickets() {
        guard let ticketsData = MockDataService.loadBundledTickets() else {
            showEmptyState()
            return
        }
        
        do {
            let json = try JSONSerialization.jsonObject(with: ticketsData, options: [])
            guard let ticketsArray = json as? [[String: Any]] else {
                showEmptyState()
                return
            }
            
            var loadedTickets: [Ticket] = []
            for ticketDict in ticketsArray {
                do {
                    let ticket = try Ticket(fromDictionary: ticketDict)
                    loadedTickets.append(ticket)
                } catch {
                    print("Error parsing ticket: \(error)")
                }
            }
            
            self.tickets = loadedTickets
            self.ticketViewModels = loadedTickets.map { TicketViewModel($0) }
            
            updateUI()
            
        } catch {
            print("Error loading tickets: \(error)")
            showEmptyState()
        }
    }
    
    private func updateUI() {
        if ticketViewModels.isEmpty {
            showEmptyState()
        } else {
            hideEmptyState()
            tableView.reloadData()
        }
    }
    
    private func showEmptyState() {
        emptyStateView.isHidden = false
        tableView.isHidden = true
    }
    
    private func hideEmptyState() {
        emptyStateView.isHidden = true
        tableView.isHidden = false
    }
}

// MARK: - UITableViewDataSource
extension MyTicketsViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return ticketViewModels.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "TicketCell", for: indexPath)
        cell.accessoryType = .disclosureIndicator
        
        let viewModel = ticketViewModels[indexPath.row]
        
        // Configure cell content
        cell.textLabel?.text = viewModel.ticketTitle
        cell.textLabel?.font = UIFont.systemFont(ofSize: 16, weight: .medium)
        cell.textLabel?.textColor = UIColor(hexString: "212121")
        
        let subtitle = "\(viewModel.ticketVenue) • \(viewModel.ticketDate)"
        cell.detailTextLabel?.text = subtitle
        cell.detailTextLabel?.font = UIFont.systemFont(ofSize: 14, weight: .regular)
        cell.detailTextLabel?.textColor = UIColor(hexString: "757575")
        
        // Add price badge
        let priceLabel = UILabel()
        priceLabel.text = viewModel.ticketPrice
        priceLabel.font = UIFont.systemFont(ofSize: 14, weight: .bold)
        priceLabel.textColor = UIColor(hexString: "1565C0")
        priceLabel.backgroundColor = UIColor(hexString: "E3F2FD")
        priceLabel.layer.cornerRadius = 4
        priceLabel.layer.masksToBounds = true
        priceLabel.translatesAutoresizingMaskIntoConstraints = false
        priceLabel.textAlignment = .center
        priceLabel.widthAnchor.constraint(equalToConstant: 60).isActive = true
        priceLabel.heightAnchor.constraint(equalToConstant: 24).isActive = true
        
        cell.contentView.addSubview(priceLabel)
        
        NSLayoutConstraint.activate([
            priceLabel.trailingAnchor.constraint(equalTo: cell.trailingAnchor, constant: -16),
            priceLabel.centerYAnchor.constraint(equalTo: cell.centerYAnchor)
        ])
        
        return cell
    }
}

// MARK: - UITableViewDelegate
extension MyTicketsViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        
        let ticket = tickets[indexPath.row]
        
        // Navigate to ticket detail
        let detailVC = TicketDetailViewController(ticket: ticket)
        navigationController?.pushViewController(detailVC, animated: true)
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 60
    }
}