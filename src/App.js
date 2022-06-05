import Title from './components/Title';
import './App.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function App() {

    return (
        <IsOpenedTitle />
  );
}

const IsOpenedTitle = () =>{
    const [open, setOpened] = useState(false);

    const handleOpen = () => {
        setOpened(true);
    };

    if(open === true){
        return (
            <div>
                <Title name="Hello, Anna" type = "bold" />
                <Title name="Hello, Marta" />
            </div>
        )
    }
    return <button onClick={handleOpen}>Open title</button>;
}

export default App;




