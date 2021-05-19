import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
}

// Przyjmiemy, że zamówienie będzie mogło mieć jeden z następujących statusów:

// new – zamówienie w trakcie składania, jeszcze nie realizujemy,
// ordered – zamówienie złożone, należy zrealizować,
// ready – zamówienie przygotowane, należy dostarczyć,
// in delivery – [tylko z dostawą] zamówienie w trakcie dostawy,
// delivered – [tylko lokalne] zamówienie zostało dostarczone, ale jeszcze nie opłacone,
// done – zamówienie zostało dostarczone i opłacone,
// cancelled – zamówienie anulowane.
// W przypadku zamówień z dostawą status ordered oznacza zamówienie opłacone, a w przypadku zamówień lokalnych – tylko złożone, ponieważ klient płaci po zjedzeniu. Dlatego status delivered będziemy stosować tylko w lokalu, a zamówienia z dostawą będą przeskakiwać od razu z in delivery na done. Analogicznie, kelner w restauracji nie będzie używał statusu in delivery, tylko zmieni status z ready na delivered

export default App;
