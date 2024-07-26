import React from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'

function Main() {
  return (
    <main>
      <Banner />
      <div className="w-full lg:-mt-40 -mt-[305px]  md:py-10">
        <Products />
      </div>
    </main>
  )
}

export default Main
