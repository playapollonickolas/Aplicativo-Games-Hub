import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  innerView: {
    marginBottom: 10,
    padding: 10,
  },
});

export default styles;
