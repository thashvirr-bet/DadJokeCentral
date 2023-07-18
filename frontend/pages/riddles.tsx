import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Riddles() {
  const [title, setTitle] = useState()
  const [question, setQuestion] = useState()
  const [answer, setAnswer] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const url = 'https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles'
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f3659fc915msh9a688d99814dca3p1de0d3jsnba586c0f67fc',
        'X-RapidAPI-Host': 'riddles-by-api-ninjas.p.rapidapi.com'
    }
  }

  const getRiddle = () => {
    setShowAnswer(false)
    setIsLoading(true)
    const res =  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      setTitle(data[0].title)
      setQuestion(data[0].question)
      setAnswer(data[0].answer)
      setIsLoading(false)
    })    
  }

  const showAnswerClick = () => {
    setShowAnswer(true)
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}>
      <div className='flex flex-col justify-center items-center text-center space-y-4 max-w-2xl'>
        {/* <Image src="/images/DadJokeCentral.jpg" width={100} height={100} alt="Just A Man" className='w-[150px]'/> */}
        { isLoading ? <p>Hang on...</p> 
        :
        <div>
            <h2>Riddle:</h2>
            <p>{question}</p>
            {showAnswer == true &&
                <div>
                    <h1>Answer:</h1>
                    <p>{answer}</p>
                </div>
            }
            
        </div>
        }
        
        {
            showAnswer == true ? <button onClick={getRiddle}>Tell me a riddle!</button>
            :
            <button onClick={showAnswerClick}>Show me the answer</button>
        }

        <button onClick={getRiddle}>Tell me a riddle!</button>
        <button onClick={showAnswerClick}>Show me the answer</button>
      </div>
    </main>
  )
}
