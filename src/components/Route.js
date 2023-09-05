import {useEffect, useState} from 'react'

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {

        const onLocationChange = () => {
           setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {  //cleanup function
            window.removeEventListener('popstate', onLocationChange);
        }

    },[]); //one time

    return currentPath === path
    ? children
    : null;
}

export default Route;