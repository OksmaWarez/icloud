<script setup lang="ts">
import type { Device } from '../../../devices/data/types'

defineProps<{
  devices: Device[]
  /** Column header unit, defaults to "iOS" (pass "iPadOS" for iPad categories) */
  unit?: string
}>()
</script>

<template>
  <table class="compat-table">
    <thead>
      <tr>
        <th>Model</th>
        <th>Latest bypassable {{ unit || 'iOS' }} version</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d in devices" :key="d.slug">
        <td><a :href="`/devices/${d.category}/${d.slug}`">{{ d.name }}</a></td>
        <td><span :class="`status status--${d.status}`">{{ d.version }}</span></td>
      </tr>
    </tbody>
  </table>
</template>
