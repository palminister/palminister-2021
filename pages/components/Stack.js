import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Stack = () => {
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
          <img
            src="/techstacks/React.png"
            alt="React"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-once="true"
          />
          <img
            src="/techstacks/Next.js.png"
            alt="Next"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-delay="200"
            data-aos-once="true"
          />
          <img
            src="/techstacks/Tailwind.png"
            alt="Tailwind"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-delay="400"
            data-aos-once="true"
          />
          <img
            src="/techstacks/Node.png"
            alt="Node"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-delay="500"
            data-aos-once="true"
          />
          <div className="hidden sm:flex " style={{ flexBasis: 50 }}></div>
          <img
            src="/techstacks/Java.png"
            alt="Java"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-once="true"
          />
          <img
            src="/techstacks/Python.png"
            alt="Python"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-delay="200"
            data-aos-once="true"
          />
          <img
            src="/techstacks/Pandas.png"
            alt="Pandas"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-delay="400"
            data-aos-once="true"
          />
          <div className="hidden sm:flex " style={{ flexBasis: 50 }}></div>
          <img
            src="/techstacks/Figma.png"
            alt="Figma"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-once="true"
          />
          <img
            src="/techstacks/Notion.png"
            alt="Notion"
            className={techStyle}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="150"
            data-aos-delay="200"
            data-aos-once="true"
          />
        </div>
      </div>
    </div>
  )
}
export default Stack
