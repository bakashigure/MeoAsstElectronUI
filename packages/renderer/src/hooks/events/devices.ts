import useDeviceStore from '@/store/devices'
import type { NativeDevice, DeviceStatus } from '@type/device'

export default function useDeviceEvents(): void {
  const deviceStore = useDeviceStore()

  window.renderer.DeviceDetector = {
    searched(devices) {
      deviceStore.mergeSearchResult(devices)
    },
    changeStatus(uuid, status) {
      deviceStore.updateDeviceStatus(uuid, status)
    },
  }
}
