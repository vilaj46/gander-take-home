import { ReactNode, useState } from "react"

type TOption<T> = {
  id: string
  label?: string | ReactNode
  value: T
}

export type TDropdownProps<T> = {
  label?: string
  onSelect: (value?: T) => void
  options: TOption<T>[]
  selected?: TOption<T>["value"]
}

const Dropdown = <T,>({
  label = "Select an option",
  onSelect,
  options,
  selected,
}: TDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectedLabel = options.find((option) => option.value === selected)

  const handleOptionClick = (value?: T) => {
    onSelect(value)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-48 px-4 py-2 border border-gray-300 rounded-md bg-white text-left hover:cursor-pointer"
      >
        {selectedLabel?.label || label}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200 z-10">
          <ul className="py-1">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(undefined)}
            >
              Clear
            </li>
            {options.map((option) => (
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                key={option.id}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
