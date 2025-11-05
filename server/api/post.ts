import axios from "axios"

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)

  const { data } = await axios.get(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`)
  return data
})