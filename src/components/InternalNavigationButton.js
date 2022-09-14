import { Link } from "react-router-dom";

export const InternalNavigationButton = ({to, text}) => (
        <Link style={{float: 'right', border: '1px solid green', padding: 12}} to={to}>
            {text}
        </Link>
    );
