import style from "../style/DashBoard.module.css";
function DashBoard() {
  return (
    <div className={style.container}>
      <div className={style.topDisplay}>
        <div className={style.div}></div>
        <div className={style.div}></div>
        <div className={style.div}></div>
        <div className={style.div}></div>
      </div>
      <div className={style.middleDisplay}>
        <div className={style.chart}></div>
        <div className={style.more}></div>
      </div>
      <div className={style.bottomDisplay}></div>
    </div>
  );
}
export default DashBoard;
