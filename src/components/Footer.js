import React from 'react'
import './Footer.css'
import logo from '../../static/images/logo-rodape.png'

export default () => (
  <div>
    <footer>
      <div className="container footer-custom">
        <img src={logo} alt="" />
        <div className="phone">
          <p><strong>+55 48 3364 5570</strong></p>
          <p>go@ffwd.rocks</p>
        </div>
        <div className="endereco">
          <div className="escritorio">
            <p>
              <strong>Escritorio</strong>
            </p>
            <p>
              Rua Niberto Haase, 100 - Sala 301
              <br />
              Santa Mônica, Florianópolis, SC
              <br />
              88035-215
          </p>
          </div>
          <div className="social">
            <p>
              <strong>Social</strong>
            </p>
            <p>
              <br/>
              <br/>
              <a href="facebook">Facebook</a>
            </p>
            <p><a href="insta">Instagramk</a></p>
            <p><a href="linkedin">LinkedIn</a></p>
          </div>
        </div>
        <div className="all-right">
          <p>
            <strong>
              ©{new Date().getFullYear()}FFWD INC.
            </strong>
          </p>
          <p>All right reserve</p>
        </div>
      </div>
    </footer>
  </div>
)
