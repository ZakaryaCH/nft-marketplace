document.querySelectorAll(".checkbox").forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checkbox-checked")
    })
})

document.querySelectorAll(".filter-group-head").forEach(group => {
    group.addEventListener("click", () => {
        group.parentElement.classList.toggle("filter-collapsed")
    })
})

document.querySelector(".filters-head").addEventListener("click", () => {
    document.querySelector(".filter-group-collapse").classList.toggle("filter-group-collapsed")
    document.querySelector(".filter-dropdown-toggle").classList.toggle("dropdown-toggled")
})