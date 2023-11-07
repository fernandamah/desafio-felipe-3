
class herois {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let mago = new herois("Gandalf", 24.000, "mago", "magia")
let guerreiro = new herois("Aragorn", 45, "guerreiro", "espada")
let monge = new herois("Shaolin", 35, "monge", "artes marciais")
let ninja = new herois("Naruto", 33, "ninja", "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()