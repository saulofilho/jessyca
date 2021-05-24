import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'var(--text-color)',
  headerFontColor: '#000',
  headerFontSize: '15px',
  botBubbleColor: 'var(--text-color)',
  botFontColor: '#000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'bork bork bork',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'bork bork',
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: 'bork bork bork bork',
    trigger: '2',
  },
];

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot 
      steps={steps} 
      headerTitle={"Talk to my dog"}
      floating={true}  
      speechSynthesis={{ enable: true, lang: 'en' }}
      botAvatar={"https://i.imgur.com/DPqpXFG.png"}
      userAvatar={"https://jessyca-portfolio.netlify.app/favicon-32x32.png?v=2e7eb4814327f68dbf2b3a2749d8f377"}
    />
  </ThemeProvider>
);

export default ThemedExample;