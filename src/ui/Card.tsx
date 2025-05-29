import React from "react"

type TCardProps = {
  children: React.ReactNode
}

const Card = ({ children }: TCardProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-md p-4 bg-white">
      {children}
    </div>
  )
}

export default Card
