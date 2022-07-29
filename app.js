// let one = document.querySelector('.one');
// let two = document.querySelector('.two');
// let reset = document.querySelector('.reset')
// let playerOne = document.querySelector('.player-one')
// let playerTwo = document.querySelector('.player-two')
// let input = document.querySelector('input')
// let max = 5
// let gameOver = false
// let numberOne = 0
// let numberTwo = 0
const toggle = document.querySelector('.toggle')
const show = document.querySelector('.list-div')
const btn = document.querySelector('.add')
let items = document.querySelector('.todo-list')
const todo = document.querySelector('.todo-input')

btn.addEventListener('click', () => {
   let list = document.createElement('li')
   let remove = document.createElement('button')
   list.classList.add('li')
   remove.classList.add('rem')
   remove.innerText = 'remove'
   list.innerText = todo.value
   todo.value = ''
   items.append(list)
   items.append(remove)
 
   
})



toggle.addEventListener('click', ()=> {
  show.classList.toggle('show')
})

// input.addEventListener('input', () => {
//   console.log(input.value)

//   one.textContent = input.value
//   two.textContent = input.value
//   if (one.textContent.length === 5) {
//     input.value = ''
//   }

// })
const login = async (password, username) => {
  if (!username || !password) {
    throw 'missing credentiant'
  }
  if (password === 'okiki') {
    return 'welcome'
  }
  throw 'invalid password'
}

login('okiki', 'okiki')
  .then((msg) => {
    console.log(msg)
  })
  .catch((err) => {
    console.log(err)
  })


// const colorChange = (color, time) => {
//   return new Promise((reject, resolve) => {
//     setTimeout(() => {
//       document.body.style.background = color
//       reject()
//     }, time)
//   })
// }




// const rainbow = async () => {
//   await colorChange('red', 1000)
//   await colorChange('orange', 100)
//   // await colorChange('yellow', 1000)
//   // await colorChange('green', 1000)
//   // await colorChange('blue', 1000)
//   // await colorChange('indigo', 1000)
//   // await colorChange('violet', 1000)
//   return 'alldone'
// }

// rainbow()
// const numberone = () => {
//   playerOne.addEventListener('click', () => {
//     if (!gameOver) {
//       numberOne++
//       if (numberOne === max) {
//         gameOver = true

//       }
//       one.textContent = numberOne
//     }

//   })

// }


// const numbertwo = () => {
//   playerTwo.addEventListener('click', () => {
//     if (!gameOver) {
//       numberTwo++
//       if (numberTwo === max) {
//         gameOver = true
//       }
//       two.textContent = numberTwo
//     }
//   })
// }

// numberone()
// numbertwo()
// reset.addEventListener('click', () => {
//   gameOver = false
//   numberOne = 0
//   numberTwo = 0
//   one.textContent = 0
//   two.textContent = 0
// })

const made = {
  name: 'okiki',
  school: 'kwasu',
  occupation: 'web deveolper',
  age: 20,
  single: false
}

let first = JSON.stringify(made)

// let req = new XMLHttpRequest()
// req.onload = function () {
//   console.log('it loaded')
//   console.log(this.responseText + 'error')
// }

// req.onerror = function () {
//   console.log('error')
//   console.log(this.responseText + 'error')
// }

// req.open('get', "https://www.boredapi.com/api/activityhttps://catfact.ninja/fact")
// req.send

// fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
// .then((res) => {
//   console.log('connc', res)
//   return res.json()
// })
// .then((data) => {
//  console.log(data, 'json done')
//  return
// })
// .catch((err) => {
//   console.log('eror', err)  

// })


