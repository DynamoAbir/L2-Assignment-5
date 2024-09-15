const FacilityCard = () => {
  return (
    <div className="mb-4 p-0 sm:p-4">
      {" "}
      {/* Card container */}
      <div className="group h-full border-opacity-60 border-2 rounded-lg bg-secondary border-primary overflow-hidden shadow-lg">
        {/* :CARD IMAGE */}
        <img
          className="lg:h-64 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
          src="https://fancytailwind.com/static/9e8be5587c42e1f7ebec77c5a333a3a4/17574/city2.webp"
          alt="blog"
        />

        {/* :CARD CATEGORY */}
        <h2 className="pt-4 pb-1 px-6 inline-block title-font text-xs font-semibold text-white uppercase tracking-widest cursor-pointer hover:font-bold">
          Rockland Sporting Complex
        </h2>

        {/* :CARD BODY */}
        <div className="py-1 px-6">
          {/* ::Card title */}
          <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-primary tracking-wide cursor-pointer">
            Football
          </h1>
          {/* ::Card excerpt */}
        </div>

        {/* :CARD FOOTER */}
        <div className="pt-1 pb-4 px-6 flex justify-between items-center flex-wrap">
          {/* ::Date & reading time */}
          <div className="flex flex-wrap text-sm text-white">
            <span className="">Price/Hour=4000 tk</span>
          </div>
          {/* ::Likes & Views */}
          <div className="mt-1">
            {/* Likes */}
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              1.5K
            </span>
            {/* Views */}
            <span className="text-gray-400 inline-flex items-center leading-none text-sm cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
