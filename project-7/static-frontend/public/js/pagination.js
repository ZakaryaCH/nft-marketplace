let active_pagination = 1
document.querySelectorAll(".pagination-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".pagination-active").classList.toggle("pagination-active")
        link.classList.toggle("pagination-active")
        active_pagination = Number(link.textContent)
        if(Number(link.textContent) == 1){
            document.querySelector("#prev").classList.add("pagination-hide")
        }
        else{
            document.querySelector("#prev").classList.remove("pagination-hide")
        }
        if(Number(link.textContent) == 5){
            document.querySelector("#next").classList.add("pagination-hide")
        }
        else{
            document.querySelector("#next").classList.remove("pagination-hide")
        }
    })
})

document.querySelector("#next").addEventListener("click",() => {

    if(Number(document.querySelector(".pagination-active").textContent) < 5){
        document.querySelectorAll(".pagination-link").forEach(link => {
            
            if(Number(link.textContent) == active_pagination + 1){
                document.querySelector(".pagination-active").classList.toggle("pagination-active")
                link.classList.toggle("pagination-active")
                
            }
        })
        active_pagination += 1
        if(active_pagination > 1){
            document.querySelector("#prev").classList.remove("pagination-hide")
        }
        if(active_pagination == 5){
            document.querySelector("#next").classList.add("pagination-hide")
        }
    }
})

document.querySelector("#prev").addEventListener("click",() => {
    if(Number(document.querySelector(".pagination-active").textContent) > 1){
        document.querySelectorAll(".pagination-link").forEach(link =>{
            if(Number(link.textContent) == active_pagination - 1){
                document.querySelector(".pagination-active").classList.toggle("pagination-active")
                link.classList.toggle("pagination-active")
            }
        })

        active_pagination -= 1
        if(active_pagination < 5){
            document.querySelector("#next").classList.remove("pagination-hide")
        }
        if(active_pagination == 1){
            document.querySelector("#prev").classList.add("pagination-hide")
        }

    }
})