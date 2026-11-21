import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL;

export default function App() {
  const [health, setHealth] = useState('loading...');
  useEffect(() => {
    fetch(`${API}/health`)
      .then((r) => r.json())
      .then((d) => setHealth(d.status))
      .catch(() => setHealth('down'));
  }, []);
  return <h1>Backend status: {health}</h1>;
}
