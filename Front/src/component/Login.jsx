import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import style from "../style/Login.module.css";
function Login() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <div className={style.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={style.logoText}>
          <h3>FraudGuard</h3>
          <p>Secure your transactions with confidence</p>
        </div>
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
          <button onClick={() => navigate("/dashboard")}>Login</button>
        </div>
        <div
          style={{
            margin: "0px",
            textAlign: "center",
            color: "grey",
            fontFamily: "Arial, sans-serif",
          }}
          className={style.cardHeader}
        >
          <p>FraudGuard</p>
        </div>
      </div>
    </div>
  );
}
export default Login;
