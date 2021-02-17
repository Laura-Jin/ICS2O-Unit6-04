let height = 0
let baseOne = 0
let baseTwo = 0
let number = 0

document.getElementById('calculate').addEventListener('click', buttonOne)

function buttonOne () {
  height = document.getElementById('height').value
  height = parseInt(height)
  baseOne = document.getElementById('base-one').value
  baseOne = parseInt(baseOne)
  baseTwo = document.getElementById('base-two').value
  baseTwo = parseInt(baseTwo)
  number = (baseOne + baseTwo) / 2 * height
  document.getElementById('area').innerHTML = (number)
}
