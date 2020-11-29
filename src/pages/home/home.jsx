import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListChoice from './ListChoice.jsx';

export function Home() {
  const [newList, setNewList] = useState(false);

  return (
    <>
      <header>
        <div className="navigation-container">
          <button id="nav-btn" className="nav-btn"></button>
          <h3>List it!</h3>
          <nav className="nav-closed">
            {/* <Link to="/" id="home-btn" className="nav-polozky">
              Úvodní stránka
            </Link> */}
            <Link to="/list/66" id="seznamy-btn" className="nav-polozky">
              Moje seznamy
            </Link>
            <Link to="/about" id="app-btn" className="nav-polozky">
              O aplikaci
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <h1>List it!</h1>
        <div className="content">
          <p>
            Aplikace List vám usnadní domluvu s rodinou a přáteli. Co je potřeba
            koupit domů k večeři či zabalit na víkend pod stan? Vytvořte si
            seznam, ke kterému budou mít přístup ostatní uživatelé a společně
            sdílejte, co je už koupeno či hotovo a co naopak ještě chybí.
          </p>
          <div className="new-list">
            <button
              className={
                newList ? 'new-list--button--selected' : 'new-list--button'
              }
              onClick={() => setNewList(true)}
            >
              {newList ? 'Můj seznam bude...' : 'Chci nový seznam'}
            </button>
            {newList ? <ListChoice /> : ''}
          </div>

          <Link to="/about" className="about-btn">
            O aplikaci
          </Link>
        </div>
      </main>
    </>
  );
}
