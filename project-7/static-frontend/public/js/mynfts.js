const cards_target = document.querySelector("#cards-target")

const addConfirmListener = () => {
    document.querySelectorAll(".item-confirm").forEach(confirm => {
        confirm.addEventListener("click", () => {
            
            document.querySelector(".modal").classList.toggle("modal-show")
        })
    })
    
}




addConfirmListener()

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".tab-active").classList.remove("tab-active")
        tab.classList.add("tab-active")
        console.log(tab.attributes[1].value)
        let renderType = tab.attributes[1].value
        cards_target.innerHTML = ""
        let template = document.querySelector(`#template-${renderType}`)
        template = template.content.cloneNode(true)
     
        for(let i = 0; i < 9; i++){

            cards_target.append(template)
            template = document.querySelector(`#template-${renderType}`)
            template = template.content.cloneNode(true)
        }

        document.querySelectorAll(".item-confirm").forEach(item => {
            item.removeEventListener("click", addConfirmListener)
        })

        addConfirmListener()
    })
})