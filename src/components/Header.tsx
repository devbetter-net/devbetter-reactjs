import { useEffect } from "react";

export default function Header() {
   
    useEffect(() => {
        //console.log(import.meta.env);
    }, []);

    return (
        <header>
            <h1>Header :</h1>
        </header>
    );
}