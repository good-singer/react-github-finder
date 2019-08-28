import React, { Component } from 'react'

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const {
      name,
      avatar_url,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists
    } = this.props.user
    return (
      <div>
        {login}
      </div>
    )
  }
}
