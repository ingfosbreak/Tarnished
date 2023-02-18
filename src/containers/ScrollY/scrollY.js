import { useEffect, useState} from "react";

const useScrollYPosition = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            
        };
        
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    
    }, []);

    return scrollY;

};




export default useScrollYPosition;
