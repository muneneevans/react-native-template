import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from "styled-components"

import { getTheme } from "store/Configuration/selectors"
import Routes from "./Routes"
export class RoutesContainer extends Component {
    static propTypes = {
        theme: PropTypes.object
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Routes {...this.props} />
            </ThemeProvider>
        )
    }
}

const mapStateToProps = (state) => ({
    theme: getTheme(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer)
