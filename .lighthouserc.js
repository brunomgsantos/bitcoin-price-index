const puppeteer = require("puppeteer");

module.exports = {
    "ci": {
        "collect": {
            "chromePath": puppeteer.executablePath(),
            "headful": false,
            "numberOfRuns": 1,
            "url": ["https://www.google.com"],
            "settings": {
                "logLevel": "info",
                "chromeFlags": "--no-sandbox --disable-setuid-sandbox --headless"
            }
        },
        "upload": {
            "token": "8beaf5c2-ec76-4178-8f1f-e0236fdb3b0e",
            "serverBaseUrl": "https://lhci-server.sct.dev.betfair/"
        }
    }
}
