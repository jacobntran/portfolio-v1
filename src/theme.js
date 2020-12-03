import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    text: {
      primary: '#FAFAFA',
      secondary: '#424242',
    },
    background: {
      paper: '#424242',
    },
  },
});

export default theme;
