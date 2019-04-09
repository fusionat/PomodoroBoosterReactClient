const styles = theme => ({
  card: {
    display: "flex",
    flexDirection: "row",
    margin: theme.myMarging
  },

  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

export default styles;
