import { WalletCardsIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      console.log(window.scrollY);

    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`items-center gap-2 p-4 mb-4 sticky top-2 mx-8 min-h-16 border rounded-3xl border-slate-700 ${isScrolled ? 'bg-opacity-20 bg-slate-500 backdrop-blur-2xl' : 'bg-transparent'}`} >
      <div className="flex gap-2">
        <WalletCardsIcon />
        <p>Nebula Wallet</p>
      </div>
    </nav >
  )
}