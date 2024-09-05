import './TituloPrincipal.css'

interface TituloPrincipalProps {
    texto: string
}

const TituloPrincipal = ({ texto }: TituloPrincipalProps) => {
    return(
        <h1 className='tituloPrincipal'>
            {texto}
        </h1>
    )
}

export default TituloPrincipal