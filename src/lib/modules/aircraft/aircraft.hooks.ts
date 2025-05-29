"use client"

import axios from "axios"
import {
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"

import {
  EAircraftStatus,
  TAircraft,
} from "@/lib/modules/aircraft/aircraft.types"

const queryKeys = {
  all: ["aircrafts"],
} as Record<string, QueryKey>

const useGetAircrafts = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: async () => {
      const response = await axios.get<TAircraft[]>(`/api/aircraft`)
      return response.data
    },
  })
}

const usePatchAircraftStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      tailNumber,
      status,
    }: {
      status: EAircraftStatus
      tailNumber: TAircraft["tail_number"]
    }) => {
      const response = await axios.patch<TAircraft>(`/api/aircraft`, {
        tailNumber,
        status,
      })
      return response.data
    },
    onSuccess: () => {
      console.log("SUCCESS")
      queryClient.invalidateQueries({
        queryKey: queryKeys.all,
      })
    },
  })
}

export { useGetAircrafts, usePatchAircraftStatus }
