// // alert("Hello from external js file");

// document.getElementById("btn").style.background = "red"

// let btn = document.getElementById("btn")
// btn.style.border = "yellow"
// // btn.style.backgroundImage = "red"

// // document.getElementById("image").style.backgroundImage = "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
// // document.getElementsByTagName("button").style.background = "red"

// document.querySelectorAll(".btn")


// // Assessing Child nodes

// // element.children 
// let parent = document.querySelector(".parent")
// parent.children //will give decendant of parent
// parent.lastChild
// parent.firstChild


// // Assessing sibbling nodes

// // element.nextElementSibling
// let next = document.querySelector("#next")
// next.nextElementSibling //21


// // element.previousElementSibling
// let next2 = document.querySelector("#next")
// next.previousElementSibling

// next.parentElement


// // Element.lastchild



// // CHANGING ELEMENT
// // css                         js
// // Background-color       backgroundColor

// document.querySelector("#btn").classList.add("btn")
// document.querySelector("#btn").classList.remove("exist")

// if (document.querySelector("#btn").classList.contains("btn")) {
//     document.querySelector("#btn").classList.remove("exist")
// }


// // Create element

// package.createElement(h1)

// // node.cloneNode()
// // .node.removeChild(oldNode)

// Event Listners

document.querySelector("#btn").addEventListener("click", () => {
    alert("clicked")
})

