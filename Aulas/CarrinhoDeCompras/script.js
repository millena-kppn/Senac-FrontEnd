import { items } from "./data.js"
function init(){
    const body = document.querySelector("body")    //h1 titulo
    const h1 = document.createElement("h1")
    console.log(h1)
    h1.innerText = "Carrinho de compras"
    h1.classList.add("title")
    h1.setAttribute("data","data")
    //h1.removeAttribute("data")
    h1.id = "title"
    h1.addEventListener("click",()=>{
        h1.classList.toggle("title")
        //h1.remove()
    })
    //h1 titulo
    //header
    const header = document.createElement("header")
    header.appendChild(h1)
    //header
    //main
    const main = document.createElement("main")
    //main
    //ul 
    const ul = document.createElement("ul")
    main.append(ul)
    // main.innerHTML = `<ul class="carrinho">
    //     <p>Carrinho</p>
    // </ul>`
    body.append(header,main)
    main.insertAdjacentHTML("beforeend",`<ul class="carrinho">
        <p>Carrinho</p>
    </ul>`)
    //ul
    montarItems()
}
init()
function montarItems(){
    console.log("montar items")
    const ul = document.querySelector("ul")
    console.log(ul,items)
    items.forEach((item)=>{
        const li = document.createElement("li")
        const nome = document.createElement("p")
        const preco = document.createElement("p")
        preco.innerText = item.preco
        nome.innerText = item.nome
        li.append(nome,preco)
        const button = document.createElement("button")
        button.innerText = "Comprar"
        button.classList.add("btn_item")
        li.append(button)
        ul.append(li)
    })
}