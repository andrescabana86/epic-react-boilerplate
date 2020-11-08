import React from 'react'
import './app.sass'

export class App extends React.PureComponent {
  render() {
    return (
      <section className="app">
        <header className="app__header">
          <h1 data-testid="title" className="app__header-title">
            Welcome to my boilerplate
          </h1>
        </header>
      </section>
    )
  }
}
