import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import { Menu, X } from 'react-feather'
import 'prismjs/themes/prism-okaidia.css'
import ThemeChanger from "./ThemeChanger"
import { debounce } from "lodash"

const useHideOnScroll = () => {
  const prevScrollY = useRef();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onScrollDebounced = debounce(() => {
      onScroll();
    }, 50);

    const onScroll = () => {
      setIsHidden(isHidden => {
        const scrolledDown = window.scrollY > prevScrollY.current;
        prevScrollY.current = window.scrollY;
        if (scrolledDown && !isHidden) {
          return true;
        } else if (!scrolledDown && isHidden) {
          return false;
        } else {
          return isHidden;
        }
      });
    };

    window.addEventListener("scroll", onScrollDebounced);
    return () => {
      window.removeEventListener("scroll", onScrollDebounced);
    };
  }, []);

  return isHidden;
};

export default (props) => {
  const isHidden = useHideOnScroll();

  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'navigation-active' : 'site-header container';
  const headerClassNames = isOpen ? 'header-active' : 'header-menu';

  return isHidden ? null : (
    <header className={headerClassNames}>
      <div 
        className={menuClassNames}
      >
        <nav 
          className="navigation"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Link to="/">What I do for money</Link>
          <Link to="/whatcamera">What I do with a camera</Link>
          <Link to="/whatfun">What I do for fun</Link>
          <Link to="/what">What</Link>
        </nav>
        <ThemeChanger />
        <button
          className="button-blank menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}