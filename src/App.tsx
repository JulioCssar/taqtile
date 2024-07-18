import './App.css';
import { Button } from './components/button/button';
import { Input } from './components/input/input';
import { Constants } from './components/typography';

function App() {
  return (
    <div className='container-login'>
      <form className='container-form'>
        <h1 className='title'>Bem vindo(a) á Taqtile!</h1>
        <Input label= 'E-mail' />
        <Input label='Senha' />
        <Button expanded>Entrar</Button>
      </form>
    </div>
  );
}

export default App;
