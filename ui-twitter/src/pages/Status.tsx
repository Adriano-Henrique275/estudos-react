import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabens pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return (
    <main className='status'>
      <Header title="Tweet" />

      <Tweet content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima id soluta corporis rem aperiam sint, commodi aspernatur aliquam saepe! Saepe, magni? Natus quidem a nemo nulla deserunt voluptatum provident.'/>
      
      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/Adriano-Henrique275.png" alt="Adriano Henrique" />
          <textarea 
          id='tweet' 
          placeholder='Tweet your answer'
          value={newAnswer}
          onKeyDown={handleHotkeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}