import Logo from './logo.png'

export const Header = () => <header style={{
    backgroundColor: '#002776',
    width: '100vw',
    display: 'flex',
    height: '80px',
    alignItems: 'center',
    padding: '0 20px'
}}>
    <img src={Logo} style={{height: "40px", pointerEvents: 'none'}} alt={"Sparebank1 logo"}/>
</header>