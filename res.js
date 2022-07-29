// selecting queries
const languages = document.querySelectorAll('h4')
const containers = document.querySelectorAll('.container')
const contSec = document.querySelector('.cont-sec')


languages.forEach((language) => {
    language.addEventListener('dragstart', (e) => {
        e.currentTarget.classList.add('opacity')
    })

    language.addEventListener('dragend', (e) => {
        e.currentTarget.classList.remove('opacity')
    })
})

containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault()
        const currentDrag = document.querySelector('.opacity')
        container.append(currentDrag)
    })
})

