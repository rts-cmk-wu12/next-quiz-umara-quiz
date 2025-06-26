


/*'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function ResultPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const score = searchParams.get('score')
  const total = searchParams.get('total')
  

  return (

    
    <div className="max-w-xl w-full h-200 bg-indigo-100 to-purple-200shadow rounded-lg p-16 flex flex-col items-center justify-center text-center m-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Result</h2>
      <p className="text-lg mb-6">
        You have <strong>{score}</strong> out of <strong>{total}</strong> correct answers!
      </p>
      <button
        onClick={() => router.push('/')}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
      >
        Start new  quiz
      </button>
    </div>
  )
}*/



'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function ResultPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const score = Number(searchParams.get('score'))
  const total = searchParams.get('total')

  const showConfetti = score >= 3

  return (
    <div
      className={`relative max-w-xl w-full h-auto min-h-[800px] p-16 rounded-lg m-auto flex flex-col items-center justify-center text-center bg-indigo-100 shadow ${
        showConfetti ? 'bg-[url("/gif.jpg")] bg-cover bg-center bg-no-repeat' : ''
      }`}
    >
      
      {showConfetti && (
        <div className="absolute inset-0 bg-white opacity-80 rounded-lg z-0"></div>
      )}

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Result</h2>
        <p className="text-lg mb-6">
          You have <strong>{score}</strong> out of <strong>{total}</strong> correct answers!
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
        >
          Start new quiz
        </button>
      </div>
    </div>
  )
}



/*import Link from 'next/link'

export default function ResultPage() {
 
  
    const params = new URLSearchParams()
  const score = Number(params.get('score'))
  const total = params.get('total')

  const showConfetti = score >= 3

  return (
    <div
      className={`relative max-w-xl w-full h-auto min-h-[800px] p-16 rounded-lg m-auto flex flex-col items-center justify-center text-center bg-indigo-100 shadow ${
        showConfetti ? 'bg-[url("/gif.jpg")] bg-cover bg-center bg-no-repeat' : ''
      }`}
    >
      
      {showConfetti && (
        <div className="absolute inset-0 bg-white opacity-80 rounded-lg z-0"></div>
      )}

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Result</h2>
        <p className="text-lg mb-6">
          You have <strong>{score}</strong> out of <strong>{total}</strong> correct answers!
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
        >
          Start new quiz
        </Link>
      </div>
    </div>
  )
}*/

