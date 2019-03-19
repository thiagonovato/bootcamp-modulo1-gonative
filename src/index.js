import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    usuario: "Thiago",
    todos: [
      { id: 0, text: "fazer café" },
      { id: 1, text: "estudar o gonative" }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text>Teste</Text>
        </View>
      </View>
    );
  }
}

// Não há herança de estilos no react-native,
// exceto um Text dentro de outro Text
const styles = StyleSheet.create({
  container: {
    // flex: 1 diz que o container preenche a tela inteira
    flex: 1,
    // flexDirection: 'column' é o padrão
    flexDirection: "row",
    // flexWrap não deixa o componente sair da tela, quebrando pra linha abaixo
    flexWrap: "wrap",
    // Alinhamentos horizontalmente quando row
    // Alinhamento verticalmente quando column
    justifyContent: "center",
    // Alinha o inverso do justifyContent (apenas com uma linha)
    //alignItems: "center",
    // Usar alignContent quando tive rmais de uma linha
    alignContent: "center",
    backgroundColor: "#333"
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#f00",
    color: "#FFF",
    margin: 20
  }
});
