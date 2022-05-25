import axios from "axios";

import { ueseState, useState } from "react"

export default function Index() {
    const [qtdInteiras, setQtdInteiras] = useState(0);
    const [qtdMeias, setQtdMeias] = useState(0);
    const [Dia, setDia] = useState('');
    const [Origem, setOrigem] = useState('');
    const [total, setTotal] = useState(0);

    async function calcuular( ) {
        const resp = await axios.post('http://localhost:5000/ingresso/',{
            qtdInteiras: qtdInteiras,
            qtdMeias: qtdMeias,
            Dia:Dia,
            Origem: Origem


        })
    }



    return (
        <main>
            <h1>Ingresso</h1>




        </main>
    )
}