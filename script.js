var col = document.querySelector('.col')
var colPhoto = document.querySelector('.col-photo1')
var col2 = document.querySelector('.col2')
var col2Container = document.querySelector('.col2-container')
var col2Contacts = document.querySelector('.col2-contacts')
var profSkils = document.querySelector('.prof-skils')
var button = document.querySelector('.button')
var button2 = document.querySelector('.button2')
button.addEventListener('click', start)
function start() {
    col.style.display = 'none'
    colPhoto.style.display = 'flex'
    colPhoto.style.flexDirection = 'column'
    colPhoto.style.justifyContent = 'center'
    colPhoto.style.marginTop = '2rem'
    colPhoto.style.alignItems = 'center'

    col2.style.display = 'flex'
    col2Container.style.display = 'flex'
    col2Container.style.justifyContent = 'space-evenly'
    col2Contacts.style.marginTop = '0px'
    col2.style.flexDirection = 'column'
    col2.style.width = '100%'
    console.log(1)
}
button2.addEventListener('click', back)

function back() {
    col.style.display = 'block'
    col2.style.display = 'none'
}

