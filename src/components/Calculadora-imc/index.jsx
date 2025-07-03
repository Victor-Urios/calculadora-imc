import { useState } from "react";
import "./calculadora-imc.css"

const CalculadoraIMC = () => { 
    const [altura, setaltura] = useState(0); 
    const [peso, setpeso] = useState(0);
    const [imc, setImc] = useState('');
    const [mensagem, setMensagem] = useState('');

    let calculaIMC = () => {
        if (peso === 0 || altura === 0) {
            alert('Coloque um valor de peso e altura!')
        } else {
            let imc = (peso / (altura * altura))
            setImc(imc.toFixed(2))

            if (imc <= 18.49) {
            setMensagem('Você esta magro de mais grau 0')
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            setMensagem('Você esta no peso ideal grau 0')
        }
        else if (imc >= 25 && imc <= 29.9) { 
            setMensagem('Você esta em sobrepeso! grau I')
        }
            else if (imc >= 30 && imc <= 39.9) { 
            setMensagem('Você esta obeso! grau II')
        }
            else if (imc >= 40) { 
            setMensagem('Você esta gravemente obeso! grau III')
        }
        }
    }
        return (
            <div className="app">
                <div className="container">
            <form> 
                <h2 className="center">Calculadora IMC</h2>
                <h3>Altura em metros ex: 1.70</h3>
                <input value={altura} type="number" placeholder="Altura" onChange={(e)  => setaltura(e.target.value)}/>
                <h3>Peso em kilograma</h3>
                <input value={peso} type="number" placeholder="Peso em kilograma" onChange={(e) => setpeso(e.target.value)}/>
                <p>
                    <button className="btn" onClick={calculaIMC} type="button">Calcular</button>
                </p>
                <div className="seu-imc">
                    <h3>Seu imc é: {imc}</h3>
                    <h3>{mensagem}</h3>
                </div>
            </form>
            </div>
        </div>
        )
    }

    



export default CalculadoraIMC