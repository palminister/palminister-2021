import Image from 'next/image'
import 'aos/dist/aos.css'

const Intro = ({ offsetY }) => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center w-screen h-screen bg-white">
        <div className="w-screen pl-10 sm:w-1/2 sm:pl-20">
          <h1 className="text-6xl font-bold font-sourcecode">
            HELLO, I’M <br />
            <span className="text-5xl text-blue-600 sm:text-6xl">
              PALM <br />
              JUMNONGRAT
            </span>
          </h1>
          <div className="flex mt-4">
            <span className="pr-2 text-green-400">{'>'}</span>
            <p className="max-w-sm font-normal font-sourcecode ">
              a generalist who strives to craft
              <span
                className="hidden lg:flex "
                style={{ flexBasis: 50 }}
              ></span>{' '}
              meaningful impacts and solutions.
            </p>
          </div>
          <div className="flex justify-center w-full mt-10">
            <a
              href="https://drive.google.com/file/d/1VxSSnmfR51srovo3_A-wFhZv4w2n2O6x/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="z-20 flex items-center justify-center w-32 px-8 py-3 text-base font-medium text-blue-700 transition ease-in bg-blue-100 border border-transparent rounded-lg cursor-pointer hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div
        className="absolute right-0 top-20"
        style={{ transform: `translateY(${offsetY * -0.5}px)` }}
      >
        <Image
          src="/me-fall-c.png"
          width="856"
          height="692"
          alt="me"
          priority="true"
        ></Image>
      </div>
    </div>
  )
}
export default Intro
