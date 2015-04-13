cordova.define('cordova/plugin_list', function (require, exports, module) {
    module.exports = [
        {
            "file": "plugins/com.ionic.keyboard/www/keyboard.js",
            "id": "com.ionic.keyboard.keyboard",
            "clobbers": [
                "cordova.plugins.Keyboard"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.device/www/device.js",
            "id": "org.apache.cordova.device.device",
            "clobbers": [
                "device"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
            "id": "org.apache.cordova.splashscreen.SplashScreen",
            "clobbers": [
                "navigator.splashscreen"
            ]
        },
        {
            "file": "plugins/com.danielcwilson.plugins.googleanalytics/www/analytics.js",
            "id": "com.danielcwilson.plugins.googleanalytics.UniversalAnalytics",
            "clobbers": [
                "analytics"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
            "id": "org.apache.cordova.geolocation.GeoBroker",
            "clobbers": [
                "navigator.geolocation"
            ]
        },
        {
            "file": "plugins/com.plugin.datepicker/www/android/DatePicker.js",
            "id": "com.plugin.datepicker.DatePicker",
            "clobbers": [
                "datePicker"
            ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
        {
            "org.apache.cordova.console": "0.2.12",
            "org.apache.cordova.geolocation": "0.3.11",
            "com.ionic.keyboard": "1.0.4",
            "org.apache.cordova.device": "0.2.13",
            "org.apache.cordova.splashscreen": "0.3.5",
            "com.danielcwilson.plugins.googleanalytics": "0.6.1",
            "com.plugin.datepicker": "0.5.0"
        };
    // BOTTOM OF METADATA
});





