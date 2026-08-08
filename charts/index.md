---
title: Compatibility Chart | iCloud Bypass Guide
description: Check iPhone, iPad, and iPod touch compatibility by iOS version.
---

<script setup>
import { iphone } from '../devices/data/iphone'
import { ipad } from '../devices/data/ipad'
import { ipadMini } from '../devices/data/ipad-mini'
import { ipadPro } from '../devices/data/ipad-pro'
import { ipadAir } from '../devices/data/ipad-air'
import { ipodTouch } from '../devices/data/ipod-touch'
</script>

# iDevice Compatibility Chart

<p class="chart-lead">A quick reference for the latest iOS or iPadOS version listed for each device. On 64-bit devices (iPhone 5s and later), compatibility mostly depends on the installed operating-system version.</p>

::: danger Before you continue
If you own the Apple Account connected to the device, you should try to [recover the password](https://support.apple.com/en-us/102656), [find your email](https://support.apple.com/en-us/102627), or [start an Activation Lock support request](https://al-support.apple.com/). iCloud-bypassed devices will always have issues with signal, along with other potential problems caused by the method of a bypass tool. Please try all official options before resorting to bypasses.
:::

<div class="chart-legend" aria-label="Chart legend">
  <div><span class="status status--latest">Latest</span><span>Works on the latest listed version.</span></div>
  <div><span class="status status--compatible">Compatible</span><span>Works on an older listed version.</span></div>
  <div><span class="status status--none">None</span><span>No compatible method is listed.</span></div>
</div>

::: tip Model variants
Have a Plus/Pro/Mini variant of a device and can't find a chart for it? Use the regular model!
:::

## iPhone {#iphone}

<CompatTable :devices="iphone" />

## iPad {#ipad}

<CompatTable :devices="ipad" unit="iPadOS" />

## iPad Mini {#ipad-mini}

<CompatTable :devices="ipadMini" unit="iPadOS" />

## iPad Pro {#ipad-pro}

<CompatTable :devices="ipadPro" unit="iPadOS" />

## iPad Air {#ipad-air}

<CompatTable :devices="ipadAir" unit="iPadOS" />

## iPod Touch {#ipod-touch}

<CompatTable :devices="ipodTouch" />

<footer class="chart-footer">For educational purposes only. Respect device ownership and local laws.</footer>
