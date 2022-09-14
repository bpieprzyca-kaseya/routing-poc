import { useLoader } from '../misc/useLoader';

export const Templates =  () => {
const isLoaded = useLoader();
    
    return (isLoaded ? 'Templates Page' : 'Loading...')
}