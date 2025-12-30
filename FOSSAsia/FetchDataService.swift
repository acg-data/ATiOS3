//
//  FetchDataService.swift
//  FOSSAsia
//
//  Created by Pratik Todi on 27/02/16.
//  Copyright © 2016 FossAsia. All rights reserved.
//

import Foundation

struct FetchDataService {

    func fetchData(_ eventInfo: EventInfo, completionHandler: @escaping ApiRequestCompletionHandler) {
        // For Ace Ticket demo app, load from bundled data instead of network
        MockDataService.copyBundledDataToDocumentsIfNeeded()
        
        guard let data = MockDataService.loadBundledEvents() else {
            let error = Error(errorCode: .jsonSystemReadingFailed)
            completionHandler(nil, error)
            return
        }
        
        completionHandler(data, nil)
    }
}
