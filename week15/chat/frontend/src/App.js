import { useEffect, useState, useRef } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const connectionRef = useRef();

  useEffect(() => {
    const connection = new WebSocket("ws://localhost:4000");
    // connection.onerror to see error
    connection.onopen = () => {
      console.log("web socket connected");
    };
    connection.onmessage = (event) => {
      const blob = event.data;

      blob.text().then((message) => {
        console.log(message);
        // below won't work as messages is [] via JS closure
        // it will always treat messages as []
        // setMessages([...messages, message]);

        setMessages((messages) => {
          return [...messages, message];
        });
      });
    };

    connectionRef.current = connection;
  }, []);

  return (
    <div>
      <ul id="messages">
        {messages.map((message) => {
          return <li key={message}>{message}</li>;
        })}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          connectionRef.current.send(message);
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
