"use client"

import { ChangeEvent, useState } from "react"

import Card from "@/ui/Card"
import Container from "@/ui/Container"
import {
  EAircraftStatus,
  TAircraftFilter,
} from "@/lib/modules/aircraft/aircraft.types"
import AircraftList from "@/ui/AircraftList"
import ReactQueryWrapper from "@/ui/ReactQueryWrapper"
import Input from "@/ui/Input"
import AircraftStatusDropdown from "@/ui/AircraftStatusDropdown"

export default function Dashboard() {
  const INIT_FORM: TAircraftFilter = {
    location: undefined,
    model: undefined,
    status: undefined,
  }
  const [form, setForm] = useState<TAircraftFilter>(INIT_FORM)

  const handleFilterClear = () => setForm(INIT_FORM)

  const handleStatusSelect = (status?: EAircraftStatus) =>
    setForm((f) => ({
      ...f,
      status,
    }))

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({
      ...f,
      location: e.target.value,
    }))

  const handleModelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({
      ...f,
      model: e.target.value,
    }))

  return (
    <ReactQueryWrapper>
      <main className="py-4">
        <Container>
          <h1 className="font-bold text-3xl text-gray-900">Dashboard</h1>
          <Card>
            <div className="flex flex-row gap-4">
              <AircraftStatusDropdown
                onSelect={handleStatusSelect}
                selected={form.status}
              />
              <Input
                onChange={handleLocationChange}
                placeholder="Location"
                value={form.location}
              />
              <Input
                onChange={handleModelChange}
                placeholder="Model"
                value={form.model}
              />
            </div>
            <button
              className="mt-4 px-3 py-1.5 rounded-md bg-black text-white text-sm hover:bg-gray-800 transition hover:cursor-pointer"
              onClick={handleFilterClear}
            >
              Clear Filter
            </button>
          </Card>
          <AircraftList filter={form} />
        </Container>
      </main>
    </ReactQueryWrapper>
  )
}
