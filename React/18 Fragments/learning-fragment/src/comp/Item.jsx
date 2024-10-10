import styles from "./Item.module.css";
//ch 22 css modules;
const Item = ({foodItem}) => {

  const handleBuyBuutonClicked=(foodItem)=>{
    console.log(`${foodItem} being bought`)

  }
  //ch-24 event
  // onClick={handleBuyBuutonClicked} can alsobe used

return (<li className={`${styles['kg-Item']} list-group-item`} >
  <span className={styles['kg-span']}>{foodItem}</span>
  <button  className={`${styles.button} btn btn-info`}

  onClick={()=>handleBuyBuutonClicked(foodItem)
    
  }>Buy</button>
</li>
)
}

export default Item;