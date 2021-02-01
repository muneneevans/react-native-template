import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import WelcomePage from "./WelcomePage"

export class WelcomePageContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <WelcomePage {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePageContainer)
