import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';
import { Clipboard, Import, PlusIcon, RefreshCcw, ClipboardCheckIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { generateMnemonic } from 'bip39';
import { useClipboard } from './hooks/clipboard';
import { Input } from './components/ui/input';
export default function App() {
  // const [createWalletActive, setCreateWalletActive] = useState<boolean>(false)
  const [mnemonics, setMnemonics] = useState<string[]>(new Array(12).fill(''));
  const clipboard = useClipboard();

  useEffect(() => {
    generateMnemonics();
  }, []);

  function generateMnemonics() {
    const mnemonicString = generateMnemonic();
    setMnemonics(mnemonicString.split(' '));
  }

  function handleCopy() {
    const mnemonicString = mnemonics.join(' ');
    clipboard.copy(mnemonicString);
  }

  function handleCreateWallet() {}

  return (
    <div className='my-4 flex h-screen flex-col items-center space-y-4 px-8'>
      <div className='flex h-52 w-2/5 flex-col items-center justify-center space-y-4 rounded-md border px-4'>
        <p className='text-3xl'>Welcome to Nebula Wallet</p>
        <Button className='w-full' variant={'default'}>
          <PlusIcon className='me-2' />
          Create Wallet
        </Button>
        <Button className='w-full' variant={'outline'}>
          <Import className='me-2' />
          Import Wallet
        </Button>
      </div>

      <div className='flex w-3/4 flex-col items-center justify-between space-y-4 rounded-md border px-8 py-4'>
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
            <div className='grid w-full grid-cols-4 grid-rows-3 gap-4'>
              {mnemonics.map((val: string) => (
                <div className='w-full rounded-lg border p-2 text-center'>{val}</div>
              ))}
            </div>
            <div className='flex w-full items-center justify-between'>
              <Button onClick={generateMnemonics}>
                <RefreshCcw className='me-2' />
                Generate New
              </Button>
              <Button onClick={handleCopy}>
                {clipboard.state === 'READY' ? (
                  <Clipboard className='me-2' />
                ) : clipboard.state === 'SUCCESS' ? (
                  <ClipboardCheckIcon className='me-2' />
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
      </div>
    </div>
  );
}
