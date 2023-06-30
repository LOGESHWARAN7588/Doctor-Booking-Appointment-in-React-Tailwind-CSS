import React from "react";

const Newsletter = () => {
  return (
    <div className=" py-5 px-4 bg-[#252B42] ">
      <div className=" py-16 text-white px-4 ">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
              Get In Touch
            </h1>
            <p className="max-w-[540px]">
              The gradual accumulation of information about atomic and
              small-scale behaviour during the first quarter of the 20th{" "}
            </p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full rounded-md">
              <input
                className="p-3 flex w-full  text-black"
                type="email"
                placeholder="Your Email"
              />
              <button className="bg-[#23A6F0] text-white  font-medium w-[200px]  my-6 px-5 py-3">
                Subscribe
              </button>
            </div>
            <p>
              We care bout the protection of your data. Read our{" "}
              <span className="text-[#00df9a]">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
