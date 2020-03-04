// sanity check
console.log('Loaded')

let changes = document.querySelector('.header')
let clicked1 = document.getElementById('one')
let clicked2 = document.getElementById('two')
clicked1.addEventListener('click', clicked) // use a more descriptive function name

function clicked(el) {
  changes.innerHTML = `${changes.innerHTML} is now 1` // you should not be appending to the current inner text 
  header.classlist.add('coolclass') // you have to call your selected element by variable name
}

clicked2.addEventListener('click', blicked) // use a more descriptive function name

function blicked(el) {
  changes.innerHTML = `${changes.innerHTML} is now 2`// you should not be appending to the current inner text 
  header.classlist.add('evencoolerclass')// you have to call your selected element by variable name
}