import { useLoader } from '../misc/useLoader';

export const AudITItems =  () => {
const isLoaded = useLoader();
    
    return (isLoaded ? 'AudITItems Page' : 'Loading...')
}