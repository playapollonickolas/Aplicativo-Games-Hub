import { StyleSheet } from "react-native";

//https://coolors.co/palette/f72585-7209b7-3a0ca3-4361ee-4cc9f0

const colors = {
  primary: "#F72585",
  secondary: "#7209B7",
  accent: "#4CC9F0",
  accentNeutral: "#64dfdf",
  backgroundColor: "#f8f9fa",
  black: "#202020",
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,

    marginTop: 30,

    color: colors.primary,

    justifyContent: "center",
    alignItems: "center",
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,

    marginTop: 20,

    color: colors.secondary,

    margin: 5,

    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginInput: {
    margin: 10,
    textAlign: "center",

    flex: 0,
    borderRadius: 5,
  },
  body: {
    backgroundColor: colors.backgroundColor,
  },
  info: {
    marginBottom: 10,
    margin: 10,
    color: "gray",
  },
  list: {
    marginBottom: 5,
    margin: 10,
    color: "gray",
    borderWidth: 2,
    borderRadius: 10,

    borderColor: colors.secondary,
  },

  button: {
    backgroundColor: colors.accent,
    padding: 5,
    borderRadius: 10,
    textAlign: "center",
    margin: 5,
  },
  deleteButton: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 10,
    margin: 5,
  },
  deleteButtonText: {
    color: "white",
  },
  container: {
    padding: 10,
    marginTop: 20,

    backgroundColor: colors.backgroundColor,
    color: "white",

    margin: 3,
  },
  gameTitle: {
    color: colors.black,
    fontSize: 18,
    margin: 5,
  },
  text: {
    color: colors.black,
    fontSize: 13,
  },
  innerView: {
    marginBottom: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 2,
    padding: 1,
  },
  cell: {
    flex: 1,
    padding: 7,
    borderWidth: 0,

    borderRadius: 5,

    borderColor: "none",

    color: colors.black,

    backgroundColor: colors.accentNeutral,

    marginHorizontal: 1,
    textAlign: "center",

    fontSize: 12,
  },
  titleCell: {
    flex: 1,
    padding: 5,
    borderWidth: 0,

    borderRadius: 5,

    borderColor: "none",
    textAlign: "center",

    backgroundColor: colors.accent,
    fontStyle: "bold",

    color: colors.black,

    fontSize: 12,

    alignItems: "center",
  },
  table: {
    justifyContent: "center",
    alignItems: "center",
  },
  credits: {
    marginTop: 50,
    fontSize: 12,
    justifyContent: "flex-end",
    color: "gray",
  },
});

export default styles;
