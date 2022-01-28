var imageUploadInput = document.querySelector('.image-upload');

const uploadImage = (e) => {
    var output = document.querySelector('.image-upload')
    let url = URL.createObjectURL(e.target.files[0])
    output.style.background = `url(${url})`;
    output.onload = () => {
        URL.revokeObjectURL(output.src)
    }
    output.classList.add("uploaded")
}

imageUploadInput.addEventListener('change', (e) => {
    uploadImage(e);
})

document.querySelector(".category-select").addEventListener("click", () => {
    document.querySelector(".category-dropdown").classList.toggle("category-show")
})

document.querySelectorAll(".category-opt").forEach(opt => {
    opt.addEventListener("click",() => {
        document.querySelector("#category-target").innerHTML = opt.innerHTML
        document.querySelector("#category-target").classList.add("category-selected")
    })
})