import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
// import { extendTheme } from '@chakra-ui/react'
// import customTheme from './theme/customTheme.jsx'
// const theme = extendTheme({ customTheme })

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* <ChakraProvider theme={theme}> */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
