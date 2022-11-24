class Contador {
    static contadorGlobal = 0

    constructor(nombre) {
        this.contador = 0
        this.nombre = nombre
    }
    getResposable(){
        return this.nombre
    }
    setResponsable(nombre){
        this.nombre = nombre
    }
    contar = () => {
        this.contador += 1
        Contador.contadorGlobal += 1
    }
    getCuentaIndividual(){
        return this.contador
    }
    getCuentaGlobal(){
        return Contador.contadorGlobal
    }
}

const contador1 = new Contador('sebastian')

console.log('nombre:', contador1.nombre)
console.log('getResposable:', contador1.getResposable())
console.log('getCuentaIndividual:', contador1.getCuentaIndividual())
console.log('getCuentaGlobal:', contador1.getCuentaGlobal())


contador1.contar()
console.log('contadores + 1 ...')
console.log('getCuentaIndividual:', contador1.getCuentaIndividual())
console.log('getCuentaGlobal:', contador1.getCuentaGlobal())