import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Login from "./Login"
export class LoginContainer extends Component {
    static propTypes = {
    }

    render() {
        return (
            <Login {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
