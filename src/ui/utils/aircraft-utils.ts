import { EAircraftStatus } from "@/lib/modules/aircraft/aircraft.types"

const mapAircraftStatusColor = (status: EAircraftStatus) => {
  switch (status) {
    case EAircraftStatus.aog:
      return {
        background: "bg-red-300",
        border: "border-red-500",
        text: "text-red-600",
      }
    case EAircraftStatus.available:
      return {
        background: "bg-green-300",
        border: "border-green-500",
        text: "text-green-600",
      }
    case EAircraftStatus.maintenance:
      return {
        background: "bg-yellow-300",
        border: "border-yellow-500",
        text: "text-yellow-600",
      }
  }
}
export { mapAircraftStatusColor }
