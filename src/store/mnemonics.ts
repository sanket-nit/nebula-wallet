import { atom } from 'recoil';

export const mnemonicAtom = atom({
  key: 'mnemonicAtom',
  default: Array(12).fill(''),
});
