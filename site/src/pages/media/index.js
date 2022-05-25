import axios from "axios";

import { useState } from "react"

export default function Media() {
    const [numUm, setNumUm] = useState(0);
    const [numDois, setNumDois] = useState(0);
    const [numTres, setNumTres] = useState(0);
    const [nota, setNota] = useState(0);

    async function calcular( ) {
        const resp = await axios.post('http://localhost:5000/media/',{
            numUm: numUm,
            numDois: numDois,
            numTres:numTres,

        })
        setNota(resp.data.nota);
    }

    return (
        <main>
            <h1>Ingresso</h1>
        <div>
            Primeira Nota: <input type='text' value={numUm} onChange={e => setNumUm(Number(e.target.value))} />
        </div>

        <div>
            Qtd.Inteiras: <input type='text' value={numDois} onChange={e => setNumDois(Number(e.target.value))} />
        </div>

        <div>
            Qtd.Inteiras: <input type='text' value={numTres} onChange={e => setNumTres(Number(e.target.value))} />
        </div>


        <div>
            <button onClick={calcular}>Calcular</button>
        </div>

        <div>
            A média da nota é {nota}
        </div>
    </main>
    )
}