import '@fremtind/jkl-button/button.min.css';
import { PrimaryButton } from '@fremtind/jkl-button-react';

export const ButtonDemo = () => (
  <PrimaryButton
    onClick={() => console.log('click')}
    loader={{
      showLoading: true,
      textDescription: 'Laster opp filer',
    }}
  >
    Last opp
  </PrimaryButton>
);