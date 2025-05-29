// import { integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core"

// const aircraftStatus = pgEnum("status", ["available", "aog", "maintenance"])

// const aircraftTable = pgTable("aircraft", {
//   current_location: varchar({ length: 255 }).notNull(),
//   model: varchar({ length: 255 }).notNull(),
//   status: aircraftStatus("status").notNull(),
//   tail_number: integer().primaryKey().generatedAlwaysAsIdentity(),
// })

// export { aircraftTable }

import { aircraftTable } from "@/lib/modules/aircraft/aircraft.schema"

export { aircraftTable }
