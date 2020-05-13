import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import './ContatoPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = () => (
  <main className="Contact">
    <div className="contato-hero">
      <div className="default-flex">
        <p className="default-text-header container invert-color">cotato</p>
        <p className="default-text-title container invert-color">vamos falar?</p>
        <p className="default-text-sub container invert-color">
          Liga pra gente, manda um email,
          vem conhecer a agência.
          Estamos esperando seu contato.
          </p>
      </div>
    </div>
    <div className="contato-infos container">
      <div className="contato-adress-container">
        <div className="call-us">
          <p className="default-text-header">
            <strong>Call us on</strong>
          </p>
          <p className="default-text-header top-zero">
            +55 48 3364 5570
            <br/>
            go@ffwd.rocks
          </p>
        </div>
        <div className="adress">
          <p className="default-text-header">
            <strong>Adress</strong>
          </p>
          <p className="default-text-header top-zero">
            Rua Niberto Haase, 100 - Sala 301
            <br/>
            Santa Mônica,
            <br/>
            Florianópolis, SC
            <br/>
            88035-215
          </p>
        </div>
      </div>
      <div className="contato-infos-container">
        <p className="default-text-header">01.</p>
        <p className="default-text-title">contato para novos negócios:</p>
        <p className="default-text-header">go@ffwd.com.br</p>
      </div>
      <div className="contato-infos-container">
        <p className="default-text-header">02.</p>
        <p className="default-text-title">assine nossa news</p>
        <p className="default-text-header top-zero">*sem spam, prometemos =]</p>
        <section className="news-email">
          <input 
            type="text" 
            placeholder="E-mail"
          />
          <div className="default-btn news-btn">
            <button>cadastre-se</button>
          </div>
        </section>
      </div>
    </div>
    <div className="contato-social-container">
      <section className="social-btns container">
        <div className="social-btn-style">
          <button>
            <a href="https://wa.me/5511933430190?text=Olá">
              <div class="whatsapp-selo-desk">phone</div>
            </a>
          </button>
        </div>
        <div className="social-btn-style">
          <button>
            <a href="https://wa.me/5511933430190?text=Olá">
              <div class="whatsapp-selo-desk">insta</div>
            </a>
          </button>
        </div>
        <div className="social-btn-style">
          <button>
            <a href="https://wa.me/5511933430190?text=Olá">
              <div class="whatsapp-selo-desk">fb</div>
            </a>
          </button>
        </div>
        <div className="social-btn-style">
          <button>
            <a href="https://wa.me/5511933430190?text=Olá">
              <div class="whatsapp-selo-desk">mail</div>
            </a>
          </button>
        </div>
      </section>
    </div>
  </main>
)

const ContatoPage = ({ data: { page }, location }) => (
  <Layout
    location={location}
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContatoPage

export const pageQuery = graphql`
  query ContatoPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        phone
        email
      }
    }
  }
`
