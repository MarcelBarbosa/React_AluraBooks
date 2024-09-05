import { Link } from "react-router-dom"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import './Carrinho.css'
import { formatador } from "../../utils/formatadorMoeda"
import { AbBotao } from "ds-alurabooks"
import ItemCarrinho from "../../componentes/ItemCarrinho"
import { useCarrinhoContext } from "../../contextos/carrinho"
import LoadingCarrinho from "../../componentes/LoadingCarrinho"

const Carrinho = () => {
    // const { data } = useCarrinho()
    const { carrinho, carregando } = useCarrinhoContext()

    return (
        <>
            {carregando && <LoadingCarrinho />}
            <section className="pagina-carrinho">
                <TituloPrincipal texto="Minha sacola" />
                <div className="conteudo">
                    <h4>Itens selecionados</h4>
                    <div className="itens">
                        {carrinho?.itens.map((item, index) =>
                            <ItemCarrinho key={index} item={item} />
                        )}
                    </div>
                    <div>
                        <Link to='/'>Continuar comprando</Link>
                    </div>
                    <footer>
                        <ul>
                            <li>Total da compra</li>
                            <li><strong>{formatador.format(carrinho?.total || 0)}</strong></li>
                            <li>
                                <AbBotao texto="Finalizar compra" />
                            </li>
                        </ul>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Carrinho