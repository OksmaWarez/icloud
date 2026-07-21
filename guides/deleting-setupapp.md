---
title: Deleting Setup.app | iCloud Bypass Guide
description: Deleting Setup.app | iCloud Bypass Guide
---

# Deleting Setup.app

## Overview

Deleting Setup.app is an universal method to bypass activation on 32-bit iOS devices in case a specific device and iOS version combination is not supported by any other tool.

**Warning:** It is strongly recommended to use any other method for bypassing activation, as deleting setup.app will break:

- iTunes syncing

- Siri

- Notifications

- and possibly iCloud sign-in.

## Prerequisites

### What You'll Need

A computer running Linux or macOS with the following installed:

- An SSH ramdisk creation and booting tool, like [Legacy-iOS-Kit](https://github.com/LukeZGD/Legacy-iOS-Kit) or [SSHRD_Script](https://github.com/verygenericname/SSHRD_Script)

## Step-by-Step Guide

### Step 1: Ramdisk creation

Click one of the tools below to reveal the matching ramdisk creation instructions.


::: details **Legacy-iOS-Kit** Instructions

- Download Legacy iOS Kit and extract the zip archive.

- Open a Terminal window.

- If on macOS, install Xcode Command Line Tools by running this command: `xcode-select --install`

- Connect your device to your computer.

- Go to where the extracted files are located, drag `restore.sh` to the Terminal window, and press Enter/Return.

- Go to Useful Utilities -> SSH Ramdisk

- Follow on-screen instructions to create and boot an SSH ramdisk.

**Info:** You can find your iOS version by using [iDescriptor](https://github.com/iDescriptor/iDescriptor) (all platforms) or [Legacy-iOS-Kit](https://github.com/LukeZGD/Legacy-iOS-Kit) (Linux/macOS)

**Warning:** A5 devices will require the use of `checkm8-a5` to enter pwnDFU mode.

- Once the device has booted the SSH ramdisk, select `Connect to SSH` in the terminal window.

- Finally, run `mount.sh` to mount the filesystems.

:::

::: details **SSHRD_Script** Instructions

- Clone the SSHRD_Script repository and enter it using the terminal: `git clone https://github.com/verygenericname/SSHRD_Script --recursive && cd SSHRD_Script`.

- Run `./sshrd.sh [iOS version for ramdisk]`.

**Info:** You can find your iOS version by using [iDescriptor](https://github.com/iDescriptor/iDescriptor) (all platforms) or [Legacy-iOS-Kit](https://github.com/LukeZGD/Legacy-iOS-Kit) (Linux/macOS)

- Run `./sshrd.sh boot` to boot the ramdisk.

- Run `./sshrd.sh ssh` to connect to SSH on your device.

- Mount the filesystems by running `mount_filesystems`.

:::

### Step 2: Remove setup.app

In the SSH terminal, run this command to rename setup.app:

- `mv /mnt1/Applications/Setup.app /mnt1/Applications/Setup.app.bak`

### Step 3: Reboot

Reboot your device to apply the changes by either holding the power and home buttons for 10 seconds or running `/sbin/reboot`. Your device should now boot into the home screen.

<footer class="guide-footer"><p>For educational purposes only. Respect device ownership and local laws.</p></footer>
