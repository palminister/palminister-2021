import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Project = () => {
  const mySiteData = require('../data/mysite.json')
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <div className="pb-10 bg-white">
      <div className="flex pt-10 pb-10 pl-10 sm:pl-20">
        <h1 className="text-5xl font-bold font-sourcecode" data-aos="fade">
          <span className="text-green-400">{'>'}</span>PROJECTS
        </h1>
      </div>
      <ul className="grid justify-center max-w-lg px-2 mx-auto my-0 lg:grid-cols-2 lg:max-w-none lg:px-4">
        {mySiteData.data.map((item) => (
          <li
            key={item.id}
            className="flex flex-col m-6 overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg cursor-pointer ow-span-3 hover:shadow-xl hover:scale-102 hover:opacity-90"
            data-aos="fade"
            data-aos-duration="1000"
          >
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="card">
                <Image
                  src={item.img}
                  width="1500"
                  height="788"
                  alt={item.name}
                />
                <div className="p-5 pt-3">
                  <h2 className="my-2 font-bold text-black ">{item.name}</h2>
                  <p className="my-1 text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Project
