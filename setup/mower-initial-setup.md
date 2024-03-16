# Raspberry Pi
## System:
- Use the OS installer tool provided by Raspberry Pi. Please read the customizations listed below. This may require 1 to 2 restarts for the system to be ready but a monitor is strongly recommended.
1. RPi Formatter Tool: https://www.raspberrypi.com/software/
    - Device: Your device version.
    - Operating System: Click drop down > Scroll to Raspberry Pi OS (other) > Raspberry Pi OS Lite (64-bit).
    - Storage: Choose the correct storage target.
    - Click Next and make customizations by clicking "Edit Settings".
    - Customizations: Once you choose the target storage you can make changes to the installer.
    - Edit Settings: After completing the initial screen and clicking Next.
      - General tab: fill in desried values.
      - Services tab: Check box to "Enable SSH". I select "Use password authentication".
      - Options tab: Check box "Eject media when finished".
      - Click "Save" > Click "Yes" > Then "Yes" again to begin the process.
      - Click "Continue" once complete and close tool. 
    - Ensure RPi is off. Insert newly formatted memory card into RPi and plug in the power.
      - ** Note: Connect a network cable if you want to access the device over the network. 
2. Post OS install:
    - Run the following commands to make sure your system is fully up to date. 
      - ** Note: This will initiate a reboot once the RPi firmwareis updated. 
      ```
      sudo apt update
      sudo rpi-update
      ```    

### System Dependencies:
```
sudo apt install git screen
sudo modprobe w1-gpio
sudo modprobe w1-therm
reboot
```

### Node (Current v20.x): https://deb.nodesource.com/
```
sudo apt update && sudo apt-get install -y ca-certificates curl gnupg
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update && sudo apt-get install nodejs -y
```

# Arduino
- I prefer to use the Arduino Mega 2560 R3 but that may change over time to reduce cost especially if all the pins are not used and the unit can be built for less. The next steps will prepare your Arduino by installing the Firmata protocol library. A link to the original documentation is below.

- Original instructions: https://www.instructables.com/NodeJs-and-Arduino/

1. Download & Install Arduino IDE: https://www.arduino.cc/en/software
    - Select the correct version for your OS.
      - You can fill in your information if you choose but it is not required. 
    - Once installed and open connect your Arduino to your computer.
    - From drop down ("Select other board and port...") next to play button in the top left corner of window.
2. Upload Firmata: A board must be selected. 
    - File > Examples > Firmata > StandardFirmata. 
      - A window will appear with a premade sketch. 
    - Menu select "Sketch" > Upload
      - Allow sketch to be compiled and uploaded. Watch the Output section for progress.

## Software (this repository):
```
cd /opt
sudo git clone https://github.com/treestarsystems/gamr_v2.git
```
