import GetMovies from "./componentes/GetMovies";
import Header from "./componentes/Header"
import Search from "./componentes/Search";

import "./styles/main.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <GetMovies/>

    </div>
  );
}

export default App;
