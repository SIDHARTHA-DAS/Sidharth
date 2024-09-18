const Achievement = ({ title, description, icon }) => {
  return (
    // <div className="group bg-gray-800 dark:bg-gray-900 p-6 rounded-full shadow-lg ">
      <div className="relative flex h-[12em] w-[18em] items-center justify-center rounded-[1.5em] border-[1px] border-[#070607] bg-gray-500 p-[1.5em] text-lime-300 m-auto">
        <div className="group absolute left-1/2 top-1/2 flex h-[3em] w-[3em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[1.5em] border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]">
          <svg
            className="h-[1.5em] w-[1.5em] duration-300 group-hover:opacity-0"
            viewBox="0 0 48 48"
            fill="none"
            height="48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                clipRule="evenodd"
                d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
                fillRule="evenodd"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <clipPath id="a">
                <path d="M0 0h48v48H0z" fill="#fff"></path>
              </clipPath>
            </defs>
          </svg>
          <div className="items-left duration-600 absolute left-0 top-0 flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0">
            <div className="items-left flex flex-col justify-center">
              <h1 className="text-[1.5em] font-bold leading-[0.8em]">
                {title}
              </h1>
              <p className="text-[0.9em] font-light">
                {description}
              </p>
            </div>

            <p className="cursor-pointer text-[0.7em] underline">learn more</p>
          </div>
        </div>
        <h1 className="text-center font-nunito text-[2em] font-black text-gray-900 cursor-pointer">
          hover over the info icon {icon}
        </h1>
      </div>
    // </div>
  );
};

export default Achievement;
