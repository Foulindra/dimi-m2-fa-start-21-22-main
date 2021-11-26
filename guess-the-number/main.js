

const mystereNB = Math.floor(Math.random() * 100) + 1
console.log(mystereNB)

let flou = 0
const augmenterFlou = () => {
  flou = flou + 1.5 
    document.body.style.filter = `blur(${flou}px)`
}
const bouton = document.querySelector('input')

const reponse = 
bouton.onchange = () => {
  const value = parseInt(bouton.value)
  if (isNaN(value) === true) {
    alert(value)
    alert('saisi un nombre mageule')
    return
    
  }
  if (value < mystereNB) {
    document.body.style.backgroundColor = "red"
    alert('trop petit ma couille')
    augmenterFlou()
  }
  if (value > mystereNB) {
    document.body.style.backgroundColor = "blue"
    alert('trop grand ma couille')
    augmenterFlou
  }
  if (value === mystereNB) {
    document.body.style.backgroundColor = "white"
    alert('bravo c est bien ouej')
  
  }
}

