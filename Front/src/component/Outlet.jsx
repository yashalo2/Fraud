import style from "../style/Outlet.module.css";
function Outlet() {
  return (
    <div className={style.container}>
      <div className={style.topBar}>Outlet</div>
      <div className={style.leftPanel}>Left Panel</div>
      <main className={style.content}>
        <outlet />
      </main>
    </div>
  );
}
export default Outlet;
