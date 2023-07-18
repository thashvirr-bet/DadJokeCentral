import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function BadJokes() {
  const [joke, setJoke] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes?limit=1'
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f3659fc915msh9a688d99814dca3p1de0d3jsnba586c0f67fc',
        'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
    }
  }

  const getBadJokes = () => {
    setIsLoading(true)
    const res =  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      setJoke(data[0].joke)
      console.log(data)
      setIsLoading(false)
    })    
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}>
      <div className='flex flex-col justify-center items-center text-center space-y-4 max-w-2xl'>
        <Image src="/images/DadJokeCentral.jpg" width={100} height={100} alt="Just A Man" className='w-[150px]'/>
        { isLoading ? <p>Hang on...</p> 
        :
        <div>
          <h1>{joke}</h1>
        </div>
        }
        
        <button onClick={getBadJokes}>Make me laugh!</button>
      </div>
    </main>
  )
}
