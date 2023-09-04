import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import ReviewForm from './components/ReviewForm'
import Steps from './components/Steps'
import Thanks from './components/Thanks'
import UserForm from './components/UserForm'

import { useForm } from './hooks/useForm'
import { useState } from 'react'

import './App.css'

const formTemplate = { name: "", email: "", review: "", comment: "" }

function App() {
  const [data, setData] = useState(formTemplate)

  const updatefieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [ 
    <UserForm key={0} data={data} updatefieldHandler={updatefieldHandler} />,
    <ReviewForm key={1} data={data} updatefieldHandler={updatefieldHandler} />,
    <Thanks key={2} data={data} /> 
  ]
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && 
              (
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )
            }
            {!isLastStep ? 
              (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : 
              (
                <button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>
              )
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
