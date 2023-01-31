import apiFetch from "./api-fetch"

export async function getDataUsers () {
  const data = await apiFetch("?results=15")
  return data
}