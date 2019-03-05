import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  // É chamado assim que o component é renderizado em tela
  // Primeiro método executado após montado
  // Chamada API, manipular estados etc
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
      });
    }, 3000);
  }

  // Estático, não tem acesso ao this
  // Executado antes do didmount quanto antes de cada atualização
  // (alteração em props ou state)
  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text };
  }

  // Executado a cada atualização, antes mesmo do componente atualizar
  // Evita o render ser executado em determinada condição
  shouldComponentUpdate(nextProps, prevState) {
    return true;
  }

  // Component atualizado, pode executar aqui dentro
  componentDidUpdate(prevProps, prevState) {}

  // Executado antes do componente sumir da tela
  componentWillUnmount() {}

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
        <Text>{this.state.usuario}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
