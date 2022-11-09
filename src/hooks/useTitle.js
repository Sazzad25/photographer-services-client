import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () =>{
        document.title = `${title} - Glossy Photo Gallery`;
    }, [title])
};

export default useTitle;