import { useState } from 'react';
import Link from 'next/link';
import { ListChoice } from '../components/ListChoice/index.jsx';
import { usePWAInstall } from 'react-use-pwa-install';

export default function Home() {
  const [newList, setNewList] = useState(false);
  const install = usePWAInstall();

  return (
    <>
      <main>
        <h1>List it!</h1>
        <div className="content">
          <p>
            Aplikace List it! vám usnadní domluvu s rodinou a přáteli. Co je
            potřeba koupit domů k večeři či zabalit na víkend pod stan? Vytvořte
            si seznam, ke kterému budou mít přístup ostatní uživatelé a společně
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

          {install && <button type="button" onClick={install}>Nainstalovat</button> /* @TODO: dostylovat */}

          <Link href="/about">
            <a className="about-btn">
              O aplikaci
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
