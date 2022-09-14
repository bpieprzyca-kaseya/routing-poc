import { Link, useLocation } from "react-router-dom";
import { isTabActive } from "../misc/isTabActive";
import { useTabs } from '../misc/tabsContext';

export const Tabs =  () => {
    const { tabs, removeTab } = useTabs();
    const {pathname} = useLocation();

    return (
    <div style={{width: '100%', height: 64, background: '#0df2ed', display: 'flex', alignItems: 'center'}}>
        <div style={{fontSize: 24, margin: '0 12px'}}>Tabs:</div>
        <div style={{display: 'flex'}}>
        {
            tabs.map((tab) => {
                const isActive = isTabActive(pathname, tab.path)
                
                const linkStyle = isActive ? {color: '#24bd09', fontWeight: 'bold'} : null;
                return (
                    <div style={{marginRight: 12, fontSize: 24, display: 'flex', alignItems: 'center'}} key={tab.path}>
                        <Link to={tab.path} style={linkStyle}>{tab.name}</Link>
                        <span onClick={() => removeTab(tab.id)} style={{cursor: 'pointer', fontSize: 16, marginLeft: 4}}>x</span>
                    </div>
                )
            })
        }
        </div>
    </div>
    )
}