// components/Container.tsx
import React from "react"

type TContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {children}
    </div>
  )
}

export default Container
