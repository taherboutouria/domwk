let totalPRice = document.getElementById('total-price')
function UpdateTotalPrice(){
let Prices = document.getElementsByClassName('price')
let sum =0;
    for(let i=0;i< Prices.length;i++){
       sum += Number(Prices[i].innerHTML)
    }
   totalPRice.innerHTML = sum
}


const PlusBtn = document.getElementsByClassName('plus-btn')
for (let i=0;i<PlusBtn.length;i++){
    PlusBtn[i].addEventListener('click',function(event){
         let qte = event.target.nextElementSibling
         qte.innerHTML = Number(qte.innerHTML) +1
         let Prix_Unitaire = event.target.nextElementSibling.nextElementSibling.nextElementSibling
         let PixTotalPArArticle = event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
        
         PixTotalPArArticle.innerHTML = +(Prix_Unitaire.innerHTML) * +(qte.innerHTML)
         UpdateTotalPrice()

    })
}

const moinBtn = document.getElementsByClassName('sustraction-btn')
for (let i=0;i<moinBtn.length;i++){
    moinBtn[i].addEventListener("click",function(E){
let qte = E.target.previousElementSibling
if(qte.innerHTML>0){
    qte.innerHTML = Number(qte.innerHTML) -1
}
let Prix_Unitaire = E.target.nextElementSibling
let PixTotalPArArticle =  E.target.nextElementSibling.nextElementSibling.nextElementSibling
PixTotalPArArticle.innerHTML = +(Prix_Unitaire.innerHTML) * +(qte.innerHTML)
UpdateTotalPrice()
})
}
const delbtn = document.getElementsByClassName('delete-btn')
for (let i=0;i<delbtn.length;i++){
    delbtn[i].addEventListener("click",function(){
       
       let iten=document.getElementsByClassName("item")
       
        iten[i].remove()

        UpdateTotalPrice()
    })
}


