import "./src/styles/global.scss"
import smoothscroll from 'smoothscroll-polyfill'
import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== 'undefined') {
  AOS.init();
  smoothscroll.polyfill();
}