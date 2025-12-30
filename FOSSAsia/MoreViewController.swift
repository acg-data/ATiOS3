//
//  MoreViewController.swift
//  FOSSAsia
//
//  Created by Jurvis Tan on 11/2/16.
//  Copyright © 2016 FossAsia. All rights reserved.
//

import UIKit
import SafariServices

private struct DefaultURLs {
    static let aceTicketWebsite = "https://www.aceticket.com/"
    static let aceTicketTwitter = "https://twitter.com/aceticket"
    static let aceTicketFacebook = "https://facebook.com/aceticket"
    static let aceTicketInstagram = "https://instagram.com/aceticket"
}

class MoreViewController: UITableViewController {

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        guard (indexPath as NSIndexPath).section == 0 else {
            return
        }

switch (indexPath as NSIndexPath).row {
        case 0:
            self.present(self.createSVC(DefaultURLs.aceTicketWebsite), animated: true, completion: nil)
            break
        case 1:
            self.present(self.createSVC(DefaultURLs.aceTicketTwitter), animated: true, completion: nil)
            break
        case 2:
            let alertController = UIAlertController(title: Constants.appStoreAlertTitle, message: Constants.appStoreAlertMessage, preferredStyle: .alert)
            let openAction = UIAlertAction(title: Constants.okTitle, style: .default, handler: { (action) -> Void in
                // Note: Will update with actual Ace Ticket App Store link when available
                let itunesLink = DefaultURLs.aceTicketFacebook
                if let url = URL(string: itunesLink) {
                UIApplication.shared.open(url, options: [:], completionHandler: nil)
                }
            })
            let cancelAction = UIAlertAction(title: Constants.cancelTitle, style: .cancel, handler: { (action) -> Void in
                // do nothing
            })
            alertController.addAction(openAction)
            alertController.addAction(cancelAction)
            self.present(alertController, animated: true, completion: { () -> Void in

            })

            break
        case 3:
            self.present(self.createSVC(DefaultURLs.aceTicketFacebook), animated: true, completion: nil)
            break
            
        case 5:
            let activityViewController : UIActivityViewController = UIActivityViewController(activityItems: [Constants.MoreViewController.message], applicationActivities: nil)
                
            activityViewController.setValue(Constants.MoreViewController.subject, forKey: Constants.MoreViewController.Title)
            // For overcoming the crash in iPad
            activityViewController.popoverPresentationController?.sourceView = self.view
            
            activityViewController.excludedActivityTypes = [
                UIActivityType.airDrop,
                UIActivityType.saveToCameraRoll,
                UIActivityType.openInIBooks,
                UIActivityType.copyToPasteboard ]
            self.present(activityViewController, animated: true, completion: nil)
            
            break
        default:
            break
        }
    }

    func createSVC(_ urlString: String) -> SFSafariViewController {
        return SFSafariViewController(url: URL(string: urlString)!)
    }
}
