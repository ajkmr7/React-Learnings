import { Header } from "./components/header/Header";
import { CoreConcepts } from "./components/sections/CoreConcepts";
import { Examples } from "./components/sections/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
