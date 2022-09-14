import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTabs } from '../misc/tabsContext';
import { useLoader } from '../misc/useLoader';

export const Categories =  () => {
const isLoaded = useLoader();
    
     return (
        isLoaded ? (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="new" element={<AddPage />} />
        </Routes>
        ) : 'Loading...'
    )
}


const MainPage = () => (
    <div style={{width: '100%'}}>
        Category Main Page
        <Link style={{float: 'right', border: '1px solid green', padding: 12}} to='new'>
            add new category
        </Link>
    </div>
)

const AddPage = () => {
    const { setTabState, getTabState } = useTabs();
    const [values, setValues] = useState(getTabState() || { name: '', description: '' });
    
    useEffect(() => {
        return () => setTabState(values);
    }, [values]);

    return (
    <div style={{width: '100%'}}>
        Category Add Page
        <Link style={{float: 'right', border: '1px solid green', padding: 12}} to="..">
            cancel adding
        </Link>
        <div style={{marginTop: 48}}>
            <label htmlFor='name'>category name: </label>
            <input id="name" type="text" value={values.name} onChange={(evt) => {setValues((values) => ({ ...values, name: evt.target.value }))}}></input>
            <div style={{marginTop: 24}}>
                <label htmlFor='description'>category description: </label>
                <input id="description" type="text" value={values.description} onChange={(evt) => {setValues((values) => ({ ...values, description: evt.target.value }))}}></input>
            </div>
        </div>
    </div>
)}