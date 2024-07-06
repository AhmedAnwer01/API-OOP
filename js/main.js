import { Details } from "./details.module.js";
import { Home } from "./home.module.js";
import { UI } from "./ui.module.js";

const itemsContainer = document.getElementById("itemsContainer")
const dropdownToggle = document.querySelector("#filter .dropdown-toggle")
const loader = document.querySelector(".loader")
const moreDetails = document.getElementById("moreDetails")
const closeDetailsBtn = document.getElementById("closeDetailsBtn")
const htmlCategoryOptions = document.getElementById("categoryOptions")
const api = "https://fakestoreapi.com/products/"
const itemsSection = document.getElementById("items")
const fillDetails = document.getElementById("fillDetails")
const addedToCartAlert = document.querySelector(".added-to-cart")

export {itemsContainer,dropdownToggle,loader,moreDetails,closeDetailsBtn,htmlCategoryOptions,api,itemsSection,fillDetails,addedToCartAlert}
const home = new Home()
const ui = new UI()
const details = new Details()

// function getCategories() {
//     var categories = [];
//     const req = new XMLHttpRequest()
//     req.open("GET", `${api}/categories`)
//     req.send()
//     req.addEventListener("load", () => {
//         categories = JSON.parse(req.response)
//         setOptions(categories)
//         console.log(categories);
//     })
// }

// getCategories()

// function setOptions(categories) {
//     let categoryOptions = ``
//     //put options in html
//     for (let i = 0; i < categories.length; i++) {
//         let category = categories[i];
//         categoryOptions += `
//         <li><a class="dropdown-item">${category}</a></li>
//         `
//     }
//     htmlCategoryOptions.innerHTML = categoryOptions

//     let options = document.querySelectorAll("#filter .dropdown-item")
//     let len = options.length
//     //make event for each option
//     for (let i = 0; i < len; i++) {
//         // console.log(x[i].innerHTML);
//         let option = options[i]
//         option.addEventListener("click", (e) => {
//             let category = e.target.innerHTML
//             getItems(category)
//         })
//     }
// }

// function getItems(categoryName) {

//     var allItems = [];
//     toggleLoader()
//     let xhr = new XMLHttpRequest()
//     xhr.open("GET", api + `/category/${categoryName}`, true)
//     xhr.send()
//     xhr.addEventListener("load", () => {
//         allItems = JSON.parse(xhr.response)
//         itemsContainer.innerHTML = `<p class="text-center">Select A Category</p>`
//         toggleLoader()
//         displayData(allItems)
//         dropdownToggle.innerHTML = categoryName
//     })
//     xhr.addEventListener("error", () => {
//         Error("Error caught")
//     })
// }

// function displayData(allItems) {
//     var content = ``;
//     let item = {}
//     for (let i = 0; i < allItems.length; i++) {
//         item = allItems[i]
//         content += `
//             <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//                 <div class="card shadow border-0">
//                     <img src="${item.image}" class="card-img-top " height="200px" alt="${item.title}">
//                     <div class="card-body">
//                         <h3 class="card-title"> ${item.category} </h3>
//                         <p class="card-text"> ${item.title}</p>                
//                     </div>
//                     <div class="card-footer">
//                         <button class="button d-flex ms-auto w-auto showMoreBtn" data-index="${i}" > Show More </button>
//                     </div>
//                 </div>
//             </div>
//             `
//     }
//    itemsContainer.innerHTML = content

//     var showMoreBtns = document.getElementsByClassName("showMoreBtn")
//     // console.log(showMoreBtns);
//     for (let i = 0; i < showMoreBtns.length; i++) {
//         let btn = showMoreBtns[i]
//         btn.addEventListener("click", () => {
//             moreDetails.classList.remove("d-none")
//             itemsSection.classList.add("d-none")
//             console.log(btn);
//             let index = btn.dataset.index
//             let product = allItems[index]
//             console.log(product);
//             displayDetails(product)
//         })


//     }
// }

// function displayDetails(product) {
//     let details = ``
//     details += `
//         <div class="col-md-6 product-img">
//                         <img src="${product.image}" alt="${product.title}">
//                     </div>
//                     <div class="col-md-6">
//                         <h3 class="product-name py-4 mb-4"> <span class="fs-2 fw-bold">Product Name: </span> <br> ${product.title} </h3>
//                         <div class="category my-2"><span class="fw-bold">Category: </span>  <span class="text">${product.category}</span></div>
//                         <div class="price my-2"><span class="fw-bold"> Price: </span> <span class="text">$${product.price}</span></div>
//                         <div class="rate my-2">
//                             <ul class="rate-stars-list d-flex p-0">
//                                 <span class="fw-semibold">Rate: &nbsp;</span>
//                                 <div class="background-progress d-flex">
//                                     <li class="rate-star">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//                                             fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
//                                             <path
//                                                 d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
//                                         </svg>
//                                     </li>
//                                     <li class="rate-star">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//                                             fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
//                                             <path
//                                                 d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
//                                         </svg>
//                                     </li>
//                                     <li class="rate-star">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//                                             fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
//                                             <path
//                                                 d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
//                                         </svg>
//                                     </li>
//                                     <li class="rate-star">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//                                             fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
//                                             <path
//                                                 d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
//                                         </svg>
//                                     </li>
//                                     <li class="rate-star">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//                                             fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
//                                             <path
//                                                 d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
//                                         </svg>
//                                     </li>
//                                     <div class="progress">
//                                         <div class="progress-bar" style="width: ${(product.rating.rate / 5) * 100}%;" role="progressbar"
//                                             aria-valuenow="${(product.rating.rate / 5) * 100}" aria-valuemin="0" aria-valuemax="100"></div>
//                                     </div>
//                                 </div>
//                                 <span class="count px-2 text">(${product.rating.count})</span>
//                             </ul>
//                         </div>
//                         <button type="button" class="btn btn-outline-dark shadow px-5 py-2 addtocart-btn my-5">Add To Cart</button>
//                         <div class="description">
//                             <h3 class="description-title">
//                                 Description:
//                             </h3>
//                             <p class="description-text text">${product.description}</p>
//                         </div>
//                     </div>
//     `
//     fillDetails.innerHTML = details
//     let addToCartBtn = document.querySelector(".addtocart-btn")
//     addToCartBtn.addEventListener("click", () => {
//         showAddedToCartAlert()
//     })
// }

// function showAddedToCartAlert() {
//     addedToCartAlert.classList.remove("show")
//     setTimeout(()=>{
//         addedToCartAlert.classList.add("show")
//     },200)
// }

// function toggleLoader() {
//     if (loader.classList.contains("d-none")) {
//         loader.classList.remove("d-none")
//         if (itemsContainer.classList.contains("d-none")) {
//             itemsContainer.classList.remove("d-none")
//         } else {
//             itemsContainer.classList.add("d-none")
//         }
//     } else {
//         loader.classList.add("d-none")
//         if (itemsContainer.classList.contains("d-none")) {
//             itemsContainer.classList.remove("d-none")
//         } else {
//             itemsContainer.classList.add("d-none")
//         }
//     }
// }

// function setCloseDetailsEvent(){
//     closeDetailsBtn.addEventListener("click", () => {
//         moreDetails.classList.add("d-none")
//         itemsSection.classList.remove("d-none")
//         addedToCartAlert.classList.remove("show")
//     })   
// }

// setCloseDetailsEvent()