// const myPeople = async() => {
//   try {
//   const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//   const data = await res.json()
//   console.log('worked', res)
//   console.log(data)
//   const res2 = await fetch("https://swapi.dev/api/people/1/")
//   const data2 = await res2.json()
//   console.log('2 worked', res2)
//   console.log(data2)
//   const res3 = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//   const data3 = await res3.json()
//   console.log('worked', res3)
//   console.log(data3)
//   const res4 = await fetch("https://swapi.dev/api/people/1/")
//   const data4 = await res4.json()
//   console.log('2 worked', res4)
//   console.log(data4)
//   } catch(e) {
//    console.log(e)
//   }



// }

// myPeople()



// async function ourPeople() {
//  try {
//   const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//   const data = await res.json()
//   console.log(data)
//   console.log(res)
//   const re
//  } catch (e) {
//   console.log(e)
//  }
// }

// ourPeople()
// const newPro = (url, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//     }, delay)
//   })
// }

// const testApi = async () => {
//   try {
//     let suc = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
//     let data = await suc.json()
//     console.log(data)
//   } catch (e) {
//     console.log(e)
//   }
// }

// testApi()

// const tryAxios = async() => {
//   try {
//     const res = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')

//   console.log(res.data)
//   const res2 = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
//   console.log(res2.data)
//   const res3 = await axios.get("https://swapi.dev/api/people/0/")
//   console.log(res3.data)
//   } catch (error) {
//     console.log(error)
//   }
  
// }

// tryAxios()

const makeAxios = async () => {
  try {
    let config = {Headers: {Accept: "application/json"}}
   let res = await axios.get('url',config)
   console.log(res.data.joke)
  } catch (error) {
    console.log(error)
  }
  
}

// let homeBtn = document.querySelector('.home-btn')

// homeBtn.addEventListener('click', function() {
//   alert('home btn got clicked')
// })

// let jokeBtn = document.querySelector('.joke-btn')
// const getAxios = async () => {
//  try {
//     let config = {headers: {Accept: "application/json"} }
//     let res = await axios.get('https://icanhazdadjoke.com/',config)
//     return res.data.joke
   
//  } catch (error) {
//     return 'no joke available check your data connectivity'
//  }
// }

// jokeBtn.addEventListener('click',  () => {
//     makeJoke()

// })

// const makeJoke = async () => {
//     let jokesList = document.querySelector('.joke-list')
//     let jokesItems = document.createElement('li')
//     jokesList.textContent =  await getAxios()
//     jokesList.append(jokesItems) 
// }

let jokeBtn = document.querySelector('.joke-btn')



const newJoke = async() => {
  try {
    const config = {headers: {Accept: 'application/json'}}
   const res = await axios.get('https://icanhazdadjoke.com/', config)
 return res.data.joke
// console.log(res.data.joke)
  } catch (e) {
    return 'no jokes check data connection'
  }
}
 jokeBtn.addEventListener('click', () => {
   jokeList()
  
 })

 const jokeList = async () => {
  let listJoke = document.querySelector('.joke-list')
  let newLi = document.createElement('li')
  newLi.textContent = await newJoke()
  listJoke.append(newLi)
 }

 
const tvMazeBtn = document.getElementById('search')

const tvMazeForm = document.querySelector('form')

tvMazeForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const tvMazeInput = document.getElementById('tv-maze')
  let searchTerm = tvMazeInput.value
 

  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
  console.log(res.data[0].show.image.medium)
  res.data.forEach((result) => {
    if(result.show.image) {
    let formImg = document.createElement('img')
    tvMazeForm.appendChild(formImg)
    let allResult = result.show.image.medium
    return formImg.src = allResult
    } else {
      let para = document.createElement('p')
      para.textContent = 'unable to load image.. check your data connection'
      tvMazeForm.append(para)  
    }
  })
  tvMazeInput.value = ""
})

// const tvMaze = async () => {
//   // let searchTerm = tvMazeInput.value
//   const res = await axios.get(`https://api.tvmaze.com/search/shows?q=girls`)
//   // console.log(res.data)
//   res.data.forEach((show) => {
// console.log(show.show.image.medium)
//   })
//  }
//  tvMaze()