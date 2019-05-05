import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
            borderBottom: `2px solid black`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                'rgb(255, 63, 0) 5px -5px 0px, rgb(255, 63, 0) 5px 5px 0px, rgb(255, 63, 0) -5px -5px 0px, rgb(255, 63, 0) -5px 5px 0px',
              backgroundColor: '#ff3f00',
              color: 'black',
              lineHeight: '1',
              padding: '0.25em',
              border: '4px solid black'
            }}
          >
            Jaunākie raksti
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
