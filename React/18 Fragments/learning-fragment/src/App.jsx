import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./comp/FoodItems";
import ErrorMessage from "./comp/ErrorMessage";
import "./App.css";
import Container from "./comp/container";

function App() {
  
  let foodItems = ["Dal", "Roti", "Milk", "Salad", "sabji"];

  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am Still hungry.</h3> : null;

  // let foodItems=[];

  return (
    
    // single tag should be there while returning the jsx file.To avoid the extra div we use fragments(hissa).
    // <React.Fragment>

    //jsx mein js ka code likhna hai to bracket likhna padega
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
{/* 
      {emptyMessage} */}

{/* ch-20 */}

      <ErrorMessage items={foodItems}/>

      <FoodItems items={foodItems} />
      </Container>
      {/* <Container><p>Above is the list of Healthy Food</p></Container> */}
      </>
    // </React.Fragment>
  );
}

export default App;
