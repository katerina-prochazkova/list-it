import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ListChoice from './ListChoice.jsx';

export function Home() {
  const [newList, setNewList] = useState(false);

  return (
    <>
      <header>
        <div className="navigation-container">
          <button id="nav-btn" className="nav-btn"></button>
          <nav className="nav-closed">
            <a id=" domu-btn" className="nav-polozky" href="#header">
              Úvodní stránka
            </a>
            <a id="seznamy-btn" className="nav-polozky" href="">
              Moje seznamy
            </a>
            <a id="app-btn" className="nav-polozky" href="">
              O aplikaci
            </a>
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
                newList
                  ? 'new-list--button new-list--button--selected'
                  : 'new-list--button'
              }
              onClick={() => setNewList(true)}
            >
              {newList ? 'Můj seznam bude...' : 'Chci nový seznam'}
            </button>
            <div>{newList ? <ListChoice /> : ''}</div>
          </div>
          <div className="about-btn">
            <a href="about.html" className="about">
              O aplikaci
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
