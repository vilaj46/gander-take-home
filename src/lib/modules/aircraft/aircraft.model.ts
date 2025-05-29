import { db } from "@/lib/db"
import { aircraftTable } from "@/lib/db/schemas"
import { TAircraft } from "@/lib/modules/aircraft/aircraft.types"
import { eq } from "drizzle-orm"

const getAllAircraft = async () => await db.select().from(aircraftTable)

const updateAircraftStatus = async (
  tailNumber: TAircraft["tail_number"],
  status: TAircraft["status"]
) =>
  await db
    .update(aircraftTable)
    .set({ status })
    .where(eq(aircraftTable.tail_number, tailNumber))
    .returning()

const model = {
  getAllAircraft,
  updateAircraftStatus,
}

export default model
