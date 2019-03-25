const fontSize = '50px';
const styles = theme => ({
    card: {
      display: 'flex',
      width: '470px'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flex: 2
    },
    content: {
      flex: '1 0 auto',
    },
    coverHolder: {
      display: 'flex',
      alignItems: 'center',
      flex: 1
    },
    cover: {
      width: '150px',
      height: '150px',
      display: 'flex',
      alignItems: 'center',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 48,
      width: 48,
    },

    play: {
      color: '#D3554E',
      fontSize: fontSize
    },

    pause: {
      color: '#D3554E',
      fontSize: fontSize
    }, 

    stop: {
      color: '#D3554E',
      fontSize: fontSize
    },

    chip: {
      fontSize: '0.7rem',
      height: '25px'
    }, 

    timer: {
      textAlign: 'center'
    }

  });

  export default styles;