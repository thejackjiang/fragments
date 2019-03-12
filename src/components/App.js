import React, { Component } from 'react'
// import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import gql from 'graphql-tag';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={HELLO_QUERY}>
          {props => {
            const { data: { allUsers }, loading, error, refetch } = props
            let mapped;
            if (allUsers) {
              mapped = allUsers.map((elm) => {
                return (<div>
                  <h1>{elm.firstName}</h1>
                  <h1>{elm.lastName}</h1>
                </div>)
              })
            }
            return (
              <div>
                <h3>{mapped}</h3>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

const HELLO_QUERY = gql`
{
  allUsers{
    firstName
    lastName
  }
}
`

export default App
