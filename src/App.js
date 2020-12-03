import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';

import theme from './theme';
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Intro />
        <Container maxWidth='lg'>
          <About />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
