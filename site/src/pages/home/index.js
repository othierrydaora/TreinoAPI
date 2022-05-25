import { Link } from "react-router-dom"

export default function Home() {
    return (
        <main>
            <h1>Home</h1>

            <ul>
                <li><Link to='/corPrimaria'>Cor Primária</Link></li>
                <li><Link to='/frequencia'>Frequencia</Link></li>
                <li><Link to='/ingresso'>Ingresso</Link></li>
                <li><Link to='/maiorNumero'>Maior Número</Link></li>
                <li><Link to='/soma'>Somar</Link></li>
                <li><Link to='/dobro'>Dobro de um Número</Link></li>
            </ul>




        </main>
    )
}