const cards_target = document.querySelector("#cards-target")

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
            console.log(`Item ID: ${i}`)
            cards_target.append(template)
            template = document.querySelector(`#template-${renderType}`)
            template = template.content.cloneNode(true)
        }
    })
})