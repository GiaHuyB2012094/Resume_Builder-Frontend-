import resume from '../assets/resume.svg'
const Header = () => {
  return (
    <div className="w-full flex justify-around align-item-center min-h-screen py-14 px-8 gap-8 bg-cyan-0 text-center">
        <div className=""> 
            <p className="my-0 text-black mx-auto max-w-[500px] text-5xl font-semibold">
                A <span className="text-indigo-500">Resume</span> that stands out!
            </p>
            <p className="my-0 text-black mx-auto max-w-[500px] text-5xl font-semibold">
                Make your own resume. <span className="text-indigo-500     ">It's free</span>
            </p>
        </div>
        <div className="">
            <img className="w-[400px]"src={resume} alt="Resume"></img>
        </div>
    </div>
  )
}

export default Header
