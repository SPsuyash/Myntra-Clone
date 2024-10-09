import style from "./ButtonContainer.module.css";
function ButtonContainer() {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  return (
    <div className={style.buttonsContainer}>
      {ButtonNames.map((ButtonName) => (
        <button className={style.button}>{ButtonName}</button>
      ))}
    </div>
  );
}
export default ButtonContainer;
