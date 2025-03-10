import { Button } from "./components/Button";
import { Dropdown } from "./components/Dropdown";

function App() {
  return (
    <>
      <Button backgroundColor={"interactive"} text="Hey" />
      <Button icon={"public/assets/icons/account.png"} />
      <Dropdown />
    </>
  );
  
}

export default App;
