import { EAircraftStatus } from "@/lib/modules/aircraft/aircraft.types"
import { mapAircraftStatusColor } from "@/ui/utils/aircraft-utils"

type TAircraftStatusOption = {
  status: EAircraftStatus
}

const AircraftStatusOption = ({ status }: TAircraftStatusOption) => {
  const color = mapAircraftStatusColor(status)
  return (
    <div className="flex flex-row gap-4 items-center">
      <span className={`block w-3 h-3 rounded-full ${color.background}`} />
      <span>{status.toUpperCase()}</span>
    </div>
  )
}

export default AircraftStatusOption
