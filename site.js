(async () => {

const timeText = document.querySelector('#welcome')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (isMorning) {timeText.textContent = "Good morning! Ready to start the day?"}
if (isAfternoon) {timeText.textContent = "Hey there! Hope your day's going well."}
if (isEvening) {timeText.textContent = "Good evening! Hope you had a great day."}

localStorage.setItem("It's a secret to everybody.", "To view the secret joke, please delete System32.")

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const buttonPrev = document.querySelector('#prev')
const buttonNext = document.querySelector('#next')

buttonNext.addEventListener('click', () => {
    currentImage += 1
    showImages()
})

buttonPrev.addEventListener('click', () => {
    currentImage -= 1
    showImages()
})

setInterval(() => {
    currentImage += 1
    showImages()
}, 5000);

const pokeImg = document.querySelector('#pokeImg')

const getRandomPokemon = async () => {
   const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)
    const json = await response.json()
   const {name, sprites: {front_default}} = json
   return {
        name,
        sprites: {front_default}
   }
}




const renderPokemon = async () => {
    const img = document.createElement('img')
    const { name, sprites: {front_default} } = await getRandomPokemon()
    img.src = front_default
    img.alt = name
    pokeImg.append(img)
}

renderPokemon()

})()