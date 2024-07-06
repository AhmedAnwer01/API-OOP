import { addedToCartAlert ,moreDetails ,itemsSection} from "./main.js"

export class Details {
    constructor() {
        closeDetailsBtn.addEventListener("click", () => {
            moreDetails.classList.add("d-none")
            itemsSection.classList.remove("d-none")
            addedToCartAlert.classList.remove("show")
        })
    }
    showAddedToCartAlert() {
        addedToCartAlert.classList.remove("show")
        setTimeout(() => {
            addedToCartAlert.classList.add("show")
        }, 200)
    }
}
