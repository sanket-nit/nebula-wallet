import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { walletsAtom } from '@/store/wallets';
import { motion } from 'framer-motion';
import { Clipboard } from "lucide-react";
import { useEffect, useRef } from 'react';
import { useRecoilValue } from "recoil";

const WalletCard = ({ idx, wallet }) => {
  const wallets = useRecoilValue(walletsAtom)
  const walletsRef = useRef(null);

  useEffect(() => {
    walletsRef.current?.lastElementChild?.scrollIntoView()
  }, [wallets])

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3 + idx * 0.1,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="flex flex-col rounded-2xl border border-primary/10"
      ref={walletsRef}
    >
      <Card className="bg-transparent text-white" >
        <CardHeader className="tracking-tighter text-3xl font-bold"> Wallet {idx + 1}</CardHeader>
        <CardContent className='grid gap-2'>
          <div className="grid gap-1">
            <label className='text-white text-sm'>Private Key</label>
            <div className="flex gap-2">
              <Input className="flex-1" value={wallet.privateKey} type="password" />
              <Button variant="outline"> <Clipboard className="text-black" /> </Button>
            </div>
          </div>
          <div className="grid gap-1">
            <label className='text-white text-sm'>Public Key</label>
            <div className="flex gap-2">
              <Input value={wallet.publicKey} type="password" />
              <Button variant="outline"> <Clipboard className="text-black" /> </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


export default WalletCard