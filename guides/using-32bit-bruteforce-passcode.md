---
title: Using 32bit-Bruteforce-Passcode
description: Using 32bit-Bruteforce-Passcode | iCloud Bypass Guide
---

# Using 32bit-Bruteforce-Passcode

Using 32bit-Bruteforce-Passcode is a universal way of bruteforcing 4-6 digit passcodes on 32-bit iOS devices. It is commonly used for easier entering into pwnDFU (kDFU) mode and app preservation.

::: info
Entering pwnDFU mode on A5(X) devices WILL require the use of <a href="misc/pwning-with-checkm8-a5">checkm8-a5</a>, which requires the use of a Raspberry Pi Pico or an Arduino with a USB host shield.
:::

## Requirements

- A computer running Linux or macOS.
- A copy of [Legacy-iOS-Kit](https://github.com/LukeZGD/Legacy-iOS-Kit/releases/tag/latest).
- A copy of [32bit-Bruteforce-Passcode](https://github.com/tuanemss/32bit-Bruteforce-Passcode/releases/tag/new/).

## Entering pwnDFU

1. Connect your device to your computer.
2. Extract `Legacy-iOS-Kit` to an easily accessible location on your computer.
3. Open a terminal window, navigate to the `Legacy-iOS-Kit` folder and run `./restore.sh`.

::: tip
No permission to run the file? Run `chmod +rwx restore.sh`.
:::

4. Navigate to `Other Utilities > Enter pwnDFU Mode`.
5. Follow on-screen instructions.

## Bruteforcing

1. Download and extract 32bit-Bruteforce-Passcode to an easily accessible location on your computer.
2. Open up terminal and run `./bruteforce.sh`.

::: tip
No permission to run the file? Run `chmod +rwx bruteforce.sh`.
:::

3. Your passcode should be displayed on screen after the script finishes.

## Rebooting

Reboot your device by either holding the power and home buttons for 10 seconds. Your device should now boot into the lock screen, where you can enter your bruteforced passcode.

<footer class="guide-footer"><p>For educational purposes only. Respect device ownership and local laws.</p></footer>
