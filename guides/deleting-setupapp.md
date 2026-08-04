---
title: Deleting Setup.app
description: Deleting Setup.app | iCloud Bypass Guide
---

# Deleting Setup.app

## Overview

Deleting Setup.app is an universal method to bypass activation on 32-bit iOS devices in case a specific device and iOS version combination is not supported by any other tool.

::: warning
It is strongly recommended to use any other method for bypassing activation, as deleting setup.app will break:
- iTunes syncing
- Siri
- Notifications
- and possibly iCloud sign-in.
:::

::: info
Entering pwnDFU mode on A5(X) devices WILL require the use of <a href="misc/pwning-with-checkm8-a5">checkm8-a5</a>, which require the use of a Raspberry Pi Pico or an Arduino with a USB host shield.
:::

## Requirements

A computer running Linux or macOS with the following installed:

- An SSH ramdisk creation and booting tool, like [Legacy-iOS-Kit](https://github.com/LukeZGD/Legacy-iOS-Kit) or [SSHRD_Script](https://github.com/verygenericname/SSHRD_Script)

## Creating a Ramdisk

Click one of the tools below to reveal the matching ramdisk creation instructions.

::: tip

You can find your iOS version by using [iDescriptor](https://github.com/iDescriptor/iDescriptor) (all platforms) or [Legacy-iOS-Kit](https://github.com/LukeZGD/Legacy-iOS-Kit) (Linux/macOS).

:::

::: details **Legacy-iOS-Kit** Instructions

- Download Legacy iOS Kit and extract the zip archive.
- Open a Terminal window.
- If on macOS, install Xcode Command Line Tools by running this command: `xcode-select --install`
- Connect your device to your computer.
- Go to where the extracted files are located, drag `restore.sh` to the Terminal window, and press Enter/Return.
- Go to Useful Utilities -> SSH Ramdisk
- Follow on-screen instructions to create and boot an SSH ramdisk.
- Once the device has booted the SSH ramdisk, select `Connect to SSH` in the terminal window.
- Finally, run `mount.sh` to mount the filesystems.

:::

::: details **SSHRD_Script** Instructions

- Clone the SSHRD_Script repository and enter it using the terminal: `git clone https://github.com/iPh0ne4s/SSHRD_Script --recursive`.
- Run `./sshrd.sh [iOS version for ramdisk]`.
- Run `./sshrd.sh boot` to boot the ramdisk.
- Run `./sshrd.sh ssh` to connect to SSH on your device.
- Mount the filesystems by running `mount_filesystems`.

:::


## Removing setup.app

In the SSH terminal, run these commands to mitigate `setup.app`:

::: details iOS 10.2.1 and lower

- `mv /mnt1/Applications/Setup.app /mnt1/Applications/Setup.app.bak`

:::

::: details iOS 10.3 and later

- `mv /mnt1/Applications/Setup.app /mnt1/Applications/Setup.app.bak`
- `/usr/sbin/nvram oblit-inprogress=5`

:::


### Rebooting

Reboot your device to apply the changes by either holding the power and home buttons for 10 seconds or running `/sbin/reboot`. Your device should now boot into the home screen.

<footer class="guide-footer"><p>For educational purposes only. Respect device ownership and local laws.</p></footer>
