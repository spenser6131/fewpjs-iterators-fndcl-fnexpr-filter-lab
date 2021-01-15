// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, firstLetters) {
  return drivers.filter(driver => driver.substring(0,firstLetters.length) === firstLetters);
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}