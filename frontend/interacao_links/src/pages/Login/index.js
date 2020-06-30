import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function Login() { 
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState('');
    
  const history = useHistory();
  async function handleLogin(e){
      e.preventDefault();
  
      try{
        const response = await api.post('sessao', { email, senha});

        localStorage.setItem('usuarioNome', response.data.nome);
        localStorage.setItem('usuarioEmail', email);
        localStorage.setItem('usuarioSenha', senha);
        
        history.push('/links')
      }catch(err){
        alert('Falha no login, tente novamente');
      }
    }

  return (
    <div className="login">
      <h1>Login</h1>
      <section>
        <form onSubmit={handleLogin}>

          <input type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />

          <input type="senha"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>

        </form>
      </section>
      <Link to="/cadastro">Faça seu cadastro</Link>

    </div>
    );
  }

