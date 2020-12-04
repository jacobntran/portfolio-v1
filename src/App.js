import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from './theme';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Intro />
        <About />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
