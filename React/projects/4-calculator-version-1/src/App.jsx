import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import ButtonContainer from "./comp/ButtonContainer";
import Display from "./comp/Display";

function App() {
  return (
    <div className={style.calculator}>
     <Display />
     <ButtonContainer />
    </div>
  );
}
export default App;
