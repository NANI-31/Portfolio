import { Spinner } from "@material-tailwind/react";
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[80vh]">
      <Spinner className="w-10 h-10" />
    </div>
  );
};

export default Loader;
