import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Experience = ({ setSelectExperience }) => {
  const myExperienceData = require('../data/myexperience.json')
  useEffect(() => {
    Aos.init({ duration: 400 })
  }, [])
  return (
    <div className="pb-10 bg-white">
      <div className="flex p-10 sm:pl-20">
        <h1
          className="text-5xl font-bold font-sourcecode"
          data-aos="fade"
          data-aos-duration="600"
        >
          <span className="text-green-400">{'>'}</span>EXPERIENCE
        </h1>
      </div>
      <div className="grid px-6 m-auto gap-7 md:grid-cols-3 lg:px-20">
        {myExperienceData.data.map((experience) => (
          <button
            key={experience.id}
            className="p-6 text-left transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl focus:outline-black "
            data-aos="fade-up"
            data-aos-delay={experience.id * 200}
            data-aos-once="true"
            onClick={() => setSelectExperience(experience.id)}
          >
            <div className="flex">
              <div className="justify-center flex-1">
                <p className="font-bold">{experience.name}</p>
                <p>{experience.company}</p>
                <p className="text-sm text-gray-500">{experience.date}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
export default Experience
