const css = document.querySelector('h3')
const body = document.querySelector('#gradient')
const colorOne = document.querySelector('#colorOne')
const colorTwo = document.querySelector('#colorTwo')
const randomColorPicker = document.querySelector('#randomColorPicker')

// Generates a random hex value in the list below
const generateRandomColor = () => {
    const colors = ['#e65c00', '#2193b0', '#cc2b5e', '#ec008c', '#536976', '#ffe259',
                    '#F9D423', '#6dd5ed', '#753a88', '#fc6767', '#292E49', '#ffa751'];

    return colors[Math.floor(Math.random()*colors.length)];
}


// // sets a random color from generateRandomColor function 
// const setRandomColor = (e) => {
//     body.style.background = `linear-gradient(to right, ${generateRandomColor()}, ${generateRandomColor()})`
//     css.textContent = `${body.style.background};`
// }

// sets gradient 
const setGradient = (e) => {
    body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`
    css.textContent = `${body.style.background};`
}

// sets a random color from random_color function 
const setRandomColor = () => {
    colorOne.value = generateRandomColor()
    colorTwo.value = generateRandomColor()
    setGradient()
}

colorOne.addEventListener('input', setGradient)
colorTwo.addEventListener('input', setGradient)
randomColorPicker.addEventListener('click', setRandomColor)
 

// console.log(e)
// console.log(e.target)
// console.log(randomColorPicker.value)

// changes background styles
// body.style.background = colorOne.value