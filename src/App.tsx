import { useState } from 'react';
import './App.css';
import { Button } from './components/button/button';
import { Input } from './components/input/input';

interface Credentials {
  errorEmail?: string;
  errorPassword?: string;
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errosLoginValidation, setErrosLoginValidation] = useState<Credentials>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errorLogin: Credentials = {};

    function validation(email: string) {
      if (!email) {
        errorLogin.errorEmail = 'E-mail é obrigatório';
      } else if (!/\S+@\S+.\S+/.test(email)) {
        errorLogin.errorEmail = 'E-mail é inválido';
      }

      if (!/^.{7}$/.test(password)) {
        errorLogin.errorPassword = 'Senha deve ter exatamente 7 caracteres';
      }

      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7}$/.test(password)) {
        errorLogin.errorPassword = 'Senha deve ter exatamente 7 caracteres e conter pelo menos um dígito e uma letra';
      }

      setErrosLoginValidation(errorLogin);
    }
    validation(email);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'E-mail') {
      setEmail(event.target.value);
    }
    if (event.target.name === 'Password') {
      setPassword(event.target.value);
    }
  }

  console.log(password);
  return (
    <div className='container-login'>
      <form onSubmit={handleSubmit} className='container-form'>
        <h1 className='title'>Bem vindo(a) á Taqtile!</h1>
        <Input error={errosLoginValidation.errorEmail} name='E-mail' onChange={handleInputChange} label='E-mail' />
        <Input error={errosLoginValidation.errorPassword} name='Password' onChange={handleInputChange} label='Senha' />
        <Button expanded>Entrar</Button>
      </form>
    </div>
  );
}

export default App;
