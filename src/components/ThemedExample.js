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
    message: 'bork bork bork bork',
    trigger: '2',
  },
];

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot 
      steps={steps} 
      headerTitle={"Cachorra Bandida Chat Line"}
      floating={true}  
      botAvatar={"https://cursorcss.s3-sa-east-1.amazonaws.com/cursor.png"}
      userAvatar={"https://pbs.twimg.com/profile_images/1261298484252155907/ETeg24rh_400x400.jpg"}
      speechSynthesis={{ enable: true, lang: 'en' }}
    />
  </ThemeProvider>
);

export default ThemedExample;