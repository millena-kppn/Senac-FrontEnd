const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    
    console.log(password,"password")
    if(email != "" && password != ""){
       //alert("login efetuado com sucesso!")
        localStorage.setItem("user",email)
        window.location.href = "/"
    }else{
        alert("login inválido")
    }
})