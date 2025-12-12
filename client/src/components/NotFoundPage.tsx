import { FiHome } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="min-h-screen bg-gray-500 dark:bg-[#111] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          {/* <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text animate-pulse"> */}
          <h1 className="text-8xl md:text-9xl font-extrabold text-white animate-pulse">
            404
          </h1>
          <div className="w-24 h-1 bg-white bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] mx-auto mt-4 rounded-full"></div>
        </div>
        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved to
            another location.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goHome}
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#b57e10] via-[#bea954] via-[#b57e10] to-[#c7992b] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <FiHome size={20} />
            <span className="hover:text-white ">Go Home</span>
          </button>

          <button className="group flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
            <FaArrowLeftLong size={20} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}
