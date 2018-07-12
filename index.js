// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {
  drivers.push("Ralph")
  return drivers
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
  return drivers
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
  return drivers
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
  return drivers
}

function appendDriver(name) {
  var newArray = drivers.slice();
  newArray.push("Broom")
  return newArray
}

function prependDriver(name) {
  var newerArray = drivers.slice();
  newerArray.unshift("Bob")
  return newerArray
}




