var form = document.getElementById("addForm");
var listItem = document.getElementById("ulid");
let arr = []

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createElement()


})

function createElement(newItem) {
    newItem = document.getElementById("inputid").value;
    if (newItem !== "") {
        arr.push(newItem)
        var li = document.createElement("li")
        li.className = "li-item";
        li.innerHTML = newItem;
        var button = document.createElement("button");
        button.className = "x-button"
        li.appendChild(button)
        listItem.appendChild(li)
        input.value = ""
    }
}
const input = document.getElementById("inputid")
input.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        createElement()
    }
})


listItem.addEventListener('click', (e) => {
    if (e.target.classList.contains("x-button")) {
        var li = e.target.parentElement;
        listItem.removeChild(li)
        for (let i = 0; i < arr.length; i++) {
            if (li.innerText === arr[i]) {
                arr.splice(i, 1)
            }
        } 
    }
})

function filter() {
    var filterValue, input, ul, li, a, i;
    input = document.getElementById("search");
    filterValue = input.value.toUpperCase();
    ul = document.getElementById("ulid");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }
}




const sortButton = document.querySelector('.sort')
sortButton.addEventListener('click', (e) => {
    e.preventDefault();
    sortButtonChange()


})

function sortButtonChange() {

    if (sortButton.classList.contains('sort')) {
        sortHandlerAscending();
        sortButton.classList.remove('sort')
        sortButton.classList.add('up')
    } else {
        sortHandlerDescending();
        sortButton.classList.remove('up')
        sortButton.classList.add('sort')
    }

}

function removeArrayElements() {
    for (let i = 0; i < arr.length; i++) {
        var a = document.getElementById("ulid")
        a.innerHTML = ""

    }
}

function sortHandlerAscending() {


    arr.sort((a, b) => a.localeCompare(b, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))

    addArrayElements()

}

function addArrayElements() {
    removeArrayElements()
    arr.forEach(item => {
        var elements = document.createElement('li')
        elements.className = "li-item"
        elements.innerHTML = item;
        var button = document.createElement("button");
        button.className = "x-button"
        elements.appendChild(button)
        listItem.appendChild(elements)

    });
}

function sortHandlerDescending() {

    arr.sort((a, b) => b.localeCompare(a, navigator.languages[0] || navigator.language, {numeric: true, ignorePunctuation: true}))

    addArrayElements();
}
