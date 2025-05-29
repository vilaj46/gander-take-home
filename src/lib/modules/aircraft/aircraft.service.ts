import aircraftModel from "@/lib/modules/aircraft/aircraft.model"
import { EAircraftStatus, TAircraft } from "./aircraft.types"

const getAllAircraft = async () => {
  const aircraft = await aircraftModel.getAllAircraft()
  return aircraft
}

const updateAircraftStatus = async (
  id: TAircraft["tail_number"],
  status: EAircraftStatus
) => {
  const aircraft = await aircraftModel.updateAircraftStatus(id, status)
  return aircraft
}

const service = {
  getAllAircraft,
  updateAircraftStatus,
}

export default service
