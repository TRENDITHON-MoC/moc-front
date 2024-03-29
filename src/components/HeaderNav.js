import { NavLink } from "react-router-dom";

import styles from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.li}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          홈
        </NavLink>
      </li>
      <li className={styles.li}>
        <NavLink
          to="/posts/popular/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          인기글
        </NavLink>
      </li>
      <li className={styles.li}>
        <NavLink
          to="/posts/news/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          최신글
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderNav;
