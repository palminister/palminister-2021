import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Modal = ({ selectExperience, setSelectExperience }) => {
  const myExperienceData = require('../data/myexperience.json')
  const currentExperience = myExperienceData.data.filter((item) =>
    item.id == selectExperience ? item : null
  )[0]
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])
  return (
    <>
      {(selectExperience != -1) & (selectExperience != undefined) ? (
        <div
          className="fixed top-0 left-0 z-50 block w-full h-full"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <div className="flex w-screen h-screen">
            <div className="z-20 flex h-screen p-5 m-auto font-noto md:p-20">
              {/* md:p-20 lg:p-32 */}
              <div className="relative max-w-4xl overflow-y-auto align-middle bg-white shadow-2xl bg-clip-padding rounded-xl">
                <div className="sticky top-0">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectExperience(-1)
                    }}
                    className="absolute right-0 z-50 inline-flex items-center float-right p-2 m-5 bg-white border rounded-full hover:bg-pink-100 border-pink-50 hover:border-pink-300 hover:text-pink-900 focus:outline-none hover:cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                  </button>
                </div>
                <div
                  // className={
                  //   currentExperience.img.length != 0
                  //     ? 'grid w-full grid-cols-1 lg:grid-cols-2'
                  //     : 'grid w-full grid-cols-1'
                  // }
                  className="grid w-full grid-cols-1"
                >
                  <div>
                    {currentExperience.img.length != 0 ? (
                      <img
                        src={currentExperience.img}
                        alt={currentExperience.name}
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="p-10">
                    <h1 className="text-xl font-bold">
                      {currentExperience.name}
                    </h1>
                    <p className="font-semibold ">
                      {currentExperience.company} [{currentExperience.date}]
                    </p>
                    <ul className="py-5 my-1 text-gray-500 text-md">
                      {currentExperience.desc.map((d) => (
                        <li className="pb-2">
                          {' '}
                          <span className="pr-2 text-green-400">{'>'}</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    {currentExperience.url.length != 0 ? (
                      <div>
                        <p className="font-semibold ">Related Articles:</p>
                        <ul className="text-blue-500 ">
                          {' '}
                          {currentExperience.url.map((url) => (
                            <li>
                              <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ overflowWrap: 'break-word' }}
                              >
                                <span className="pr-2 text-green-400">
                                  {'>'}
                                </span>
                                {url}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
export default Modal
