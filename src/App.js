import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import { Player } from "./components/Player";

function App() {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <Typography variant="h4">tracker</Typography>
        <Player />
      </div>
    </Container>
  );
}

export default App;
