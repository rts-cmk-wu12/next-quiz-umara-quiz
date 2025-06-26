


/*'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function HomePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const startQuiz = async () => {
    setLoading(true)
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=24&difficulty=easy&type=multiple')
    const data = await res.json()
    localStorage.removeItem('quiz-questions')
    localStorage.setItem('quiz-questions', JSON.stringify(data.results))
    router.push('/quiz')
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-purple-200 p-6 text-center">
      <h1 className="text-4xl font-bold text-indigo-800 mb-4">Well come  To Quiz!</h1>
      <p className="text-lg text-gray-700 mb-8">Are You Ready</p>
      <button
        onClick={startQuiz}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
      >
        {loading ? 'Chosse Questions...' : 'Start Quiz'}
      </button>
    </div>
  )
}*/



import Link from 'next/link'


export default function HomePage() {
  

  const startQuiz = async () => {
    
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=24&difficulty=easy&type=multiple')
    const data = await res.json()
    localStorage.removeItem('quiz-questions')
    localStorage.setItem('quiz-questions', JSON.stringify(data.results))
    
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-purple-200 p-6 text-center">
      <h1 className="text-4xl font-bold text-indigo-800 mb-4">Well come  To Quiz!</h1>
      <p className="text-lg text-gray-700 mb-8">Are You Ready</p>
      <Link href="/quiz" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition">
        Start Quiz
      </Link>
    </div>
  )
}





