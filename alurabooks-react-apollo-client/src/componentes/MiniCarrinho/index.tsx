import { useNavigate } from "react-router-dom";
import { useCarrinhoContext } from "../../contextos/carrinho";
import BotaoNavegacao from "../BotaoNavegacao";

import sacola from './sacola.png'
import { AbBotao } from "ds-alurabooks";

import './MiniCarrinho.css'
import MiniCarrinhoItem from "./MiniCarrinhoItem";

const MiniCarrinho = () => {
    const navigate = useNavigate();
    const { carrinho } = useCarrinhoContext()


    return (
        <div>
            <div className="carrinho dropdown">
                <BotaoNavegacao
                    texto="Sacola"
                    textoAltSrc=""
                    imagemSrc={sacola}
                    onClick={() => navigate('/minha-sacola')}
                /> 
                 
                <div className="minicarrinho-conteudo">
                    <h4>Resumo da compra</h4>
                    {carrinho?.itens.map((item, index) => (<MiniCarrinhoItem key={index} item={item} />))}
                    <AbBotao texto="Ver sacola" onClick={() => navigate('/minha-sacola')}/>
                </div>
            </div>
        </div>
    )
}

export default MiniCarrinho