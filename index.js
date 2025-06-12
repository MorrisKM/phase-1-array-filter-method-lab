// Code your solution here
function findMatching(arr, str) {
    return arr.filter(name => name.toLowerCase() === str.toLowerCase());
}
function fuzzyMatch(arr, str) {
    const regex = new RegExp(`^${str}`, "i");
    return arr.filter(name => regex.test(name))
}
function matchName(arr, str) {
    return arr.filter(driver => driver.name === str)
}