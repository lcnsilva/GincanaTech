const Publicacao = require('../models/publicacao.js');

class PublicacaoController{

    static listarPublicacoes = async (req,res) => {
        try{
            const publicacoesResultado = await Publicacao.findAll({order: [
                ['id_publicacao', 'DESC']
            ]});
            res.status(200).json(publicacoesResultado);
        }catch(error){
            res.status(500).json({ message: "Erro interno no servidor" });
        }
        
    };
    static cadastrarPublicacao = async (req,res) => {
        try{
            let {nome, topico, descricao, contato, imgsrc} = req.body;
            
            const publicacoesResultado = await Publicacao.create({
                nome,
                topico,
                descricao,
                contato,
                imgsrc
            });
            res.status(201).json(publicacoesResultado.toJSON());
        }catch(error){
            res.status(500).send({message: `${error.message} - falha ao cadastrar publicação.`})
        }
    };

    static atualizarPublicacao = async (req,res) => {
        const id = req.params.id;
        try{
            let {nome, topico, descricao, contato, imgsrc} = req.body;
            let dados = {nome, topico, descricao, contato, imgsrc};
            const publicacoesResultado = await Publicacao.update(dados, {where: {id_publicacao : id}});
            res.status(200).send({message: "Publicação atualizada com sucesso"});
        }catch(error){
            res.status(500).send({message: `${error.message} - falha ao atualizar publicação.`})
        }
    }

    static excluirPublicacao = async (req,res) => {
        const id = req.params.id;
        try{
            Publicacao.destroy({where: {id_publicacao : id}})
            res.status(200).send({message: "Publicação removida com sucesso"});
        }catch(error){
            res.status(500).send({message: `${error.message} - falha ao excluir publicação.`})
        }
    }

    static filtrarPublicacoes = async (req,res) => {
        const {topico} = req.params;
        try{
            const publicacoesResultado = await Publicacao.findAll({where: {topico}})
            res.status(200).json(publicacoesResultado);
            console.log(publicacoesResultado);
        }catch(error){
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    };



}

module.exports = PublicacaoController;