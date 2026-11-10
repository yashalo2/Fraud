import { MdOutlineNotifications, MdPerson, MdSearch } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import style from "../style/System.module.css";
function SystemOutlet() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.topBar}>
        <div className={style.topLeft}>
          <div className={style.liveIndicator}>
            <div
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
              className={style.liveText}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "0.5px solid #fff",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#fff",
                    marginBottom: "1px",
                    marginRight: "1px",
                  }}
                ></div>
              </div>
              <div>Live Stalk</div>
            </div>
            <div className={style.labelSlogan}>live transactions</div>
          </div>
        </div>
        <div className={style.topMiddle}>
          <div className={style.searchContainer}>
            <MdSearch className={style.searchIcon} color="#8080806c" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className={style.topRight}>
          <div className={style.div}></div>
          <div className={style.div}></div>
          <div className={style.div}></div>
          <div style={{ background: "none" }} className={style.div}>
            <div
              style={{
                padding: "0.5em",
                borderRadius: "10px",
                marginRight: "10px",
                boxShadow: "inset 0px 0px 20px #01ff01c9",
                border: "1px solid #01ff01",
                cursor: "pointer",
              }}
            >
              <MdOutlineNotifications color="grey" size={20} />
            </div>
            <div
              style={{
                padding: "0.5em",
                marginRight: "10px",
                borderRadius: "10px",
                boxShadow: "inset 0px 0px 20px #01ff01c9",
                cursor: "pointer",
                border: "1px solid #01ff01",
              }}
            >
              <MdPerson color="grey" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.leftPanel}>
        <div className={style.name}></div>
        <div className={style.navigatorsContainer}>
          <div style={{ display: "grid", gap: "5px" }}>
            <button onClick={() => navigate("home")}>Dashboard</button>
            <button onClick={() => navigate("analysis")}>Analysis</button>
            <button onClick={() => navigate("add")}>Add System</button>
            <button onClick={() => navigate("manage")}>Manage Systems</button>
            <button onClick={() => navigate("setting")}>System Setting</button>
          </div>
        </div>
        <div className={style.leftBottomPanel}></div>
      </div>
      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  );
}
export default SystemOutlet;
