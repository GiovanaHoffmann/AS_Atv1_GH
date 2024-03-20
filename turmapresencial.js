const Turma = require("./turma");

class TurmaPresencial extends Turma {
    #frequencia;

    constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.#frequencia = frequencia;
    }

    get frequencia(){
        return this.frequencia;
    }
    
    aprovado() {
    return super.aprovado() && this.frequencia >= 75;
    }
}

module.exports = TurmaPresencial;