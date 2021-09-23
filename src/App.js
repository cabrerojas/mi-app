import logo from './logo.svg';
import './App.css';

const Li = ({children}) => {
  return (
    <li className='clase-li'>{children}</li>
  )


}
const App = () => {
  const valor = 'asdsafgg'
  return (

    <ul className="clase-css">Chanchito {valor}
      <Li estado="feliz">Valor de li</Li>
    </ul>
  );
}

export default App;
