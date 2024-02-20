import { useNavigate } from "react-router-dom"

export default function NewBidCard() {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate("/new-bid")
  }
  return (
    <>
        <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 my-10">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
      </div>
    </div>

    <div>

      <h3 className="mt-4 text-lg font-medium sm:text-xl">
        <p href="#" className="hover:underline"> Create a new bid</p>
      </h3>

      <p className="mt-1 text-sm text-gray-700">
      Easily post your project requirements to find the perfect contractor match.
      </p>

      <button type="button" className="px-8 py-2 my-3 font-medium rounded bg-indigo-500 text-gray-100" onClick={() => handleClick()}>Create</button>


    </div>
  </div>
</article>
    </>
)
}
