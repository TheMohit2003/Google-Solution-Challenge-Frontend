import React from 'react'

export default function Features() {
    const featureCards = 
    [
        {
          "id": 1,
          "title": "Connect",
          "info": "Seamlessly connect service issuers with contractors, facilitating efficient collaborations for successful project outcomes.",
          "svg_link": "https://example.com/bidbridge.svg"
        },
        {
          "id": 2,
          "title": "Matchmaking",
          "info": "Utilize our advanced matchmaking algorithms to find the perfect match for your project needs, ensuring compatibility and reliability.",
          "svg_link": "https://example.com/servimatch.svg"
        },
        {
          "id": 3,
          "title": "Registration",
          "info": "Simplify the onboarding process with a single-page registration form, tailored to your role as either an issuer or a vendor, ensuring a hassle-free start.",
          "svg_link": "https://example.com/registration.svg"
        },
        {
          "id": 4,
          "title": "Profiles",
          "info": "Access detailed vendor profiles, including years of experience, team size, and past work, to make informed decisions when selecting contractors.",
          "svg_link": "https://example.com/vendor_profiles.svg"
        },
        {
          "id": 5,
          "title": "Bidding",
          "info": "Engage in live bidding actions with real-time updates, allowing issuers to receive competitive bids and vendors to seize new opportunities efficiently.",
          "svg_link": "https://example.com/realtime_bidding.svg"
        },
        {
          "id": 6,
          "title": "Communication",
          "info": "Stay informed throughout the project lifecycle with automated emails and website notifications, ensuring seamless communication between all parties involved.",
          "svg_link": "https://example.com/automated_communication.svg"
        }
      ]
      
      
  return (
  <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Features</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Empowering Your Service Journey</h1>
    </div>
    <div className="flex flex-wrap -m-4 lg:w-max-5xl mx-auto">
    {featureCards.map(ele =>(
        <div className="p-4 md:w-1/3" key={ele.id}>
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">{ele.title}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{ele.info}</p>
          </div>
        </div>
      </div>
    ))} 
  </div>
  </div>
</section>
  </div>
  )
}
