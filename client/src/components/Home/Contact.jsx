import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import clsx from "clsx";

const Contact = () => {
  const theme = useSelector((state) => state.global.theme);
  return (
    <div
      className={clsx(
        theme === "dark" ? " bg-[#111] text-white" : " bg-white text-black",
        "pt-5"
      )}
    >
      <div className="px-5 py-10 pt-20 lg:px-20">
        <div className="grid gap-20 border-0 lg:gap-40 lg:px-2 pb-30 lg:grid-cols-2">
          <section className="order-2 my-auto text-center border-0 lg:order-1">
            <div className="pt-4 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0.5, scale: 0.4, x: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 50 }}
                viewport={{ once: true }}
                className=""
              >
                <span className="text-7xl pt-10 font-bold text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text hello">
                  Contact
                </span>
              </motion.h1>
            </div>
            {/* <motion.h1
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold text-white"
            ></motion.h1> */}
            <p className="leading-8 tracking-[1px] pt-10 text-sm">
              Whether you're looking to start a project, have a question, or
              just want to say hello, I'm always open to new opportunities and
              collaborations. Feel free to reach out via any of the channels
              below.
            </p>
            <div className="space-y-9 pt-15">
              <div>
                <h6 className="text-xl font-bold text-amber-400 text-shadow-[0px_0px_60px_#fff]">
                  Address
                </h6>
                <p className="text-sm ">
                  IPD colony, Snagadigunta, Guntur, Andhra Pradesh
                </p>
              </div>
              <div>
                <h6 className="text-xl font-bold text-amber-400 text-shadow-[0px_0px_60px_#fff]">
                  EMAIL
                </h6>
                <p className="text-sm">chundu.siva2k03@gmail.com</p>
              </div>
              <div>
                <h6 className="text-xl font-bold text-amber-400 text-shadow-[0px_0px_60px_#fff]">
                  Phone
                </h6>
                <p className="text-sm">+(91) 9701330350</p>
              </div>
            </div>
          </section>
          <section
            className={clsx(
              theme === "dark" ? "bg-[#33363f]" : "bg-gray-400",
              "order-2 relative top-5 border-0 lg:order-2 rounded-sm shadow-[0px_0px_0px_0px_rgba(255,255,255,0.2)]"
            )}
          >
            <div className="pt-10 text-center sm:pt-15">
              <h1
                className="font-bold"
                style={{
                  fontSize: "clamp(1.75rem, 12vw, 3rem)",
                  lineHeight: "clamp(1.75rem, 12vw, 3rem)",
                }}
              >
                CONTACT FORM
              </h1>
            </div>
            <form className="pt-10 space-y-4 xs:px-5 md:px-15 sm:pt-15">
              <div className="flex flex-col gap-2 max-xs:px-4">
                <label htmlFor="name" className="font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full border-b-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 max-xs:px-4">
                <label htmlFor="name" className="font-semibold">
                  Phone No
                </label>
                <input
                  type="text"
                  className="w-full border-b-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 max-xs:px-4">
                <label htmlFor="name" className="font-semibold">
                  Your e-mail
                </label>
                <input
                  type="text"
                  className="w-full border-b-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-0 max-xs:px-4">
                <label htmlFor="name" className="font-semibold">
                  Message
                </label>
                <textarea
                  type="text"
                  // className="w-full px-3 overflow-auto resize-none border-b-1 focus:outline-none custom-scrollbar"
                  className="w-full px-3 resize-none border-b-1 focus:outline-none scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
                />
              </div>
              <div className="pb-10 text-center border-0 ">
                <div
                  className={clsx(
                    theme === "dark"
                      ? "shadow-[0px_0px_3px_1px_#fff]"
                      : "shadow-[0px_0px_3px_1px_#000]",
                    "inline-block cursor-pointer max-xs:px-4 px-10 py-3 border-0"
                  )}
                >
                  <input
                    type="submit"
                    value="SEND MESSAGE   ->"
                    className="w-full"
                  />
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
      {/* <div data-scroll data-scroll-speed="8"></div> */}
    </div>
  );
};

export default Contact;
