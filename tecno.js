function handleOverPhone(){
    const modal = document.querySelector('.phone')
    if (modal.style.top ==='20px'){
        modal.style.top ='-100%'
    }else{
        modal.style.top ='20px'   
    }
}

function handleOverAccessories() {
 const modal = document.querySelector(".earpod")
 if (modal.style.top ==="20px"){
    modal.style.top = ("-100%") 
} else {
    modal.style.top ="20px"
}   
}

function handleOverShopOnline() {
    const modal = document.querySelector('.shop')
    if (modal.style.top ==='20px'){
        modal.style.top = '-100%'
    }else{
        modal.style.top = '20px'
    }
}
function handleClick() {
    const nav2 = document.querySelector(".nav2")
    nav2.style.right ="0"
}
function handleClickMe() {
    const nav2 = document.querySelector(".nav2")
    nav2.style.right = "-100%"
}
