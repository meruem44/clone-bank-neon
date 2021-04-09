import React from "react";
import { StatusBar } from "react-native";

import Card from "../../components/Card";
import { colors } from "../../styles";

import { Container, List } from "./styles";

function Home() {
  return (
    <Container>
      <StatusBar
        backgroundColor={colors._1}
        translucent
        barStyle="light-content"
      />

      <List>
        <Card name="Meu Neon" color={colors._1} myNeon />
        <Card name="Saldo" color={colors._2} value="R$1.500,00" />
        <Card name="Crédito" color={colors._3} value="R$2.500,00" />
        <Card name="Investimento" color={colors._4} value="R$3.000,00" />
        <Card name="Indicação" color={colors._5} icon="account-multiple" />
        <Card
          name="Cartões"
          color={colors._6}
          icon="credit-card-plus-outline"
        />
        <Card
          name="Transferências"
          color={colors._5}
          icon="contactless-payment"
        />
        <Card name="Pagamentos" color={colors._4} icon="barcode-scan" />
        <Card name="Pix" color={colors._3} icon="cards-club" />
        <Card name="Recargas" color={colors._2} icon="cellphone" />
        <Card name="Depósitos" color={colors._1} icon="bank-transfer-in" />
      </List>
    </Container>
  );
}

export default Home;
