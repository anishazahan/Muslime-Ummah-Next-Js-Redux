import React from 'react'

const WelcomeSection = () => {
  return (
    <div className="  px-5 lg:px-20 mx-auto xl:container">
      <div className="hero-content flex flex-col lg:flex-row w-full xl:space-x-4 ">

        <div className="w-full h-auto basis-6/12 mr-5">
          <img src={"https://i.ibb.co/2YpKphS/welcome-Img3.webp"} className=" rounded-lg shadow-2xl w-full " />
        </div>

        <div className=' space-y-6 basis-6/12'>
          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mt-10 md:mt-14 lg:mt-0 2xl:mt-10">Welcome to Muslime Ummah</h1>
            <p className="text-[18px] text-primary font-semibold mt-4 welcome-heading"> to Achieve Spiritual Goals
            </p>
          </div>
          <hr className={` md? welcomeHr:hidden`}></hr>
          <div className="text-gray-700 text-[15px] text-gray-600 space-y-3">
            <p className="">
              Namaz is broadcast the jaguar far darn dukooka burra before thus and before ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards.
            </p>
          
            <p className="">
              Consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards. Labore et dolore magna aliqua enim ad minim veniam quis nostrud exerc eitation nisi ut aliquip ex ea consequat duis aute irure doly reprehenderit.
            </p>
          </div>
          <button className="py-4 px-6 outline-0 bg-primary text-white text-xl rounded-sm hover:bg-secondary">Ask About Islam</button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection