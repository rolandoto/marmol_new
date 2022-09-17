import styles from "./sideba.css";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = [
  "home",
  "ferreteria",
  "ecommerce",
  "productos",
  "subir productos",
  "configuracion",
];

const  Sidebar = () =>{
  const location = useLocation();

  return (
    <>
      <aside className="sidebar">
        <div className="sidebarContent">
          <div className="profileDetails">
            <div className="profileImageDiv">
                    <img className="img-profile"  src={"https://ciudadenredsas.info/mademarmol/wp-content/uploads/sites/42/2019/05/logo-final-1.png"} alt="samantha" />
              <p className="notifications">4</p>
            </div>
              
          </div>
          <nav className="sidebarNav">
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className="sidebarNavItem" key={sidebarNavLink}>
                  <Link className={
                      location.pathname === `/${sidebarNavLink}`
                        ? "sidebarNavLinkActive"
                        : "sidebarNavLink"
                    }
                    to={`${sidebarNavLink}`}>
                    {sidebarNavLink.charAt(0).toUpperCase()+sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar