import CursosDB from "../DB/cursosDB.js";

export default class Cursos{
    #id 
    #titulo
    #preco
    #vagas
    #categoria
    #imagem
    #cargaHoraria

    constructor (id, titulo, preco, vagas, categoria, imagem, cargaHoraria){
        this.#id = id;
        this.#titulo = titulo;
        this.#preco = preco;
        this.#vagas = vagas;
        this.#categoria = categoria;
        this.#imagem = imagem;
        this.#cargaHoraria = cargaHoraria;
    }

    get id(){
        return this.#id;
    }
    get titulo(){
        return this.#titulo;
    }
    get preco(){
        return this.#preco;
    }
    get vagas(){
        return this.#vagas;
    }
    get categoria(){
        return this.#categoria;
    }
    get imagem(){
        return this.#imagem;
    }
    get cargaHoraria(){
        return this.#cargaHoraria;
    }

    set id(novo_id){
        this.#id = novo_id;
    }
    set titulo(novo_titulo){
        this.#id = novo_titulo;
    }
    set preco(novo_preco){
        this.#preco = novo_preco;
    }
    set vagas(novo_vagas){
        this.#vagas = novo_vagas;
    }
    set categoria(novo_categoria){
        this.#categoria = novo_categoria;
    }
    set imagem(novo_imagem){
        this.#imagem = novo_imagem;
    }
    set cargaHoraria(novo_cargaHoraria){
        this.#cargaHoraria = novo_cargaHoraria;
    }

    async gravar(){
        const cursosDB = new CursosDB();
        await cursosDB.gravar(this);
    }

    async editar(){
        const cursosDB = new CursosDB();
        await cursosDB.editar(this);
    }

    async excluir(){
        const cursosDB = new CursosDB();
        await cursosDB.excluir(this);
    }

    async consultar(termo){
        const cursosDB = new CursosDB();
        return await cursosDB.consultar(termo);
    }
}
