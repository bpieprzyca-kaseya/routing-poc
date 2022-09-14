import { useEffect, useState } from 'react';

export const useLoader = () => {  
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {setLoaded(true)}, 1000)
    }, [])

    return isLoaded;
}
