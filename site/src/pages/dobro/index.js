import axios from "axios";
import { useState } from "react";

export default function Dobro() {

    const [numba, setNumba] = useState(0);
    const [resultado, setResultado] = useState(0);

    async function Dobro() {
        const resp = await axios.get('http://localhost:5000/dobro/:numero' );

        setResultado(resp.data.resultado);

}
    
return (
    <main>
        <h1>Somar Números</h1>
    
        <div>
            Número:<input type='text' value= {numba} onChange={e => setNumba(e.target.value)} />
        </div>

        <div>
            <button onClick={Dobro}>Verificar</button>
        </div>
        
        <div>
            O dobro desse número é {resultado}
        </div>
    </main>
)}