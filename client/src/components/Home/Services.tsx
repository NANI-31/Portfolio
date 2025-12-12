import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "../../redux/store";

const cardData = ["Full stack", "Front End", "Back End"];

const Services = () => {
  const theme = useSelector((state: RootState) => state.global.theme);
  const isDark = theme === "dark";

  return (
    <div
      className={clsx(
        isDark ? "bg-[#111] text-white" : "bg-white text-black",
        "p-3 py-10"
      )}
    >
      <div className="flex justify-end w-full">
        <div
          className={clsx(
            isDark ? "bg-[#696b6f]" : "bg-[#fdc474]",
            "w-[100px] p-5 rounded-t-2xl"
          )}
        />
      </div>

      <div
        className={clsx(
          isDark
            ? "bg-[#33363f]"
            : "bg-gradient-to-br text-white from-red-300 to-yellow-300",
          "relative px-8 py-10 lg:px-20 rounded-tl-2xl rounded-br-2xl"
        )}
      >
        <div className="justify-between lg:flex">
          <motion.h1
            initial={{ opacity: 0, scale: 0.4, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="text-5xl font-normal hello"
          >
            My <span className="text-black">Services</span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, scale: 0.4, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="lg:max-w-[600px] lg:pt-0 pt-5"
          >
            As a developer and software engineer, I offer scalable and flexible
            solutions based on my skill set.
          </motion.h3>
        </div>

        <div className="grid gap-8 mt-10 text-center lg:grid-cols-3">
          {cardData.map((title, i) => (
            <div key={title}>
              <div className="px-5">
                <div className="p-5 border border-white rounded-2xl bg-white/50" />
              </div>
              <div className="p-5 -mt-6 border border-white backdrop-blur-2xl rounded-2xl bg-white/10">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.4, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 50 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold"
                >
                  {title}
                </motion.h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={clsx(
          isDark ? "bg-[#696b6f]" : "bg-[#fcc178]",
          "w-[100px] p-5 rounded-b-2xl"
        )}
      />
    </div>
  );
};

export default Services;
