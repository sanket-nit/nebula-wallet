import { Button } from '@/components/ui/button';
import { Import, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import CreateWallet from './CreateWallet';
import { walletsAtom } from './store/wallets';
import { TWallet } from './types/types';
import WalletCard from './WalletCard';

export const ToolBox = () => {
  const [createWalletActive, setCreateWalletActive] = useState<boolean>(false)
  const wallets = useRecoilValue(walletsAtom)
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <div className='flex h-52 w-3/6 flex-col items-center justify-center space-y-4 rounded-md border px-4'>
        <p className='text-xl md:text-3xl text-center'>Welcome to Nebula Wallet</p>
        <Button className='w-full' variant={'default'} onClick={() => setCreateWalletActive(true)}>
          <PlusIcon className='me-2 w-[18px]' />
          Create Wallet
        </Button>
        <Button className='w-full text-black' variant={'outline'}>
          <Import className='me-2 w-[18px]' />
          Import Wallet
        </Button>
      </div>
      {
        createWalletActive &&
        <CreateWallet />
      }
      <div className='grid gap-2 w-full mb-4 md:w-3/4'>
        {
          wallets.map((wallet: TWallet, idx: number) => {
            return (<WalletCard idx={idx} wallet={wallet} />)
          })
        }
      </div>
    </div>
  )
}

export default ToolBox