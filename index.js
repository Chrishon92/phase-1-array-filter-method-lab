function findMatching(drivers, string) {
    const result = drivers.filter(drivers => drivers.toUpperCase() === string.toUpperCase())
    return result

}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(drivers => drivers.slice(0,string.length) === string)
    return result

}
 function matchName (drivers, string) {
     const result = drivers.filter(driver => driver['name'] === string)
     return result
 }