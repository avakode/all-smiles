import { Header } from "./header";
import { Footer } from "./footer";
import { Call } from "./call";
import { useState, useEffect } from 'react';

export function MainLayout({ children }) {
  const [headerIsOpened, setHeaderOpened] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [overflowClass, setOverflowClass] = useState(false);

  useEffect(() => {
    if (headerIsOpened) {
      if (!overflowClass) {
        setScrollOffset(window.pageYOffset)
      }

      const timeout = setTimeout(() => {
        setOverflowClass(true);
      }, 400)

      return () => clearTimeout(timeout);
    } else {
      setOverflowClass(false);
      window.scrollTo(0, scrollOffset);
    }
  }, [headerIsOpened, overflowClass, scrollOffset]);

  return (
    <div className={`site-container ${overflowClass ? 'is-overflow-hidden' : ''}`}>
      <Header isOpened={headerIsOpened}
        setOpened={setHeaderOpened} />
      <main>
        {children}
      </main>
      <Footer/>
      <Call/>
    </div>
  )
}