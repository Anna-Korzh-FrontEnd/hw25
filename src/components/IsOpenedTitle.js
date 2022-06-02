import { useState } from 'react';
const IsOpenedTitle = () =>{
    const [open, setOpened] = useState(false);

    const handleOpen = () => {
        setOpened(true);
    };

    if(open === true){
        return <h1 >Title компонент</h1>
    }
    return <button onClick={handleOpen}>Open title</button>;
}

export default IsOpenedTitle;