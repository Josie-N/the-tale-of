import React from "react";
import { Link } from "react-router-dom";
import { MovieListType } from "../../constants/constants";
import { useStore } from "../../store/store";

import styles from "../../components/Topbar/Topbar.module.css";
import helperStyles from "../../assets/stylesheets/helper.module.css";
import logo from "../../assets/images/brandLogo.svg";

export const Topbar = () => {
  const updateMovieListType = useStore(state => state.changeMovieListType);

  return (
    <div className={helperStyles.maxWidthDesktop}>
      <header className={styles.header}>
        <span>
          <Link to="/" onClick={() => updateMovieListType(MovieListType.Recommended)}>
            <img className={styles.brandLogo} src={logo} alt="True tale of" />
          </Link>
        </span>
        <h1 className={helperStyles.visuallyHidden}>
          The tale of, a movie search database
        </h1>
      </header>
    </div>
  );
}
