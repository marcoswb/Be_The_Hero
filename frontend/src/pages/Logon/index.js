import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'
import api from '../../service/api'
import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'

export default function Logon() {
    const history = useHistory()
    const [id, setId] = useState('')

    async function handleLogin(e) {
        e.preventDefault()

        try{
            const response = await api.post('/session', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch(err) {
            alert('Falha no Login!')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                <h1>Faça seu Logon</h1>

                <input 
                    type="text" 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho Cadastro
                </Link>
                </form>
            </section>

            <img src={heroesImage} alt="Heroes"/>
        </div>
    )
}