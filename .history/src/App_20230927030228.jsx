import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const loadedCoffees = useLoaderData();
  return (
    <>
      <h1>Hello: {loadedCoffees.length}</h1>
    </>
  );
}

export default App;
