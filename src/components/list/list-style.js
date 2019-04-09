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
  },
  li: {
    paddingLeft: 0
  },
  
  timerText: {
    display: "inline",
    color: "#283593"
  },

  avatarImage: {
    width: "10%",
    height: "10%"
  }
});

export default styles;
