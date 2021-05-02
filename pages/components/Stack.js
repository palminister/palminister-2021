import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

const Stack = () => {
  const myStackData = require('../data/mystack.json')
  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])
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
            <div
              key={stack.id}
              className="h-24 m-5 rounded-full shadow-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={stack.id * 200}
              data-aos-once="true"
            >
              <Image
                src={stack.img}
                alt={stack.name}
                width="96"
                height="96"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Stack
