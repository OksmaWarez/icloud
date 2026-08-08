import { iphone } from '../data/iphone'
import { ipad } from '../data/ipad'
import { ipadMini } from '../data/ipad-mini'
import { ipadPro } from '../data/ipad-pro'
import { ipadAir } from '../data/ipad-air'
import { ipodTouch } from '../data/ipod-touch'
import type { Device } from '../data/types'

const allDevices: Device[] = [
  ...iphone,
  ...ipad,
  ...ipadMini,
  ...ipadPro,
  ...ipadAir,
  ...ipodTouch,
]

export default {
  paths() {
    return allDevices.map((device) => ({
      params: {
        category: device.category,
        slug: device.slug,
        name: device.name,
        note: device.note,
        columns: device.columns,
        grid: device.grid,
      },
    }))
  },
}
