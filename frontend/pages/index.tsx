import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// async function getDadJokes() {
//   const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'f3659fc915msh9a688d99814dca3p1de0d3jsnba586c0f67fc',
//       'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
//     }
//   };

//   const res = await fetch(url, options)
//   if(!res.ok){
//     throw new Error('Failed to fetch')
//   }

//   return res.json()

// }

export default function Home() {
  const [setup, setSetup] = useState()
  const [punchline, setPunchline] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const url = 'https://dad-jokes.p.rapidapi.com/random/joke'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f3659fc915msh9a688d99814dca3p1de0d3jsnba586c0f67fc',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  }

  // const getDadJokes = async () => {
  //   const res = await fetch(url, options)
  //   const data = await res.json()
  //   setSetup(data.body[0].setup)
  //   setPunchline(data.body[0].punchline)
  //   // console.log(data)
  //   console.log(setup)
  //   console.log(punchline)
  // }

  const getDadJokes = () => {
    setIsLoading(true)
    const res =  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      setSetup(data.body[0].setup)
      setPunchline(data.body[0].punchline) 
      setIsLoading(false)
    })


    // const data = res.json()
    // setSetup(data.body[0].setup)
    // setPunchline(data.body[0].punchline)
    // console.log(data)
    console.log(setup)
    console.log(punchline)
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}>
      <div className='flex flex-col justify-center items-center text-center space-y-4 max-w-2xl'>
        <Image src="/images/DadJokeCentral.jpg" width={100} height={100} alt="Just A Man" className='w-[150px]'/>
        { isLoading ? <p>Hang on...</p> 
        :
        <div>
          <h2>{setup}</h2>
          <h1>{punchline}</h1>
        </div>
        }
        
        <button onClick={getDadJokes}>Make me laugh!</button>
      </div>
    </main>
  )
}
