"use client"

import {
  useGetAircrafts,
  usePatchAircraftStatus,
} from "@/lib/modules/aircraft/aircraft.hooks"

import Card from "@/ui/Card"
import { mapAircraftStatusColor } from "@/ui/utils/aircraft-utils"
import {
  EAircraftStatus,
  TAircraft,
  TAircraftFilter,
} from "@/lib/modules/aircraft/aircraft.types"
import AircraftStatusDropdown from "./AircraftStatusDropdown"

type TAircraftListProps = {
  filter: TAircraftFilter
}

const useAircrafts = (filter: TAircraftFilter) => {
  const aircraftsQuery = useGetAircrafts()

  const aircrafts = aircraftsQuery.data ?? []

  const filtered = aircrafts.filter((aircraft) => {
    const isSameLocation =
      filter.location === undefined ||
      aircraft.current_location
        .toLowerCase()
        .includes(filter.location.toLowerCase())
    const isSameModel =
      filter.model === undefined ||
      aircraft.model.toLowerCase().includes(filter.model.toLowerCase())
    const isSameStatus =
      filter.status === undefined || aircraft.status === filter.status
    return isSameStatus && isSameLocation && isSameModel
  })

  return {
    aircrafts: filtered,
    aircraftsQuery,
    isLoading: aircraftsQuery.isLoading,
  }
}

const AircraftList = ({ filter }: TAircraftListProps) => {
  const { aircrafts, isLoading } = useAircrafts(filter)

  const statusMutation = usePatchAircraftStatus()

  const handleStatusSelect = (
    tailNumber: TAircraft["tail_number"],
    status?: EAircraftStatus
  ) => {
    if (!status) {
      return
    }
    statusMutation.mutate({ tailNumber, status })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {aircrafts.map((aircraft) => {
        const color = mapAircraftStatusColor(aircraft.status)
        return (
          <li key={aircraft.tail_number}>
            <Card>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-gray-900">
                  {aircraft.tail_number}
                </span>
                <span className="">{aircraft.model}</span>
                <button
                  className={`px-3 py-1.5 rounded-md ${color.background} text-white text-sm hover:cursor-pointer transition w-1/2`}
                >
                  {aircraft.status}
                </button>
                <AircraftStatusDropdown
                  onSelect={(status) =>
                    handleStatusSelect(aircraft.tail_number, status)
                  }
                  selected={aircraft.status}
                />
                <span>{aircraft.current_location}</span>
              </div>
            </Card>
          </li>
        )
      })}
    </ul>
  )
}

export default AircraftList
