import TituloPrincipal from "../../componentes/TituloPrincipal"
import Loader from "../../componentes/Loader"
import ListaLivros from "../../componentes/ListaLivros"
import { ICategoria } from "../../interfaces/ICategoria"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { obterCategoriaPorSlug } from "../../http"

const Categoria = () => {

     const params = useParams()
     const { data: categoria, isLoading } = useQuery({queryKey: ['categoriaPorSlug', params.slug], queryFn: () => obterCategoriaPorSlug(params.slug || '')})

    if (isLoading) {
        return <Loader />
    }

    return (
        <section>
            <TituloPrincipal texto={categoria?.nome ?? ''} />
            <ListaLivros categoria={categoria!} />
        </section>
    )
}
export default Categoria