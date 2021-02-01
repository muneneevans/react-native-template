import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styled from "styled-components"
import fincaLogo from "assets/images/logos/finca-logo.png"

const Page =styled.View`
  flex:1;
  background-color: #B50937;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.Image`
  height: 200px; 
  width: 200px;
`

export default function LoadingPage() {
  return (
    <Page>
      <StatusBar backgroundColor="#B50937" barStyle="dark-content" />
      <Logo source={fincaLogo}/>
    </Page>
  );
}
