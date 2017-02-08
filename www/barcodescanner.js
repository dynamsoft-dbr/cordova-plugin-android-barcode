var exec = cordova.require("cordova/exec");

var scanInProgress = false;

/**
 * Constructor.
 *
 * @returns {BarcodeScanner}
 */
function BarcodeScanner() {

}

/**
 * Read code from scanner.
 *
 * @param {Function} successCallback This function will recieve a result object: {
 *        text : '12345-mock',    // The code that was scanned.
 *        format : 'FORMAT_NAME', // Code format.
 *        cancelled : true/false, // Was canceled.
 *    }
 * @param {Function} errorCallback
 * @param config
 */
BarcodeScanner.prototype.scan = function(successCallback, errorCallback, config) {

    if (config instanceof Array) {
        // do nothing
    } else {
        if (typeof(config) === 'object') {
            config = [config];
        } else {
            config = [];
        }
    }

    if (errorCallback == null) {
        errorCallback = function() {};
    }

    if (typeof errorCallback != "function") {
        console.log("BarcodeScanner.scan failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("BarcodeScanner.scan failure: success callback parameter must be a function");
        return;
    }

    if (scanInProgress) {
        errorCallback('Scan is already in progress');
        return;
    }

    scanInProgress = true;

    exec(
        function(result) {
            scanInProgress = false;
            successCallback(result);
        },
        function(error) {
            scanInProgress = false;
            errorCallback(error);
        },
        'BarcodeScanner',
        'scan',
        config
    );
};

var barcodeScanner = new BarcodeScanner();
module.exports = barcodeScanner;