import React from "react"
import { StatusBar } from "react-native"
import styled from "styled-components"
import fincaLogo from "assets/images/logos/finca-logo-horizontal.png"
import FAIcon from "react-native-vector-icons/SimpleLineIcons"

const Page = styled.View`
    flex:1;
    background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR}
    `

const Banner = styled.View`
    padding-vertical: 40px
    padding-horizontal: 20px;
    background-color: ${props => props.theme.colors.fincaRed.PRIMARY_COLOR};
    justify-content: center;
    align-items: center
`
const BannerImage = styled.Image`
    height: 150px;
    resize-mode: contain;
`

const LoginSection = styled.View`
    padding-vertical: 40px;    
    padding-horizontal: 30px;
    justify-content:center;
    align-items: stretch;
`


const LoginButton = styled.TouchableOpacity`
    padding-vertical: 10px;
    padding-horizontal: 10px;
    border-width: 1px;
    border-radius: 5px;
    border-color: ${props => props.theme.PRIMARY_COLOR};
    background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR}
    box-shadow: 0px 1px 3px #a0a0a0;
    elevation: 3;

    flex-direction: row;
`

const LoginIcon = styled(FAIcon)`
    color: ${props => props.theme.PRIMARY_COLOR};
    margin-horizontal: 10px;
    
`
const LoginButtonText = styled.Text`
    font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_BOLD};
    font-size: ${props => props.theme.FONT_SIZE_LARGE};
    color: ${props => props.theme.PRIMARY_COLOR}
    flex:1;
    text-align: center;
    border-left-width: 1px;
    border-left-color: ${props => props.theme.PRIMARY_COLOR}
    margin-horizontal: 10px;

`
const Divider = styled.View`
    height: 2px;
    border-radius: 5px;
    margin-horizontal: 30px;
    background-color: #d3d3d3;
`

const SignupSection = styled.View`
    padding-vertical: 40px;    
    padding-horizontal: 30px;
    justify-content:center;
    align-items: stretch;
`

const SignupButton = styled.TouchableOpacity`
    padding-vertical: 10px;
    padding-horizontal: 10px;
    
    border-radius: 5px;
    background-color: ${props => props.theme.PRIMARY_COLOR}
    box-shadow: 0px 1px 3px #a0a0a0;
    elevation: 3;

    flex-direction: row;
`

const SignupIcon = styled(FAIcon)`
    color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR};
    margin-horizontal: 10px;
    
`
const SignupButtonText = styled.Text`
    font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_BOLD};
    font-size: ${props => props.theme.FONT_SIZE_LARGE};
    color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR}
    flex:1;
    text-align: center;
    border-left-width: 1px;
    border-left-color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR}
    margin-horizontal: 10px;

`


export default () => (
    <Page>
        <StatusBar backgroundColor="#B50937" barStyle="light-content" />
        <Banner>
            <BannerImage source={fincaLogo} />
        </Banner>

        <LoginSection>
            <LoginButton >
                <LoginIcon name="login" size={20} />
                <LoginButtonText>Log in</LoginButtonText>
            </LoginButton>
        </LoginSection>

        <Divider />
        <SignupSection>
            <SignupButton >
                <SignupIcon name="rocket" size={20} />
                <SignupButtonText>Sign up</SignupButtonText>
            </SignupButton>
        </SignupSection>
    </Page>
)

