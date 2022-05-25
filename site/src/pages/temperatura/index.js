import axios from "axios"
import { useState } from "react"

export default function Temperatura() {
    const [temperatura, setTemperatura] = useState(0);
    const [resposta, setResposta] = useState('');

    async function Febre() {
        const resp = await axios.get('http://localhost:5000/febre/:temperatura/' );
        
        if (resp.data.temperatura > 37) {
            setResposta('Você está com febre!');
        }
        else {
            setResposta('Sua temperatura está normal');
        }
}
    return (
        <main>
            <h1>Temperatura Corporal</h1>

        <div>
            Insira sua temperatura:<input type='text' value= {temperatura} onChange={e => setTemperatura(e.target.value)} />
        </div>

        <div>
            <button onClick={Febre}>Verificar</button>
        </div>
            <div>
               {resposta}
            </div>
        </main>
    )
}