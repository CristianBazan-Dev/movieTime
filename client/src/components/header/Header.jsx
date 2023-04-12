import React from "react";

function Header(props) {
  return (
    <div>
      <header>
        <nav>
          <li>Movies</li>
          <li>Tv Shows</li>
        </nav>

        <div class="title">
          <h1>MOVIE</h1>
          <h3>time</h3>
        </div>

        <div class="icons">
          <div class="minimize"></div>

          <div class="maximize"></div>

          <div class="close"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
