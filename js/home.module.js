import {htmlCategoryOptions,itemsContainer,dropdownToggle,loader} from "./main.js"
import {UI} from "./ui.module.js"
import {API} from "./api.module.js"
export class Home{
    constructor(){ //getCategories
        var categories = [];
        const req = new XMLHttpRequest()
        req.open("GET", `${API}/categories`)
        req.send()
        req.addEventListener("load", () => {
            categories = JSON.parse(req.response)
            this.setOptions(categories)
        })
    }
    
    setOptions(categories) {
        let categoryOptions = ``
        //put options in html
        for (let i = 0; i < categories.length; i++) {
            let category = categories[i];
            categoryOptions += `
            <li><a class="dropdown-item">${category}</a></li>
            `
        }
        htmlCategoryOptions.innerHTML = categoryOptions
    
        let options = document.querySelectorAll("#filter .dropdown-item")
        let len = options.length
        //make event for each option
        for (let i = 0; i < len; i++) {
            // console.log(x[i].innerHTML);
            let option = options[i]
            option.addEventListener("click", (e) => {
                let category = e.target.innerHTML
                this.getItems(category)
            })
        }
    }
    getItems(categoryName) {

        var allItems = [];
        this.toggleLoader()
        let xhr = new XMLHttpRequest()
        xhr.open("GET", `${API}/category/${categoryName}`, true)
        xhr.send()
        xhr.addEventListener("load", () => {
            allItems = JSON.parse(xhr.response)
            itemsContainer.innerHTML = `<p class="text-center">Select A Category</p>`
            this.toggleLoader()
            var ui = new UI()        
            ui.displayData(allItems)
            dropdownToggle.innerHTML = categoryName
        })
        xhr.addEventListener("error", () => {
            Error("Error caught")
        })
    }
    toggleLoader() {
        if (loader.classList.contains("d-none")) {
            loader.classList.remove("d-none")
            if (itemsContainer.classList.contains("d-none")) {
                itemsContainer.classList.remove("d-none")
            } else {
                itemsContainer.classList.add("d-none")
            }
        } else {
            loader.classList.add("d-none")
            if (itemsContainer.classList.contains("d-none")) {
                itemsContainer.classList.remove("d-none")
            } else {
                itemsContainer.classList.add("d-none")
            }
        }
    }
}