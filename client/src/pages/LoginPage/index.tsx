import { useState } from 'react'
import './index.css'

const LoginPage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='login-page-container'>
        <div className='login-left-side'>
        </div>
        <div className='login-right-side'>
            <h1>Sistema de Gerenciamento de Restaurante</h1>
            <form>
                <label>Email</label>
                <input type='email'></input>

                <label>Senha</label>
                <input type='password'></input>

                <button className='login-button' type='submit'>Entrar</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
