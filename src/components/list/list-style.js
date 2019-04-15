const styles = theme => {

  const card = {
    display: "flex",
    flexDirection: "row",
    margin: theme.myMarging
  };

  return {
    card: {
      ...card
    },
    
    progressBar: {
      ...card,
      justifyContent: 'center'
    },
      
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  }
};

export default styles;
