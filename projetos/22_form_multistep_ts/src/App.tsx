import { GrFormNext, GrFormPrevious } from "react-icons/gr"

import ReviewForm from "./components/ReviewForm"
import Steps from "./components/Steps"
import Thanks from "./components/Thanks"
import UseForm from "./components/UseForm"

import { useState } from "react"
import { useForm } from "./hooks/useForm"

import './App.css'

type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string
}

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    });
  };

  const formComponents = [ 
    <UseForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks />
  ];

  const { currentStep, currentComponent, changeStep } = useForm(formComponents);


  return (
    <div className='App'>
      <div className='header'>
        <h2>Deixe aqui a sua avalição</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
