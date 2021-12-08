let contaCadastrada = {}
const nome = document.getElementById("nomeCompleto")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const celular = document.getElementById("numeroCelular")
let usuarios = []


const cadastrar = function () {
    contaCadastrada = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        celular: celular.value,
    }

    usuarios = JSON.parse(localStorage.getItem("usuarios"))

    usuarios.push(contaCadastrada)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

}

const emailCadastrado = document.getElementById("emailCadastrado")
const senhaCadastrada = document.getElementById("senhaCadastrada")

const entrar = function () {
    usuarios = JSON.parse(localStorage.getItem("usuarios"))

    if (emailCadastrado.value == usuarios.email && senhaCadastrada.value == usuarios.senha) {
        alert("Você entrou na sua conta")

        window.location.href = "./index.html"
    } else {
        alert("erro")
    }
}