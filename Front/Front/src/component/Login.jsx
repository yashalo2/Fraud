import logo from "../assets/logo.jpg";
import style from "../style/Login.module.css";
function Login() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={style.card}>
        <div className={style.cardHeader}>
          <h2>Login</h2>
        </div>
        <div className={style.cardHeader}>
          <input type="text" placeholder="Username" />
        </div>
        <div className={style.cardHeader}>
          <input type="password" placeholder="Password" />
        </div>
        <div style={{ margin: "none" }} className={style.cardHeader}>
          <a href="#">Forgot Password?</a>
        </div>
        <div className={style.cardHeader}>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
