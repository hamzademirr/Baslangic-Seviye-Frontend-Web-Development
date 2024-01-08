import { useEffect, useState } from 'react';
import './App.css';
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba Dunya",
    description: "{count} yeni mesajiniz var"
  },
  "en-US": {
    title: "Hello Word",
    description: "you have {count} new messages"
  }
}

function App() {
  const isLocal = localStorage.getItem('local');
  const defaultLocale = isLocal ? isLocal : navigator.language;
  const [local, setLocal] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('local', local);
  }, [local])

  return (
    <div className="App">
      <IntlProvider locale={local } messages={messages[local]}>
        <FormattedMessage id='title' />
        <p><FormattedMessage id='description' values={{count: 3}}/></p>

        <button onClick={() => setLocal("tr-TR")}>TR</button>
        <button onClick={() => setLocal("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
