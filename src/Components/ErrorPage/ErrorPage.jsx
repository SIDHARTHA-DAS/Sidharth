import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="h-svh w-svw flex flex-col items-center justify-center bg-gray-600 text-gray-200">
      <h1 className="text-[clamp(5rem,40vmin,20rem)] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 animate-swing relative mb-4">
        404
        <span className="absolute top-0 left-0 text-black blur-[1.5vmin] transform scale-[1.05] translate-y-[12%]">
          404
        </span>
      </h1>

      <div className="relative overflow-hidden w-screen h-screen  top-0 left-0 flex items-center justify-center">
        <div className="absolute w-[250vmax] h-[250vmax] transform translate-x-[-50%] translate-y-[-50%]">
          <div className="w-full h-full rounded-full bg-gradient-radial from-transparent to-black animate-cloak" />
        </div>
      </div>

      <div className="relative text-center max-w-[90vw] md:max-w-[25rem] mb-[100px]">
        <h2 className="text-2xl font-bold mb-4">{`We can't`} find that page</h2>
        <p className="mb-8">
          {`We're`} fairly sure that page used to be here, but it seems to have gone missing.
          We apologize on its behalf.
        </p>
        <button className="mx-11 uppercase bg-gray-300 text-black px-8 py-2 rounded-full text-sm font-bold tracking-wider hover:bg-gray-400 transition-color" onClick={handleClick} >Go Back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
