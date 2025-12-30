//
//  QRCodeGenerator.swift
//  FOSSAsia
//
//  Created by Ace Ticket on 2025.
//  Copyright © 2025 Ace Ticket. All rights reserved.
//

import UIKit
import CoreImage

struct QRCodeGenerator {
    static func generate(from string: String) -> UIImage? {
        // Create CIFilter for QR code generation
        guard let data = string.data(using: .ascii),
              let filter = CIFilter(name: "CIQRCodeGenerator") else {
            return nil
        }
        
        // Set filter parameters
        filter.setValue(data, forKey: "inputMessage")
        filter.setValue("H", forKey: "inputCorrectionLevel")
        
        // Generate QR code
        guard let outputImage = filter.outputImage,
              let context = CIContext() else {
            return nil
        }
        
        // Convert CIImage to CGImage
        guard let cgImage = context.createCGImage(outputImage, from: outputImage.extent) else {
            return nil
        }
        
        // Create UIImage with proper scaling
        let scale = UIScreen.main.scale
        let scaledSize = CGSize(width: 200 * scale, height: 200 * scale)
        
        UIGraphicsBeginImageContextWithOptions(scaledSize, false, scale)
        defer { UIGraphicsEndImageContext() }
        
        let context = UIGraphicsGetCurrentContext()
        context?.scaleBy(x: scale, y: scale)
        
        // Draw QR code with white background
        UIColor.white.setFill()
        UIRectFill(CGRect(origin: .zero, size: scaledSize))
        
        // Draw QR code
        context?.draw(cgImage, in: CGRect(origin: .zero, size: scaledSize))
        
        return UIGraphicsGetImageFromCurrentImageContext()
    }
    
    // Generate a more detailed ticket QR code with additional info
    static func generateTicketQR(ticket: Ticket) -> UIImage? {
        let qrData = """
        TICKET:\(ticket.id)
        EVENT:\(ticket.eventTitle)
        DATE:\(ticket.getFormattedDate())
        SEAT:\(ticket.getSectionRowSeat())
        PRICE:\(ticket.getFormattedPrice())
        """
        return generate(from: qrData)
    }
    
    // Generate a simple string-based QR code for easy scanning
    static func generateSimpleQR(ticket: Ticket) -> UIImage? {
        return generate(from: ticket.qrCode)
    }
}