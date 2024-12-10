import { createTheme, MantineProvider } from '@mantine/core';
import './index.css';
import '@mantine/carousel/styles.css';
import { AppRoutes } from './routes';

const theme = createTheme({
  breakpoints: {
    xs: '20em',     // 320px
    sm: '48em',     // 768px
    md: '64em',     // 1024px
    lg: '90em',     // 1440px
    xl: '120em',    // 1920px
    xxl: '160em',   // 2560px
  },
  fontSizes: {
    xs: 'clamp(0.75rem, 1vw, 0.875rem)',
    sm: 'clamp(0.875rem, 1.2vw, 1rem)',
    md: 'clamp(1rem, 1.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 2vw, 1.25rem)',
    xl: 'clamp(1.25rem, 2.5vw, 1.5rem)',
    xxl: 'clamp(1.5rem, 3vw, 2rem)',
  },
  spacing: {
    xs: 'clamp(0.5rem, 1vw, 0.75rem)',
    sm: 'clamp(0.75rem, 1.5vw, 1rem)',
    md: 'clamp(1rem, 2vw, 1.5rem)',
    lg: 'clamp(1.5rem, 2.5vw, 2rem)',
    xl: 'clamp(2rem, 3vw, 3rem)',
  },
  other: {
    maxWidth: {
      container: '1920px',
      content: '1440px',
    },
    sidePadding: {
      base: '5%',
      lg: '8%',
      xl: '10%',
      xxl: '12%',
    },
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1440,
          xl: 1920,
          xxl: 2560,
        },
      },
    },
  },
});

function App() {
  return (
    <MantineProvider 
      theme={theme}
      
    >
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;