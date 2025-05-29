import aircraftService from "@/lib/modules/aircraft/aircraft.service"

export const GET = async () => {
  const aircraft = await aircraftService.getAllAircraft()
  return Response.json(aircraft)
}

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json()
    const { tailNumber, status } = body

    if (!tailNumber || !status) {
      return new Response("Missing tailNumber or status", { status: 400 })
    }

    const aircraft = await aircraftService.updateAircraftStatus(
      tailNumber,
      status
    )

    return Response.json(aircraft)
  } catch {
    return new Response("Invalid request", { status: 500 })
  }
}
