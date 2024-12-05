// div dos cards (type1 e type2)
const spans = [document.querySelector(".off") , document.querySelector(".ln1") , document.querySelector(".ln2") , document.querySelector(".mobile")]
const btnMobile = document.getElementById("btn-mobile")
const btnCart = document.getElementById("btn_cart")
const carOverlay = document.getElementById("car_overlay")
const cardData = document.querySelectorAll("[data-card]")
const cancel = document.getElementById("cancel")
// função para trocar os cards
function cardEvent(){
    cards.forEach(elemento =>{
        elemento.classList.toggle("card-event")
    })
}

cancel.addEventListener("click",()=> window.location.reload())

cardData.forEach((card)=>{
    const img = card.querySelector('img')
    card.addEventListener("click",()=>{
        addProductsInCart(img.src)
    })
})

function generateCard(img){
    const newDiv = document.createElement("img");
    newDiv.src= `${img}`
    carOverlay.appendChild(newDiv)
//    document.body.insertBefore(newDiv, currentDiv);
}


function addProductsInCart(img){
    generateCard(img)

}


btnCart.addEventListener("click",()=>{
    carOverlay.classList.toggle("open")
})

btnMobile.addEventListener("click", ()=> mobile())
const mobile = ()=>{
    spans.forEach(elemento =>{
        elemento.classList.toggle("mobile-on")
    })
}

// tempo de troca
let time = setInterval(() => {
    cardEvent()
}, 5000);

// tempo para parar a troca
setTimeout(time , 60000)