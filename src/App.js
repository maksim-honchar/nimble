import Container from "@material-ui/core/Container";

import "./App.css";
import { Player } from "./components/Player";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Player />
      </Container>
    </div>
  );
}

export default App;
