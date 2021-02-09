import React from 'react';
import { View, Text } from 'react-native';
import styled from "styled-components"

const Page = styled.View`
    flex:1;
    background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR}
    padding-top: 50px
    `

const Field = styled.View`
    padding-vertical: 20px;
    padding-horizontal: 20px;
`
const Label = styled.Text`
    font-size: ${props => props.theme.FONT_SIZE_MEDIUM};
    font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_BOLD};
    color: ${props => props.theme.colors.fincaRed.PRIMARY_COLOR}
    `
const LoginInput = styled.TextInput`
    font-size: ${props => props.theme.FONT_SIZE_MEDIUM};
    font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
    color: ${props => props.theme.PRIMARY_TEXT_COLOR}
    padding-vertical: 7.5px;
    padding-horizontal: 10px;
    border-width: 1px; 
    border-color: #a0a0a0;
    border-radius: 5px;
`

const LoginButtonSection = styled.View`
    padding-top: 40px;    
    padding-bottom: 20px;    
    padding-horizontal: 20px;
    justify-content:center;
    align-items: stretch;
`

const LoginButton = styled.TouchableOpacity`
    padding-vertical: 10px;
    padding-horizontal: 10px;
    
    border-radius: 5px;
    background-color: ${props => props.theme.PRIMARY_COLOR}
    box-shadow: 0px 1px 3px #a0a0a0;
    elevation: 3;

    flex-direction: row;
`

const LoginButtonText = styled.Text`
    font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
    font-size: ${props => props.theme.FONT_SIZE_LARGE};
    color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR}
    flex:1;
    text-align: center;    
    margin-horizontal: 10px;
    
    `

const Link = styled.TouchableOpacity`
margin-vertical: 10px;
padding-vertical: 10px;
    `

const LinkText = styled.Text`
    font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
    font-size: ${props => props.theme.FONT_SIZE_SMALL};
    color: ${props => props.theme.PRIMARY_COLOR}
    text-align: center;
    text-decoration: underline;    
`

export default function Login() {
    return (
        <Page>
            <Field>
                <Label>Your phone number</Label>
                <LoginInput placeholder="phone number" />
            </Field>
            <Field>
                <Label>Your security pin</Label>
                <LoginInput placeholder="xxxx" />
            </Field>
            <LoginButtonSection>
                <LoginButton>
                    <LoginButtonText>Log in</LoginButtonText>
                </LoginButton>
            </LoginButtonSection>

            <Link>
                <LinkText>Forgot password</LinkText>
            </Link>
            <Link>
                <LinkText>I don't have an account</LinkText>
            </Link>
        </Page>
    );
}
