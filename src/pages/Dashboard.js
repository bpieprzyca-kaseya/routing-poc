import { useLoader } from '../misc/useLoader';

export const Dashboard =  () => {
const isLoaded = useLoader();
    
    return (isLoaded ? 'Dashboard Page' : 'Loading...')
}