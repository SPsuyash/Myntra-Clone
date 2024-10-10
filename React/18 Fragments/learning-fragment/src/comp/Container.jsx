import styles from "./Container.module.css";
//ch-23 passing children to a comp
const Container=(props)=>{
  return <div className={styles.container}>{props.children}</div>
}
export default Container;