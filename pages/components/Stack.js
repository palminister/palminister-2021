import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Stack = () => {
  const myStackData = require('../data/mystack.json')
  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])
  const techStyle = 'rounded-full shadow-lg h-24 m-5'
  return (
    <div className="bg-white">
      <div className="flex justify-center py-10">
        <h1
          className="text-5xl font-bold font-sourcecode"
          data-aos="fade"
          data-aos-duration="600"
        >
          <span className="text-green-400">{'>'}</span>TECH STACK
        </h1>
      </div>
      <div className="flex justify-center pb-10">
        <div className="flex flex-wrap justify-center max-w-2xl gap-7">
          {myStackData.data.map((stack) => (
            <img
              src={stack.img}
              alt={stack.name}
              className={techStyle}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={stack.id * 200}
              data-aos-once="true"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Stack
