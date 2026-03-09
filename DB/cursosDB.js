import Cursos from "../Model/cursos.js";
import obterConexao from "./conexao.js";


export default class CursosDB{
    async gravar(cursos){
        if (cursos instanceof Cursos){
            const sql = 'INSERT INTO cursos(cur_titulo, cur_preco, cur_vagas, cur_categoria, cur_imagem, cur_cargaHoraria) VALUES (?, ?, ?, ?, ?, ?)'
            const parametros = [cursos.titulo,
                                cursos.preco,
                                cursos.vagas,
                                cursos.categoria,
                                cursos.imagem,
                                cursos.cargaHoraria
            ];
            const conexao = await obterConexao();
            const resultado = await conexao.execute(sql,parametros);
            cursos.id = resultado[0].insertID;
            await conexao.release();
        }
    }
    
    async editar(cursos){
        if (cursos instanceof Cursos){
            const sql = 'UPDATE SET cursos cur_titulo = ?, cur_preco = ?, cur_vagas = ?, cur_categoria = ?, cur_imagem = ?, cur_cargaHoraria = ?'
            const parametros = [cursos.titulo,
                                cursos.preco,
                                cursos.vagas,
                                cursos.categoria,
                                cursos.imagem,
                                cursos.cargaHoraria
            ];
            const conexao = await obterConexao();
            await conexao.execute(sql,parametros);
            await conexao.release();
        }
    }

    async excluir(cursos){
        if(cursos instanceof Cursos){
            const sql = 'DELETE FROM cursos';
            const parametros = [cursos.id];
            const conexao = await obterConexao();
            await conexao.execute(sql,parametros);
            conexao.release();
        }
    }

    async consultar(termo){
        let sql = "";
        if (isNaN(Number(termo))){
            const sql = 'SELECT * FROM cursos WHERE cur.cur_titulo LIKE ?';
        }
        else{

            const sql = 'SELECT * FROM cursos WHERE cur.cur_id = ?';
        }
        const parametros = [termo];
        const conexao = await obterConexao();
        const resultados = await conexao.query(sql,parametros);
        conexao.release();
        let listaCursos = [];
        for  (const resultado of resultados){
            const cursos = new Cursos(resultado.cur_id, resultado.cur_titulo, resultado.cur_preco, resultado.cur_vagas, resultado.cur_categoria, resultado.cur_imagem, resultado.cur_cargaHoraria);
            listaCursos.push(cursos);
        }

        return listaCursos;
    }
}