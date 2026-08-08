---
title: Using lockdownd Hacktivation
description: Using lockdownd Hacktivation | iCloud Bypass Guide
---

# Using lockdownd Hacktivation

Using `lockdownd` Hacktivation is a method of bypassing iCloud lock on jailbroken iOS devices that were downgraded to iOS 5-6.

## Requirements

- A computer running Linux or macOS.
- A copy of [Legacy-iOS-Kit](https://github.com/LukeZGD/Legacy-iOS-Kit).
- An SFTP client like [WinSCP](https://winscp.net/eng/index.php) or [Filezilla](https://filezilla-project.org/).
- A copy of the [patched `lockdownd` file](https://github.com/overcast302/legacy-lockdownd-patch/raw/refs/heads/main/lockdownd_patched).

## Booting an SSH Ramdisk

- Download Legacy iOS Kit and extract the zip archive.
- Open a Terminal window.
- If on macOS, install Xcode Command Line Tools by running this command: `xcode-select --install`
- Connect your device to your computer.
- Go to where the extracted files are located, drag `restore.sh` to the Terminal window, and press Enter/Return.
- Go to Useful Utilities -> Enter kDFU
- When prompted for a password, enter `alpine`.
- Go to Useful Utilities -> SSH Ramdisk
- Follow on-screen instructions to create and boot an SSH ramdisk.
- Once the device has booted the SSH ramdisk, select `Connect to SSH` in the terminal window.
- Finally, run `mount.sh` to mount the filesystems.

## Replacing lockdownd

- Open your preferred SFTP client and connect to your device with these credentials:
  - Hostname: `127.0.0.1`
  - Port: `6414`
  - Username: `root`
  - Password: `alpine`
- Navigate to `/mnt1/usr/libexec/`.
- Delete the `lockdownd` file.
- Upload the patched `lockdownd` file.
- Back to the SSH terminal, run `chmod 0755 /mnt1/usr/libexec/lockdownd`.

### Rebooting

Reboot your device to apply the changes by either holding the power and home buttons for 10 seconds or running `reboot_bak`. Your device should now boot into the home screen.

<footer class="guide-footer"><p>For educational purposes only. Respect device ownership and local laws.</p></footer>
