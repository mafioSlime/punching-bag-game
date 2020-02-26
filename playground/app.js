// CONSTRUCTOR

// class Hotel {
//   constructor(name, rating, capacity) {
//     this.name = name
//     this.rating = rating
//     this.capacity = capacity
//   }
//   introduce() {
//     console.log(`Hello there from ${this.name}`)
//   }
// }


// const trivago = new Hotel('trivago', '5-star', '30 people')

// console.log(trivago.name)
// console.log(trivago.rating)
// console.log(trivago.capacity)

const buttonA = document.querySelector('.combination-a'),
  buttonB = document.querySelector('.combination-b'),
  buttonC = document.querySelector('.combination-c'),
  buttonD = document.querySelector('.combination-d'),
  resultContainer = document.querySelector('.result')

const A = "A",
  B = "B",
  C = "C",
  D = "D"
const combinationContainer = []

buttonA.addEventListener('click', () => {
  combinationContainer.push(A)
  console.log(combinationContainer)
  alertMe()
})

buttonB.addEventListener('click', () => {
  combinationContainer.push(B)
  console.log(combinationContainer)
  alertMe()
})

buttonC.addEventListener('click', () => {
  combinationContainer.push(C)
  console.log(combinationContainer)
  alertMe()
})

buttonD.addEventListener('click', () => {
  combinationContainer.push(D)
  console.log(combinationContainer)
  alertMe()
})


const alertMe = () => {
  if (combinationContainer.length > 2) {
    combinationContainer.shift()
    console.log(combinationContainer)
  }

  if (combinationContainer.includes('A') && combinationContainer.includes('B')) {
    console.log("What a great discovery!!!!")
    resultContainer.innerHTML = "Whooaaaa! A telescope!"
  } else if (combinationContainer.includes('C') && combinationContainer.includes('D')) {
    console.log('Oooohhhh Jurassic Period!')
    resultContainer.innerHTML = "Enormous creatures who first walked on Earth!"
  }
}

alertMe()