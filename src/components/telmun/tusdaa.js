import Typography from 'components/typography'
import { motion } from 'framer-motion'
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
const container = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}
export default function Apart() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="  h-[40vh] md:h-[100vh] lg:h-[100vh]  w-[100vw] items-center justify-center flex"
    >
      <motion.div variants={item} className="flex flex-col  ">
        <div className="  hidden md:block lg:block w-[65px] h-[5px] bg-primary-yellow rounded-2xl mb-[24px] self-center "></div>
        <Typography className="w-[311px] opacity-60 md:opacity-100 lg:opacity-100 flex max-w-shambWidth md:w-auto  lg:w-auto  text-bodyMobile font-normal  leading-[26px] md:text-title2 md:leading-[37.2px] lg:text-title2 lg:leading-[37.2px]  text-white">
          In the past, we Mongolians have achieved everything we set out to do by calling for human power, the crest of
          the heavens, and the blessings of the earth. But now we are expressing the idea that we will achieve our goal
          of building a new empire by combining art and technology.
        </Typography>
      </motion.div>
    </motion.div>
  )
}
