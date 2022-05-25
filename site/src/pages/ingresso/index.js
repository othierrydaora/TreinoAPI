import axios from "axios";

import { useState } from "react"

export default function Ingresso() {
    const [qtdInteiras, setQtdInteiras] = useState(0);
    const [qtdMeias, setQtdMeias] = useState(0);
    const [Dia, setDia] = useState('');
    const [Origem, setOrigem] = useState('');
    const [total, setTotal] = useState(0);

    async function calcular( ) {
        const resp = await axios.post('http://localhost:5000/ingresso/',{
            qtdInteiras: qtdInteiras,
            qtdMeias: qtdMeias,
            Dia:Dia,
            Origem: Origem
        })
        setTotal(resp.data.total);
    }

    return (
        <main>
            <h1>Ingresso</h1>
        <div>
            Qtd.Inteiras: <input type='text' value={qtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))} />
        </div>

        <div>
            Qtd.Meias: <input type='text' value={qtdMeias} onChange={e => setQtdMeias(Number(e.target.value))} />
        </div>

        <div>
            Dia: <input type='text' value={Dia} onChange={e => setDia(Number(e.target.value))} />
        </div>

        <div>
            Origem: <input type='text' value={Origem} onChange={e => setOrigem(Number(e.target.value))} />
        </div>

        <div>
            <button onClick={calcular}>Calcular</button>
        </div>

        <div>
            O total é R$ {total}
        </div>
    </main>
    )
}