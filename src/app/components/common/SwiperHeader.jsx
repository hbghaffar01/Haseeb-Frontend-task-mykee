import Image from "next/image";
import { motion } from "framer-motion";

export const SwiperHeader = ({
  indicator,
  heading,
  onNext,
  onPrev,
  Button,
}) => {
  return (
    <div className="w-full">
      <div className="flex md:items-center flex-wrap md:gap-0 xs:gap-6 md:justify-between">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="bg-red-500 w-5 h-12 rounded"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="text-red-500 font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {indicator}
            </motion.span>
          </div>

          <motion.span
            className="font-[inter] font-normal text-5xl leading-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {heading}
          </motion.span>
        </motion.div>

        <div className="flex items-center gap-2 relative top-4">
          {Button ? (
            Button
          ) : (
            <>
              <motion.div
                className="size-8 bg-gray-200 rounded-full p-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onPrev}
              >
                <Image
                  src="./arrow-left.svg"
                  width="40"
                  height="40"
                  alt="left arrow"
                />
              </motion.div>
              <motion.div
                className="size-8 bg-gray-200 rounded-full p-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onNext}
              >
                <Image
                  src="./arrow-right.svg"
                  width="40"
                  height="40"
                  alt="right arrow"
                />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
