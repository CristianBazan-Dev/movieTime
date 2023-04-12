import React from "react";

import { ReactComponent as Movies } from "../../assets/icons/movies.svg";
import { ReactComponent as Tv } from "../../assets/icons/tv.svg";

function Header(props) {
  return (
    <div>
      <header>
        <nav>
          <div className="movies">
            <li>
              {" "}
              <Movies/>
              Movies
              <div className="shadow"></div>
            </li>
          </div>

          <div className="tv">
            <li>
              <Tv className="tv-icon" />
              Tv Shows
            </li>
          </div>
        </nav>

        <div className="title">
          <h1>MOVIE</h1>
          <h3>time</h3>
        </div>

        <div className="icons">
          <div className="minimize"></div>

          <div className="maximize"></div>

          <div className="close"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
