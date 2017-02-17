# Cordova Plugin with Dynamsoft Barcode Reader for Android
================================

The plugin is based on https://github.com/phonegap/phonegap-plugin-barcodescanner. We replace ZXing with [Dynamsoft Barcode Reader SDK](http://www.dynamsoft.com/Products/barcode-scanner-sdk-android.aspx).

## Installation
1. Install **Cordova** vi **npm**:

    ```  
        npm install -g cordova
    ```

2. Download the source code and add the plugin via local path:

    ```
        cordova plugin add <local-path>/cordova-plugin-android-barcode
    ```

   Or, install the plugin via repo url directly:

    ```
        cordova plugin add https://github.com/dynamsoft-dbr/cordova-plugin-android-barcode.git
    ```


## Using the plugin ##
The plugin creates the object `cordova/plugin/BarcodeScanner` with the method `scan(success, fail)`.

The following barcode types are currently supported:

* Code 39
* Code 93
* Code 128
* Codabar
* EAN-8
* EAN-13
* UPC-A
* UPC-E
* Interleaved 2 of 5 (ITF)
* Industrial 2 of 5 (Code 2 of 5 Industry, Standard 2 of 5, Code 2 of 5)
* ITF-14 
* QRCode
* DataMatrix
* PDF417

`success` and `fail` are callback functions. Success is passed an object with data, type and cancelled properties. Data is the text representation of the barcode data, type is the type of barcode detected and cancelled is whether or not the user cancelled the scan.

## Example

**index.html**

```html
<body>
        <div class="app">
            <div id="deviceready">
                <button id="scan">scan barcode</button>
            </div>
        </div>
        <script type="text/javascript" src="cordova.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
    </body>
```

**index.js**

```js
   onDeviceReady: function() {
        document.getElementById("scan").onclick = function() {
                        cordova.plugins.barcodeScanner.scan(
                                                            function (result) {
                                                            alert("We got a barcode\n" +
                                                                  "Result: " + result.text + "\n" +
                                                                  "Format: " + result.format + "\n" +
                                                                  "Cancelled: " + result.cancelled);
                                                            },
                                                            function (error) {
                                                            alert("Scanning failed: " + error);
                                                            },
                                                            {
                                                            "preferFrontCamera" : false, // iOS and Android
                                                            "showFlipCameraButton" : true, // iOS and Android
                                                            }
                                                            );
                    }
        this.receivedEvent('deviceready');
    },
```

## Blog
[Cordova Plugin with Android AAR File for Barcode](http://www.codepool.biz/cordova-plugin-android-aar-barcode.html)

## Licence ##

The MIT License

Copyright (c) 2010 Matt Kane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
