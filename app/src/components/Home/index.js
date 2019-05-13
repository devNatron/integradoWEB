import React from 'react'

import './styles.css'

export default () => (
    <main className="Content page">
        <div className="intro-wrapper">
            <p>Seja bem-vindo, vamos te auxiliar na escolha da sua universidade ! <br/> 
            Preecha os campos a seguir para filtramos as faculdades com seu perfil :) <br/>
            Campos com * (asterisco) são obrigatórios</p>
        </div>
        <div className="form-wrapper">
            <form>
                <label >Area desejada: </label>
                <input type="text" name="area" className="input-area"></input>

                <label >Estado de preferência: </label>
                <input type="text" name="area" className="input-area"></input>

                <label >Area desejada: </label>
                <input type="text" name="area" className="input-area"></input>
            </form>
        </div>
    </main >
);