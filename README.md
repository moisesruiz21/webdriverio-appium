# webdriverio-appium

## Appium WebdriverIo helper installer 
npx appium-installer

## Run Appium Server 
appium --base-path /wd/hub --relaxed-security

## Run Emulator in Android Studio
adb devices

## Appium Inspector Capabilities
{
  "appium:deviceName": "Automation 1",
  "appium:automationName": "UIAutomator2",
  "appium:appPackage": "com.saucelabs.mydemoapp.android",
  "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.MainActivity",
  "platformName": "Android",
  "appium:platformVersion": "13",
  "appium:autoGrantPermissions": true,
  "appium:noReset": false,
  "appium:fullReset": false
}