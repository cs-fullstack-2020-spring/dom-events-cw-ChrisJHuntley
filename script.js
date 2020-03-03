// sanity cheack
console.log('Loaded')
let changes= document.querySelector('.header')
let clicked1=document.getElementById('one')
let clicked2= document.getElementById('two')
clicked1.addEventListener('click', clicked)
function clicked(el) {
  changes.innerHTML=`${changes.innerHTML} is now 1` 
  header.classlist.add('coolclass') 
}
clicked2.addEventListener('click', blicked)
function blicked(el) {
  changes.innerHTML=`${changes.innerHTML} is now 2` 
  header.classlist.add('evencoolerclass') 
}