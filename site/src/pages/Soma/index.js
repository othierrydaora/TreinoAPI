import axios from "axios";

export default function Soma () {

    const [numba, setNumba] = useState(0);
    const [numbar, setNumbar] = useState(0);
    const [resultado, setResultado] = useState(0);

    async function Somar() {
        const resp = await axios.get('http://localhost:5000/somar/' );

        setResultado(resp.data.resultado);

}
    

        return (
            <main>
                <h1>Somar Números</h1>
    
                <div>
                    Primeiro Número:<input type='text' value= {numba} onChange={e => setNumba(e.target.value)} />
                </div>

                <div>
                    Segundo Número:<input type='text' value= {numbar} onChange={e => setNumbar(e.target.value)} />
                </div>
    
                <div>
                    <button onClick={Somar}>Verificar</button>
                </div>
                <div>
                    O resultado da soma desses dois números é:{resultado}
                </div>
            </main>
        )

}