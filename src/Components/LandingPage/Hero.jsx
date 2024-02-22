import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()
  
  const handleClick = ()=>{
    navigate("/log-in")
  }

  return (
    <div>
        <section className="text-gray-600 body-font lg:max-w-7xl mx-auto">
  <div className="container mx-auto flex px-5 pt-[5%] md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-3027.jpg?w=740&t=st=1708262816~exp=1708263416~hmac=8cc6fd9762b76a6834f735f4ce50a18edd78b5801b9fdf7af1eb88ed52f116b1"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your Gateway to 
        <br className="hidden lg:inline-block"/>Seamless Service Connections
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to ServiMatch, the ultimate destination for effortless service connections. Whether you're a service issuer in need of reliable contractors or a skilled professional seeking opportunities, ServiMatch simplifies the process. Our platform facilitates seamless matchmaking, ensuring that every project finds its perfect match. Join ServiMatch today and experience a new level of efficiency in service contracting.</p>
      <div className="flex justify-center">
        <button 
        onClick={handleClick}
        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Get Started
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
