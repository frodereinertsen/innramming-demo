import { useBank } from './useBank';

export const Footer = () => {
  const bank = useBank();

  return (
    <footer
      style={{
        backgroundColor: bank.color,
        width: '100vw',
        display: 'flex',
        height: '80px',
        alignItems: 'center',
        padding: '0 20px',
      }}
    />
  );
};
