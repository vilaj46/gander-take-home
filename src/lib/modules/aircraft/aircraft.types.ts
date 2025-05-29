enum EAircraftStatus {
  "aog" = "aog",
  "available" = "available",
  "maintenance" = "maintenance",
}

type TAircraft = {
  current_location: string
  model: string
  status: EAircraftStatus
  tail_number: number
}

type TAircraftFilter = {
  location?: TAircraft["current_location"]
  model?: TAircraft["model"]
  status?: EAircraftStatus
}

export type { TAircraft, TAircraftFilter }
export { EAircraftStatus }
