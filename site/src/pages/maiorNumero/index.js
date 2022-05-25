import axios from "axios";
import { useState } from "react"

export default function MaiorNumero() {
    const [numbas, setNumbas] = useState();
    const [maior, setMaior] = useState();

    async function Detc() {
        const rsp = axios.post(`http://localhost:5000/dia2/maior`, {
            numeros: numbas
        });
        setMaior(rsp.data.maior);
    }
    
    return (
        <main>
            <h1>Maior Número</h1>
            <div>
                Insira os números: <input value={numbas} onChange={e => setNumbas(e.target.value)}/> <br/>
                <button onClick={Detc}>Verificar</button> <br/>
                O maior número é: {maior}
            </div>
        </main>
    )
}