import React, {ReactNode} from "react";
import logo from "../assets/logo.png"
import '../App';

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
return <div className={'layout'}>
    <div ><img src={logo} loading="eager" alt="Longwave logo" className="image" width={208} height={40}/></div>
    <div style={{marginTop: 50}}>

        {children}
    </div>
</div>
}
export default Layout
