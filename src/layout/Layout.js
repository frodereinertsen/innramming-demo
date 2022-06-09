import {Header} from "./Header";
import {Footer} from "./Footer";

export const Layout = ({children}) => <div style={{display: "flex", flexDirection: "column", minHeight: "100vh", alignItems: "center"}}>
    <Header/>
    <main style={{flexGrow: 1}}>
        {children}
    </main>
    <Footer/>
</div>