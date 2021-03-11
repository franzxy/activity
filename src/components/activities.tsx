import React from "react"
import { useAllActivitiesQuery } from "./types/operations";

export const Activities = () => {

  const { data, loading, error } = useAllActivitiesQuery()

  if (loading) return 'Loading!';

  if (error) return `Error! ${error.message}`;

  return data?.queryActivity?.map((activity) => {
    console.log(activity)
    return (
      <div>
        <h1>{activity?.name}</h1>
      </div>
    )
  })
}