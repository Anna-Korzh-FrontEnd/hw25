import Title from './components/Title';
import IsOpenedTitle from "./components/IsOpenedTitle";
import './App.css';
import PropTypes from 'prop-types';

function App() {

    return (
        <div>
          <Title name="Hello, Anna" type = "bold" />
          <Title name="Hello, Marta" />

            <IsOpenedTitle />
        </div>
  );
}
Title.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string
}
export default App;
