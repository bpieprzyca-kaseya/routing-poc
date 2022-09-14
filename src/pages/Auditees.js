import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { InternalNavigationButton } from '../components/InternalNavigationButton';
import { useLoader } from '../misc/useLoader';

export const AudITees =  () => {
const isLoaded = useLoader();

    return (
        isLoaded ? (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="new" element={<AddPage />} />
            <Route path=":id" element={<DetailsPage />} />
        </Routes>
        ) : 'Loading...'
    )
}


const MainPage = () => (
    <div style={{width: '100%'}}>
        Auditee Main Page
        <Link style={{float: 'right', border: '1px solid green', padding: 12}} to='new'>
            add new auditee
        </Link>
        <div>
            <ul>
                <li>
                    <Link to='1'> First auditee</Link>
                </li>
                <li>
                    <Link to='2'> Second auditee</Link>
                </li>
                <li>
                    <Link to='3'> Third auditee</Link>
                </li>
            </ul>
        </div>
    </div>
)

const AddPage = () => (
    <div style={{width: '100%'}}>
        Auditee Add Page
        <Link style={{float: 'right', border: '1px solid green', padding: 12}} to="..">
            cancel adding
        </Link>
    </div>
)

const DetailsPage = () => {
  const  { id } = useParams();

    return (
    <div style={{width: '100%'}}>
        Auditee Details Page - AudITee {id}
        <InternalNavigationButton to=".." text="go back"/>
    </div>
)}
