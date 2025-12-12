import { useGlobalContext } from "../context/GlobalProvider";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const typedRef = useRef<Typed | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const [term, setTerm] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    if (!inputRef.current) return;

    typedRef.current = new Typed(inputRef.current, {
      strings: [
        "Search my projects...",
        "Enter a keyword...",
        "Type to search...",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      attr: "placeholder",
      loop: true,
    });

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy(); // cleanup
      }
    };
  }, []);
  const handleSearch = () => {
    setSearchTerm(term);
    // if (path === "/product" || path.startsWith("/admin")) {
    //   console.log("searchpath");
    // } else {
    //   router.push("/product");
    // }
    if (location.pathname === "/") {
      navigate("/product");
    }
  };

  useEffect(() => {
    // console.log(searchTerm);
    setTerm(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex overflow-hidden bg-gray-200 border dark:border-0 dark:bg-[#323232] h-fit w-fit rounded-lg hover:border-blue-500">
          <input
            type="text"
            name="search"
            ref={inputRef}
            id="search"
            value={term}
            onChange={handleInputChange}
            className=" rounded-xl lg:min-w-[300px] lg:max-w-[400px] max-w-[200px] md:max-w-[300px] focus:outline-none py-2 px-5"
          />
          <div onClick={handleSearch} className="">
            <div className="flex bg-gray-500 items-center justify-center h-full cursor-pointer relative px-3.5 rounded-r-lg z-[10]">
              <CiSearch className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
