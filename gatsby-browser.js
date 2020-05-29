import "./src/styles/global.scss"
import smoothscroll from 'smoothscroll-polyfill'

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}