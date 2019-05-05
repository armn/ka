import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">
                  404 kļūda — lapa nav atrasta.
                </h1>
                <p>Šāda lapa neeksistē.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
