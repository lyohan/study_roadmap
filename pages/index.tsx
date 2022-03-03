import type { NextPage } from 'next'
import categoryList from '../mocks/categoryList.json'
import categoryDetail from '../mocks/categoryDetail.json'
import { useState } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  const [acticeCategory, setActiveCategory] = useState<string | null>(null)
  const renderCategory = () =>
    categoryList.map(({ id, name }) => {
      const isActive = acticeCategory === id
      return (
        <button
          key={id}
          className={`rounded-2xl bg-gray-100 py-1 px-3 ${
            isActive ? 'border-2 border-yellow-400' : ''
          }`}
          onClick={() => setActiveCategory(acticeCategory ? null : id)}
        >
          {name}
        </button>
      )
    })
  
  const categoryDetailCopy: any = { ...categoryDetail }
  return (
    <div className="mt-10 ml-10">
      <header>
        <h1>관심있는 분야가 있으신가요?</h1>
        <div className="mt-4 space-x-4">{renderCategory()}</div>
      </header>
      <main>
        <section className="mt-6">
          {acticeCategory && (
            <>
              <h3>{categoryDetailCopy[acticeCategory].title}</h3>
              <p>{categoryDetailCopy[acticeCategory].description}</p>
            </>
          )}
          <section className="mt-6">
            {acticeCategory && (
              <Link href='/detail'>
                <a>
                  <button
                    className="bg-yellow-400 py-4 px-10"
                    // onClick={nextStep}
                  >
                    골랐어요
                  </button>
                </a>
              </Link>
            )}
          </section>
        </section>
      </main>
    </div>
  )
}

export default Home
