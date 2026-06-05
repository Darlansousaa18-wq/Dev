import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Index() {
  const [filtro, setFiltro] = useState("todas");

  const [novoItem, setNovoItem] = useState("");

  const [tarefas, setTarefas] = useState([
    { id: "1", titulo: "Comprar arroz", concluida: true },
    { id: "2", titulo: "Comprar leite", concluida: false },
  ]);

  // ADICIONAR ITEM
  const adicionarItem = () => {
    if (novoItem.trim() === "") return;

    const novaTarefa = {
      id: Date.now().toString(),
      titulo: novoItem,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setNovoItem("");
  };

  // DELETAR ITEM
  const deletarItem = (id: string) => {
    const novaLista = tarefas.filter((item) => item.id !== id);
    setTarefas(novaLista);
  };

  // ALTERAR STATUS
  const alternarStatus = (id: string) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    );

    setTarefas(novasTarefas);
  };

  // FILTROS
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Lista de Compras</Text>

      {/* INPUT */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicionar item..."
          value={novoItem}
          onChangeText={setNovoItem}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarItem}
        >
          <Text style={styles.textoAdicionar}>+</Text>
        </TouchableOpacity>
      </View>

      {/* FILTROS */}
      <View style={styles.filtros}>
        <TouchableOpacity
          style={[
            styles.botaoFiltro,
            filtro === "todas" && styles.botaoAtivo,
          ]}
          onPress={() => setFiltro("todas")}
        >
          <Text style={styles.textoFiltro}>Todas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botaoFiltro,
            filtro === "pendentes" && styles.botaoAtivo,
          ]}
          onPress={() => setFiltro("pendentes")}
        >
          <Text style={styles.textoFiltro}>Pendentes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.botaoFiltro,
            filtro === "concluidas" && styles.botaoAtivo,
          ]}
          onPress={() => setFiltro("concluidas")}
        >
          <Text style={styles.textoFiltro}>Concluídas</Text>
        </TouchableOpacity>
      </View>

      {/* LISTA */}
      <FlatList
        data={tarefasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            
            {/* CHECKBOX */}
            <TouchableOpacity
              style={[
                styles.checkbox,
                item.concluida && styles.checkboxAtivo,
              ]}
              onPress={() => alternarStatus(item.id)}
            >
              {item.concluida && (
                <Text style={styles.check}>✓</Text>
              )}
            </TouchableOpacity>

            {/* TEXTO */}
            <Text
              style={[
                styles.itemTexto,
                item.concluida && styles.concluida,
              ]}
            >
              {item.titulo}
            </Text>

            {/* BOTÃO DELETE */}
            <TouchableOpacity
              onPress={() => deletarItem(item.id)}
              style={styles.botaoDelete}
            >
              <Text style={styles.deleteTexto}>🗑</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b5e20",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffeb3b",
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
  },

  botaoAdicionar: {
    backgroundColor: "#ffeb3b",
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },

  textoAdicionar: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1b5e20",
  },

  filtros: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  botaoFiltro: {
    backgroundColor: "#fdd835",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  botaoAtivo: {
    backgroundColor: "#2e7d32",
    borderWidth: 2,
    borderColor: "#ffeb3b",
  },

  textoFiltro: {
    color: "#1b1b1b",
    fontWeight: "600",
  },

  item: {
    backgroundColor: "#fffde7",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  checkbox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: "#2e7d32",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  checkboxAtivo: {
    backgroundColor: "#2e7d32",
  },

  check: {
    color: "#ffeb3b",
    fontWeight: "bold",
    fontSize: 16,
  },

  itemTexto: {
    flex: 1,
    fontSize: 16,
    color: "#1b1b1b",
    fontWeight: "500",
  },

  concluida: {
    textDecorationLine: "line-through",
    color: "#757575",
  },

  botaoDelete: {
    backgroundColor: "#ef5350",
    padding: 8,
    borderRadius: 10,
  },

  deleteTexto: {
    fontSize: 16,
  },
});