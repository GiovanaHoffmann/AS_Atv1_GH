class Turma {
    #codigo;
    #nota;
        
    constructor(codigo, nota) {
    this.#codigo = codigo;
    this.#nota = nota;
    }
        
    get codigo(){
        return this._codigo;
    }
        
    get nota(){
        return this._nota;
    }
    
    aprovado() {
        return this.nota >= 60;
        }
}

module.exports  = Turma;