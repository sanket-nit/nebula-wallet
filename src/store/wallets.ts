import { atom } from 'recoil';
import { TWallet } from '@/types/types';
export const walletsAtom = atom<TWallet[]>({
  key: 'walletsAtom',
  default: [],
});
