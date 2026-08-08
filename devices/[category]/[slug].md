---
title: Version Selection
---

<a class="back-link" href="/charts/">← Back to Compatibility Chart</a>

# Version Selection ({{ $params.name }})

<p class="device-lead">Different firmware versions will require different steps to bypass your iOS device. This page will help you find where to start. Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from 10.0 to 10.3.4" row includes version 10.0, version 10.3.4, and all versions in-between.</p>

<h2>{{ $params.name }}</h2>

<VersionTable :columns="$params.columns" :grid="$params.grid" :note="$params.note" />

<footer class="device-footer"><p>For educational purposes only. Respect ownership and legal restrictions.</p></footer>
