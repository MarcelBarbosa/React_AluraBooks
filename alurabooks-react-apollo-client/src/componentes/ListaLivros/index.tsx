import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"
import './ListaLivros.css'
import { AbCampoTexto } from "ds-alurabooks"
import { useEffect, useState } from "react"
import { useLivros } from "../../graphql/livros/hook"
import { useReactiveVar } from "@apollo/client"
import { filtroLivrosVar, livrosVar } from "../../graphql/livros/state"

interface ListaLivroProps {
  categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivroProps) => {
  // const { data: produtos } = useQuery({queryKey: ['buscaLivrosPorCategoria', categoria], queryFn: () => obterProdutosCategoria(categoria)})

  const [textoBusca, setTextoBusca] = useState('')

  useEffect(() => {
    filtroLivrosVar({
      ...filtroLivrosVar(),
      titulo: textoBusca.length >= 3 ? textoBusca : ''
    })
  }, [textoBusca])

  filtroLivrosVar({
    ...filtroLivrosVar(),
    categoria
  })

  const livros = useReactiveVar(livrosVar)

  // const { data, refetch } = useLivros(categoria)
  useLivros()

  // const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
  //   evento.preventDefault()
  //   if (textoBusca) {
  //     // refetch({
  //     //   categoriaId: categoria.id,
  //     //   titulo: textoBusca
  //     // })
  //   }
  // }

  return (
    <section>
      <form style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'center' }}>
        <AbCampoTexto value={textoBusca} onChange={setTextoBusca} placeholder='Digite o título do livro' />
      </form>
      <div className="livros">
        {livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
      </div>
    </section>
  )
}

export default ListaLivros