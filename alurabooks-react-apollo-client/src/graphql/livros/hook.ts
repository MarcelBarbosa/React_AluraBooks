import { useQuery, useReactiveVar } from "@apollo/client"
import { ILivro } from "../../interfaces/ILivro"
import { OBTER_LIVROS } from "./queries"
import { filtroLivrosVar, livrosVar } from "./state"


// Automaticamente faz o rerender e refetch
export const useLivros = () => {
    const filtro = useReactiveVar(filtroLivrosVar)
    
    return useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: filtro.categoria?.id,
            titulo: filtro.titulo
        },
        onCompleted(data) {
            if (data.livros) {
                livrosVar(data.livros)
            }
        }
    })
}