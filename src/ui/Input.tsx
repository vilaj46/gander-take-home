import { ChangeEvent } from "react"

type TInputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value?: string
}

const Input = ({ onChange, placeholder, value }: TInputProps) => {
  return (
    <input
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value ?? ""}
    />
  )
}

export default Input
