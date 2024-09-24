import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function BackToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <motion.div
      animate={{
        y: isScrolled ? 0 : 20,
        opacity: isScrolled ? 1 : 0,
      }}
      className={`${isScrolled ? 'flex' : 'hidden'} rounded-full w-14 h-14 fixed justify-center bg-white/30 right-8 bottom-8  items-center p-2 flex backdrop-blur-md cursor-pointer`}>
      <ChevronUp className="h-7 w-7" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </motion.div>
  )
}