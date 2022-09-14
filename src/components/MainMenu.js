import { Link, useLocation } from "react-router-dom";
import { isTabActive } from "../misc/isTabActive";
import { useTabs } from '../misc/tabsContext';

export const menuItems = [
    {
        path: "/",
        name: 'Dashboard' ,
        id: 'dashboard' ,
    },
    {
        path: "/auditees",
        name: 'AudITees' ,
        id: 'audITees' ,
    },
    {
        path: "/audit-items",
        name: 'AudITItems' ,
        id: 'audITItems' ,
    },
    {
        path: "/categories",
        name: 'Categories' ,
        id: 'categories' ,
    },
    {
        path: "/templates",
        name: 'Templates' ,
        id: 'templates' ,
    },
]

export const MainMenu =  () => {
    const { addTab } = useTabs();
    const { pathname } = useLocation();

    return (
        <ul style={{width: 180, borderRight: '1px solid #1e5188', margin: 0}}>
            {
                menuItems.map((item) => {
                const isActive = isTabActive(pathname, item.path)
                const linkStyle = isActive   ? {color: '#24bd09', fontWeight: 'bold'} : null;

                    return (
                    <li key={item.name} style={{fontSize: 24, margin: '24px 0'}} onClick={() => { addTab(item); }}>
                        <Link to={item.path} style={linkStyle}>{item.name}</Link>
                    </li>
                )})
            }
        </ul>
    )
}