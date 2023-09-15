import { createContext } from 'react';

import './App.css'
import Destructuring, { Category } from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

type textOrNull = string | null;

interface IAppContext{
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  const name: string = "Alexandre";
  const age: number = 30;
  const isWorking: boolean = true;
  const myText: textOrNull = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 3
  };

  const userGreeting = (name: string): string =>{
    return `Olá ${name}`;
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <h1>React com TypeScript</h1>
        <div>
          <p>Nome: {name}</p>
          <p>Idade: {age}</p>
          {isWorking && <p>Está trabalhando</p>}
        </div>
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name='Segundo' />
        <Destructuring title='Destructuring' content='Desestruturando props' commentsQty={12} tags={["js", "c#", "python", "java"]} category={Category.PY} />
        <State />
        <div>
          <p>{myText}</p>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
