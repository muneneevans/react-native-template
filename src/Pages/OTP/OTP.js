import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styled from 'styled-components';
import auth from '@react-native-firebase/auth';
import PropTypes from 'prop-types';
import {useForm, Controller} from 'react-hook-form';
import Switcher from 'components/Switcher';

const Page = styled.View`
    flex:1;
    background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR}
    padding-top: 50px
    `;

const Field = styled.View`
  padding-vertical: 20px;
  padding-horizontal: 20px;
`;
const Label = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE_MEDIUM};
  font-family: ${(props) => props.theme.PRIMARY_FONT_FAMILY_BOLD};
  color: ${(props) => props.theme.colors.fincaRed.PRIMARY_COLOR};
`;
const LoginInput = styled.TextInput`
    font-size: ${(props) => props.theme.FONT_SIZE_MEDIUM};
    font-family: ${(props) => props.theme.PRIMARY_FONT_FAMILY};
    color: ${(props) => props.theme.PRIMARY_TEXT_COLOR}
    padding-vertical: 7.5px;
    padding-horizontal: 10px;
    border-width: 1px; 
    border-color: #a0a0a0;
    border-radius: 5px;
`;

const LoginButtonSection = styled.View`
  padding-top: 40px;
  padding-bottom: 20px;
  padding-horizontal: 20px;
  justify-content: center;
  align-items: stretch;
`;

const LoginButton = styled.TouchableOpacity`
    padding-vertical: 10px;
    padding-horizontal: 10px;
    
    border-radius: 5px;
    background-color: ${(props) => props.theme.PRIMARY_COLOR}
    box-shadow: 0px 1px 3px #a0a0a0;
    elevation: 3;

    flex-direction: row;
`;

const LoginButtonText = styled.Text`
    font-family: ${(props) => props.theme.PRIMARY_FONT_FAMILY};
    font-size: ${(props) => props.theme.FONT_SIZE_LARGE};
    color: ${(props) => props.theme.PRIMARY_FOREGROUND_COLOR}
    flex:1;
    text-align: center;    
    margin-horizontal: 10px;
    
    `;

const ErrorText = styled.Text`
  font-family: ${(props) => props.theme.PRIMARY_FONT_FAMILY};
  font-size: ${(props) => props.theme.FONT_SIZE_SMALL};
  color: ${(props) => props.theme.colors.red.PRIMARY_COLOR};
`;

const Link = styled.TouchableOpacity`
  margin-vertical: 10px;
  padding-vertical: 10px;
`;

const LinkText = styled.Text`
    font-family: ${(props) => props.theme.PRIMARY_FONT_FAMILY};
    font-size: ${(props) => props.theme.FONT_SIZE_SMALL};
    color: ${(props) => props.theme.PRIMARY_COLOR}
    text-align: center;
    text-decoration: underline;    
`;

export default function Login({confirmCode}) {
  // If null, no SMS has been sent
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => confirmCode(data.code);
  return (
    <Page>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <Field>
            <Label>Verification code</Label>

            <Switcher
              value={errors.code?.type}
              required={<ErrorText>This field is required</ErrorText>}
              pattern={<ErrorText>Enter a valid phone number</ErrorText>}
            />

            <LoginInput
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType={'phone-pad'}
            />
          </Field>
        )}
        name="code"
        rules={{
          required: true,
        }}
        defaultValue=""
      />

      <LoginButtonSection>
        <LoginButton onPress={handleSubmit(onSubmit)}>
          <LoginButtonText>Verify</LoginButtonText>
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

Login.propTypes = {
  confirmCode: PropTypes.func,
};
