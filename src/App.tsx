import React from 'react';
import './App.css';
import Form from './components/Form/Form';
let dict = new Set<string>();

export default function App() {
    const [message, setMessage] = React.useState<string>('');

    const addToDict = (word: string): void => {
        dict.add(word);
    }

    const srcInDict = (word: string): void => {
        if (dict.has(word)) {
          setMessage(`Word "${word}" exists!`);
        } else {
          setMessage(`Word "${word}" doesn't exists!`);
        }
    }

  return (
        <div className="App">
          <h1>DICTIONARY</h1>
          <p>Add words and search for them, make sure that the words are valid.(just letters and '-')</p>
          <br />
          <Form btnAction="add" handleData={addToDict}></Form>
          <br />
          <br />
          <Form btnAction="search" handleData={srcInDict}></Form>
          <br />
          <i>{message}</i>
        </div>
    );
}