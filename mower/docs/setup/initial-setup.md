# Raspberry Pi
## System:
- This is simple and straight forward, Just use the OS installer tool provided by Raspberry Pi. Pay attention to the customizations listed below. This may require 2 to 3 restarts for the system to be ready. A monitor is strongly recommended.
1. RPi Formatter Tool: https://www.raspberrypi.com/software/
2. Customizations: Once you choose the target storage you can make changs to the installer.
  - Operating System: Click drop down > Scroll to Raspberry Pi OS (other) > Ubuntu Server XX.XX.X LTS (64-bit)
    - ** Note: If the LTS version is not compatible with your device choose the latest version of the 64-bit Server that is. No desktop is needed. 
    - ** Example: Device - RPi 4 / Selected OS - Ubuntu Server 22.04.4 LTS (64-bit)
  - Edit Settings: After completing the initial screen and clicking Next.
    - General tab: fill in desried values
    - Services tab: Check box to "Enable SSH". I select "Use password authentication"
    - Options tab: Check box "Eject media when finished"
    - Click "Save" > Click "Yes" > Then "Yes" again to begin the process.
    - Click "Continue" once complete and close tool. 
  - Ensure RPi is off. Insert newly formatted memory card into RPi and plug in the power.
    - ** Note: Connect a network cable if you want to access the device over the network. 
3. Post OS install:
  - Run the following commands to make sure your system is fully up to date. 
    - ** Note: This will initiate a reboot once the RPi firmwareis updated. 
  ```
  sudo -i
  apt update
  rpi-update
  ```    
## Node:

# Arduino
1. I prefer to use the Arduino Mega but that may change over time to reduce cost especially if all the pins are not used. The next steps will prepare your arduino by installing the Firmata protocol library. A link to the original doc is below.
- Original instructions:https://www.instructables.com/NodeJs-and-Arduino/
- Download & Install Arduino IDE: https://www.arduino.cc/en/software
  - Select the correct version for your OS. In my case it's macOS (Apple Silicon) version 2.3.2
    - You can fill in your information if you choose but it is not required. 
  - Once installed and open connect your Arduino to your computer.
  - From drop down ("Select other board and port...") next to play button in the top left corner of window.
- Upload Firmata: A board must be selected. 
  - File > Examples > Firmata > StandardFirmata. 
    - A window will appear with a premade sketch. 
  - Menu select "Sketch" > Upload
    - Allow sketch to be compiled and uploaded. Watch the Output section for progress.