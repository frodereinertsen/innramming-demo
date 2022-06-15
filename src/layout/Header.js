import { useBank } from './useBank';

export const Header = () => {
  const bank = useBank();

  return (
    <header
      style={{
        backgroundColor: bank.color,
        width: '100vw',
        display: 'flex',
        height: '80px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}
    >
      <img
        src={bank.logo}
        style={{ height: '40px', pointerEvents: 'none' }}
        alt={'Sparebank1 logo'}
      />
    </header>
  );
};
