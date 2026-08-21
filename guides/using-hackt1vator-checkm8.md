---
title: Using Hackt1vator (checkm8)
description: Using Hackt1vator (checkm8) | iCloud Bypass Guide
---

# Using Hackt1vator (checkm8)

Hackt1vator is an untethered bypass tool for Checkm8-compatible devices and A12+ devices up to iOS 26.1.

## Requirements

- A computer running Windows or macOS with [Hackt1vator](https://hackt1vator.com/downloads/) installed.
- A 128MB or greater USB Drive. (Only for Windows)
  - If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. an SD card or DVD), you can use that instead of a USB Drive.
- The latest version of [palen1x](https://github.com/palera1n/palen1x/releases). (Only for Windows)
- [Ventoy](https://github.com/ventoy/Ventoy/releases). (Only for Windows)

## Jailbreaking (Windows)

1. Download and extract the contents of the `ventoy-x.x.x-windows.zip` file.
2. Insert your USB drive if you have not already done so, and open the `Ventoy2Disk.exe` file.
3. Select the USB drive you would like to boot palen1x from.
    - **This USB drive will be completely erased. Ensure you back up all important data beforehand!**
4. Click `Install` and confirm that you are okay with erasing the USB drive.
    - Do not remove your USB Drive until the process has completed.
5. Once it has installed, copy the palen1x iso file that you downloaded onto the USB drive.
6. Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from.
  - This is different for every computer. Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure.
7. Press enter once you see the Ventoy screen to boot into palen1x.
8. Once you have loaded palen1x, select `Shell`.
9. Type `palera1n -l`.
10. Follow the on screen instructions to enter DFU mode.

## Jailbreaking (macOS)

1. Open up a Terminal window.
2. Run `/bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"`
3. It should prompt you to install Palera1n, press enter.
4. Run `palera1n -l` in terminal.
5. Follow the on screen instructions to enter DFU mode.

## Running Hackt1vator

1. Download and extract Hackt1vator to an easily accessible location on your computer.
2. Run your platform's equivalent of `Hackt1vator`.
3. Connect your device to your computer using a USB cable.
4. Join the [Hackt1vator Discord Server](https://discord.com/servers/hackt1vator-1116502617510641676) and register your device in the register channel.
5. In the Activation tab, click `Hello Activation 12-18`.
6. Wait for the device to activate.

<footer class="guide-footer"><p>For educational purposes only. Respect device ownership and local laws.</p></footer>
