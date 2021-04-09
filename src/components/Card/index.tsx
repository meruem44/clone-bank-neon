import React from "react";

import {
  Container,
  Label,
  Value,
  ContentLabel,
  ContentValue,
  ContentMyNeon,
  TextMyNeon,
  ContainerIcon,
  ContainerLogo,
  ContentIcon,
  Name,
} from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../styles";

interface ICardProps {
  name: string;
  icon?: any;
  color: string;
  value?: string;
  myNeon?: boolean;
}

const Card: React.FC<ICardProps> = ({ name, icon, color, value, myNeon }) => {
  return (
    <Container color={color}>
      <ContentLabel>
        <Label>{name}</Label>
        {myNeon && (
          <ContentMyNeon>
            <MaterialCommunityIcons
              name="credit-card-minus"
              size={15}
              color={colors._4}
            />
            <TextMyNeon>10/10</TextMyNeon>
          </ContentMyNeon>
        )}
      </ContentLabel>

      <ContentValue style={icon && { alignItems: "center" }}>
        {myNeon && (
          <ContainerIcon>
            <ContentIcon>
              <Name>PL</Name>
            </ContentIcon>
            <ContainerLogo>
              <MaterialCommunityIcons name="balloon" size={16} color="#fff" />
            </ContainerLogo>
          </ContainerIcon>
        )}
        {value && <Value>{value}</Value>}
        {icon && <MaterialCommunityIcons name={icon} size={30} color="#fff" />}
      </ContentValue>
    </Container>
  );
};

export default Card;
