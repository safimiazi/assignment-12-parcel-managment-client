import React from 'react';

const Help = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24 card-color rounded text-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
              Our Team Members
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl ">
              With a passion for problem-solving and a strong commitment to
              quality, our team members collaborate effortlessly, leveraging their
              diverse skill sets to deliver robust and cutting-edge software
              solutions that meet and exceed client expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
              <img
                className="w-full h-[300px]"
                src="https://i.ibb.co/f1g3qg8/safi1.jpg"
                alt="ceo"
              />
            </div>
            <div>
              <img
                className="w-full h-[300px]"
                src="https://i.ibb.co/f8Ps74Y/MD-Mohebulla-Miazi.jpg"
                alt="man-with-chair"
              />
            </div>
            <div>
              <img
                className="w-full h-[300px]"
                src="https://i.ibb.co/b2B39wS/safi.jpg"
                alt="businesswoman"
              />
            </div>
          </div>
          <div className="mt-8 text-center md:mt-16">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Join our team
            </a>
          </div>
        </div>
      </section>
    );
};

export default Help;