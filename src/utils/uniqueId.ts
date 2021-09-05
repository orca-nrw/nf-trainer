let lastId = 0

export default function uniqueId (prefix: string = 'id-') {
  lastId++
  return `${prefix}${lastId}`
}
