//
//  MockDataService.swift
//  FOSSAsia
//
//  Created by Ace Ticket on 2025.
//  Copyright © 2025 Ace Ticket. All rights reserved.
//

import Foundation

struct MockDataService {
    
    // MARK: - Bundle Data Loading
    
    /// Loads the bundled events JSON file from the app bundle
    static func loadBundledEvents() -> Data? {
        guard let path = Bundle.main.path(forResource: "sessions", ofType: "json"),
              let data = try? Data(contentsOf: URL(fileURLWithPath: path)) else {
            print("Error: Could not load bundled sessions.json")
            return nil
        }
        return data
    }
    
    /// Loads the bundled tickets JSON file from the app bundle
    static func loadBundledTickets() -> Data? {
        guard let path = Bundle.main.path(forResource: "tickets", ofType: "json"),
              let data = try? Data(contentsOf: URL(fileURLWithPath: path)) else {
            print("Error: Could not load bundled tickets.json")
            return nil
        }
        return data
    }
    
    // MARK: - Local File Management
    
    /// Copies bundled JSON files to Documents directory if they don't exist
    /// This maintains compatibility with the existing file-based caching system
    static func copyBundledDataToDocumentsIfNeeded() {
        copyBundledFileIfNeeded(fileName: "sessions.json")
        copyBundledFileIfNeeded(fileName: "tickets.json")
    }
    
    /// Copies a single bundled file to Documents directory if it doesn't exist
    private static func copyBundledFileIfNeeded(fileName: String) {
        guard let documentsPath = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).first else {
            print("Error: Could not get Documents directory path")
            return
        }
        
        let destinationPath = (documentsPath as NSString).appendingPathComponent(fileName)
        let fileManager = FileManager.default
        
        // Check if file already exists in Documents
        if fileManager.fileExists(atPath: destinationPath) {
            return
        }
        
        // Copy from bundle to Documents
        guard let bundlePath = Bundle.main.path(forResource: (fileName as NSString).deletingPathExtension, ofType: (fileName as NSString).pathExtension) else {
            print("Error: Could not find bundled file: \(fileName)")
            return
        }
        
        do {
            try fileManager.copyItem(atPath: bundlePath, toPath: destinationPath)
            print("Successfully copied \(fileName) to Documents directory")
        } catch {
            print("Error copying \(fileName) to Documents directory: \(error)")
        }
    }
    
    // MARK: - Data Validation
    
    /// Validates that the bundled events data is properly formatted
    static func validateEventsData() -> Bool {
        guard let eventsData = loadBundledEvents() else {
            print("Error: No events data found")
            return false
        }
        
        do {
            let json = try JSONSerialization.jsonObject(with: eventsData, options: [])
            guard let dict = json as? [String: Any],
                  let sessions = dict["sessions"] as? [[String: Any]] else {
                print("Error: Invalid events JSON structure")
                return false
            }
            
            print("Valid events data found with \(sessions.count) events")
            return true
        } catch {
            print("Error: Invalid JSON format - \(error)")
            return false
        }
    }
    
    /// Validates that the bundled tickets data is properly formatted
    static func validateTicketsData() -> Bool {
        guard let ticketsData = loadBundledTickets() else {
            print("Error: No tickets data found")
            return false
        }
        
        do {
            let json = try JSONSerialization.jsonObject(with: ticketsData, options: [])
            guard let ticketsArray = json as? [[String: Any]] else {
                print("Error: Invalid tickets JSON structure")
                return false
            }
            
            print("Valid tickets data found with \(ticketsArray.count) tickets")
            return true
        } catch {
            print("Error: Invalid JSON format - \(error)")
            return false
        }
    }
}