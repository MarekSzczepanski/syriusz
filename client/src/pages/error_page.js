import React from "react";
import { Link } from "react-router-dom";
import "../styles/error_page.css";

const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Strona nie istnieje</h2>
          <p>
            Przepraszamy, ale strona, na którą próbujesz się dostać nie istnieje
          </p>
          <Link to="/">Wróć na stronę główną</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
