import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
      const apiKey = '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'; // Reemplaza con tu clave de API de OpenAI
      const requestBody = {
        model: 'gpt-3.5-turbo', // Modelo de ChatGPT a utilizar
        messages: [{ role: 'user', content: input }],
      };
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      };

      const res = await axios.post(apiUrl, requestBody, { headers });
      setResponse(res.data.choices[0].text); // Actualiza la respuesta del estado
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
      <p>{response}</p>
    </div>
  );
};

export default Chat;
