import { useLocalStorage } from '../utils/useLocalStorage';
import Logo from './logo.png';
import BNBankLogo from './BNBank-logo.svg';

const banks = {
  sb1: {
    color: '#002776',
    logo: Logo,
  },
  bnbank: {
    color: '#DC0428',
    logo: BNBankLogo,
  },
};

export const useBank = () => {
  const [chosenBank] = useLocalStorage('bank', 'sb1');
  return banks[chosenBank];
};
