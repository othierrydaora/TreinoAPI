import axios from "axios"
import { useState } from "react"

export default function Index() {
    const [cor,setCor] = useState('');
    const [resposta, setResposta] = useState('');

    async function corPrimariaouNao() {
        const resp = await axios.get('http://localhost:5000/dia2/corprimaria/:cor/' + cor);
        
        if (resp.data.primaria === true) {
            setResposta('Sim');
        }
        else {
            setResposta('Não');
        }
    }
    return (
        <main>
            <h1>Cor Primária</h1>

            <div>
                Cor:<input type='text' value= {cor} onChange={e => setCor(e.target.value)} />
            </div>

            <div>
                <button onClick={corPrimariaouNao}>Verificar</button>
            </div>
            <div>
                E cor Primária?
            </div>
        </main>
    )
}