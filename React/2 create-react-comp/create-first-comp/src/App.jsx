import KgButton from "./KgButton";
import Helloo from "./Hello";
import Reuse from "./Reuse";

//functional component  ch-11
function App(){ 
  return <div><h1>
    Hello world
  </h1>
  {/* <KgButton></KgButton> */}
  <Helloo></Helloo>
  <Reuse></Reuse>
  </div>
}

export default App;