import axios from 'axios';
import { useState } from "react";


export default function Frequencia() {
    const [ frase, setFrase ] = useState('');
    const [ car, setCar ] = useState('');
    const [ resp, setResp ] = useState('');

    async function Verificar() {
        const rst = await axios.get('http://localhost:5000/dia2/freqcaractere/:texto/'+frase+'/:caractere/'+car);
        const rsp = String(rst.data.frequencia);
        setResp(rsp);
    }

    return (
        <div>
            <h1>Frequência</h1>
            <div>
                <div>
                    Frase: <input type='text' value={frase} onChange={e => setFrase(e.target.value)} /> {frase} <br/>
                    Caractere: <input value={car} onChange={e => setCar(e.target.value)} /> {car} <br/>
                    <button onClick={Verificar}>Verificar</button>
                    {resp}
                </div>
            </div>

        </div>
    );
}