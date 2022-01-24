import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
  type: 'up' | 'down';
  
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 1.5px;
  border-color:${({theme}) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;
  justify-content: center;

  ${({isActive, type}) => isActive && type === 'down' && css`
    background-color: ${({theme}) => theme.colors.attention_light}
    border-width: 0px;
  `}

  ${({isActive, type}) => isActive && type === 'up' && css`
    background-color: ${({theme}) => theme.colors.success_light}
    border-width: 0px;
  `}

`

export const Icon = styled(Feather)<IconsProps>`
  color: ${({theme, type}) => 
    type === 'up' ? theme.colors.success : theme.colors.attention 
  };
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
` 

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`