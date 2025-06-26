




'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function QuizPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [score, setScore] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('quiz-questions')
    console.log('🚀 Loaded quiz data:', saved)
    if (saved) {
      setQuestions(JSON.parse(saved))
    } else {
        console.warn(' No quiz data found — redirecting...')
      router.push('/')
    }
  }, [])

  if (!questions.length) return null

  const current = questions[index]
  const answers = [...current.incorrect_answers, current.correct_answer].sort()

  const handleAnswer = (answer) => {
    if (answer === current.correct_answer) setScore((prev) => prev + 1)
    setSelected(answer)
    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex((prev) => prev + 1)
        setSelected('')
      } else {
        router.push(`/result?score=${score + (answer === current.correct_answer ? 1 : 0)}&total=${questions.length}`)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 py-8">
      <div className="max-w-xl w-full h-200 bg-indigo-100 to-purple-200shadow rounded-lg p-16">
        <h2
          className="text-xl h-49 font-semibold text-blue-800 mb-6 max-w-full bg-purple-200 rounded-lg p-4 text-center flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: current.question }}
        />
        <div className="grid grid-cols-2  gap-12 mt-18">
          {answers.map((a) => (
            <button
              key={a}
              onClick={() => handleAnswer(a)}
              disabled={!!selected}
              className={`px-6 py-6 rounded-lg border font-large transition ${
                selected
                  ? a === current.correct_answer
                    ? 'bg-green-400 text-white border-green-600'
                    : a === selected
                    ? 'bg-red-400 text-white border-red-600'
                    : 'bg-gray-100 text-gray-700'
                  : 'hover:bg-purple-200'
              }`}
              dangerouslySetInnerHTML={{ __html: a }}
            />
          ))}
        </div>
        <p className="mt-16 text-gray-600">
          Spørgsmål {index + 1} / {questions.length}
        </p>
      </div>
    </div>
  )
}




