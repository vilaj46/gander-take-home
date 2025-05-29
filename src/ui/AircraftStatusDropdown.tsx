import { EAircraftStatus } from "@/lib/modules/aircraft/aircraft.types"
import Dropdown, { TDropdownProps } from "@/ui/Dropdown"
import AircraftStatusOption from "@/ui/AircraftStatusOption"

type TAircraftStatusDropdownProps = Pick<
  TDropdownProps<EAircraftStatus>,
  "onSelect" | "selected"
>

const AircraftStatusDropdown = ({
  onSelect,
  selected,
}: TAircraftStatusDropdownProps) => {
  const createStatusOption = (status: EAircraftStatus) => ({
    id: status,
    label: <AircraftStatusOption status={status} />,
    value: status,
  })
  return (
    <Dropdown
      options={[
        createStatusOption(EAircraftStatus.aog),
        createStatusOption(EAircraftStatus.available),
        createStatusOption(EAircraftStatus.maintenance),
      ]}
      onSelect={onSelect}
      selected={selected}
    />
  )
}

export default AircraftStatusDropdown
