import styled from "styled-components/native";
import { colors, metrics } from "../../styles";

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ color }) => color};
  height: ${metrics.height * 0.12}px;
  padding: 0 ${metrics.width * 0.065}px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: bold;
  text-transform: lowercase;
`;

export const Value = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: light;
`;

export const ContentLabel = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
`;

export const ContentValue = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContentMyNeon = styled.View`
  padding: 2px 10px;
  align-items: center;
  border-radius: 10px;
  border-color: ${colors._4};
  border-width: 0.9px;
  flex-direction: row;
  margin-left: 10px;
`;

export const TextMyNeon = styled.Text`
  color: ${colors._4};
  margin-left: 5px;
`;

export const ContainerIcon = styled.View`
  width: ${metrics.width * 0.155}px;
  height: ${metrics.width * 0.155}px;
  border-radius: ${(metrics.width * 0.155) / 2}px;
  border-width: 1.5px;
  border-color: ${colors._3};
  justify-content: center;
  align-items: center;
`;

export const ContentIcon = styled.View`
  width: ${metrics.width * 0.13}px;
  height: ${metrics.width * 0.13}px;
  border-radius: ${(metrics.width * 0.13) / 2}px;
  border-width: 1.5px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: regular;
`;

export const ContainerLogo = styled.View`
  position: absolute;
  background-color: ${colors.yellow};
  height: 22px;
  width: 22px;
  bottom: -8px;
  border-radius: 11px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: #fff;
`;
