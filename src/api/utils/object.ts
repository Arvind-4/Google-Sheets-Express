const cleanResponse = (data: Array<Array<string>>) => {
  let result = data.map(function (row) {
    return {
      name: row[0],
      message: row[1],
    }
  })
  return result
}

export { cleanResponse }
