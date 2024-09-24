import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useClipboard } from '@/hooks/clipboard';
import { mnemonicAtom } from '@/store/mnemonics';
import { walletsAtom } from '@/store/wallets';
import { Keypair } from '@solana/web3.js';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
import bs58 from "bs58";
import { randomBytes } from 'crypto';
import { derivePath } from 'ed25519-hd-key';
import { motion } from 'framer-motion';
import { Clipboard, ClipboardCheckIcon, RefreshCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import nacl from 'tweetnacl';

const CreateWallet = () => {
  const clipboard = useClipboard();
  const [currentWalletIdx, setCurrentWalletIdx] = useState<number>(0);
  const [mnemonic, setMnemonic] = useRecoilState(mnemonicAtom)
  const setWallets = useSetRecoilState(walletsAtom)

  useEffect(() => {
    createMnemonics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function createMnemonics() {
    const mnemonicString = generateMnemonic();
    setMnemonic(mnemonicString.split(' '));
  }

  function handleCopy() {
    const mnemonicString = mnemonic.join(' ');
    clipboard.copy(mnemonicString);
  }

  async function handleCreateWallet() {
    const mnemonicString = mnemonic.join(' ');
    const seed = await mnemonicToSeed(mnemonicString)
    const path = `m/44'/501'/${currentWalletIdx}'/0'`
    const derivedSeed = derivePath(path, seed.toString('hex')).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const privateKey = bs58.encode(secret);
    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
    setWallets(prev => [...prev, { publicKey, privateKey }])
    setCurrentWalletIdx(prev => prev + 1);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className='flex w-full md:w-3/4 flex-col items-center justify-between space-y-4 rounded-md border px-4 md:px-8 py-4'>
      <p className='text-2xl font-bold'>Create Wallet</p>
      <Tabs
        defaultValue='generate-mnemonics'
        className='flex w-full flex-col items-center justify-center gap-4'
      >
        <TabsList className='w-full'>
          <TabsTrigger className='w-full' value='generate-mnemonics'>
            Generate mnemonics
          </TabsTrigger>
          <TabsTrigger className='w-full' value='paste-mnemonics'>
            Paste Mnemonics
          </TabsTrigger>
        </TabsList>
        <TabsContent className='grid w-full gap-4' value='generate-mnemonics'>
          <div className='grid w-full grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-4'>
            {mnemonic.map((val: string) => {
              const id = randomBytes(20).toString('hex');
              return (
                <div key={id} className='w-full rounded-lg border p-2 text-center'>{val}</div>
              )
            })}
          </div>
          <div className='flex w-full items-center justify-between'>
            <Button onClick={createMnemonics}>
              <RefreshCcw className='w-[18px] me-2' />
              Generate New
            </Button>
            <Button onClick={handleCopy}>
              {clipboard.state === 'READY' ? (
                <Clipboard className='w-[18px] me-2' />
              ) : clipboard.state === 'SUCCESS' ? (
                <ClipboardCheckIcon className='w-[18px] me-2' />
              ) : (
                ''
              )}
              Copy All
            </Button>
          </div>
        </TabsContent>
        <TabsContent value='paste-mnemonics' className='w-full'>
          <Input className='w-full' placeholder='Input your mnemonics here.' />
        </TabsContent>
      </Tabs>
      <Button onClick={handleCreateWallet}>Create &nbsp; 🚀</Button>
    </motion.div >
  )
}

export default CreateWallet;