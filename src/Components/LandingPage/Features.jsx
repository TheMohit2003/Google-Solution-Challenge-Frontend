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

      {/* dashboard feature section */}
      <section className=" text-gray-800">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">Issuers Dashboard</h3>
				<p className="mt-3 text-lg text-gray-600">Discover seamless project management with our Issuer Dashboard. </p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Create Services</h4>
							<p className="mt-2 text-gray-600">Easily create new services tailored to your needs</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Track Applicants</h4>
							<p className="mt-2 text-gray-600">Effortlessly track all applicants vying to provide their services</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Live Bidding</h4>
							<p className="mt-2 text-gray-600">engage in live bidding for each service, ensuring competitive pricing and optimal contractor selection.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://res.cloudinary.com/dx7uxfrne/image/upload/v1708870765/assets/newService_wfvrct.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">Vendor Dashboard</h3>
					<p className="mt-3 text-lg text-gray-600">Welcome to our Vendor Dashboard, your gateway to valuable project opportunities.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi text-gray-900">Browse Services</h4>
								<p className="mt-2 text-gray-600">Browse through a comprehensive list of available services and place competitive bids</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi text-gray-900">Watchlist Tracking</h4>
								<p className="mt-2 text-gray-600">keep track of services you're interested in by adding them to your watchlist</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi text-gray-900">Seize Opportunities</h4>
								<p className="mt-2 text-gray-600">Seize opportunities that align with your expertise and preferences.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://res.cloudinary.com/dx7uxfrne/image/upload/v1708870763/assets/marketPlace_uxnpn2.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
  </div>
  )
}
