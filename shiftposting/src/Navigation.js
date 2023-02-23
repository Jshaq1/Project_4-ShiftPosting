import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function Navigation(){
    return(
        <div className="nav">
            
            <Topbar></Topbar>
            <Sidebar></Sidebar>
            
        </div>
    )
}