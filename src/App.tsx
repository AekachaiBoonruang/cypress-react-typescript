import './App.css';
import {RegisterCard} from './component/Register/RegisterForm'
import {LoginCard} from './component/Login/LoginForm'

function App() {
  return (
    <div className="App" >
        <LoginCard />
        <RegisterCard />
    </div>
  );
}

export default App;
