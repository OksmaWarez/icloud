<script setup lang="ts">
import type { GridCell } from '../../../devices/data/types'

defineProps<{
  columns: string[]
  grid: GridCell[][]
  note?: string | null
}>()
</script>

<template>
  <h3 v-if="note">{{ note }}</h3>
  <table class="version-table">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in grid" :key="i">
        <template v-for="(cell, j) in row" :key="j">
          <td v-if="cell" :rowspan="cell.span > 1 ? cell.span : undefined">
            <span v-if="cell.html" v-html="cell.html"></span>
            <template v-else>-</template>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
