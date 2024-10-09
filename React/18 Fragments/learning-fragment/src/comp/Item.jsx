import styles from "./Item.module.css";
//ch 22 css modules;
const Item = ({foodItem}) => {
return (<li className={`${styles['kg-Item']} list-group-item`} >
  <span className={styles['kg-span']}>{foodItem}</span>
</li>
)
}

export default Item;