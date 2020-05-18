import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import { Menu, X } from 'react-feather'
import 'prismjs/themes/prism-okaidia.css'
import ThemeChanger from "./ThemeChanger"
import { debounce } from "lodash"
import Iconx from '../../static/images/icon.png'

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

  return isHidden ?
    (<div className="btn-top">
      <a href="#top">
        <img src={Iconx} alt=""/>
        <div className="arrow-hover">
          <svg>
            <g>
              <path d="M50,5C25.1,5,5,25.1,5,50c0,24.9,20.1,45,45,45s45-20.1,45-45C95,25.1,74.9,5,50,5z M50,87.5   c-20.7,0-37.5-16.8-37.5-37.5S29.3,12.5,50,12.5S87.5,29.3,87.5,50S70.7,87.5,50,87.5z"/>
              <polygon points="29,54 36,61 50,47.1 64,61 71,54 50,32.9  "/>
            </g>
          </svg>
        </div>
      </a>
    </div>) : (
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
            <Link to="/what">What?</Link>
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