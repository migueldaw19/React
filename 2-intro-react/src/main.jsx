import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp';



ReactDOM.createRoot(document.getElementById('root')).render(
  // Con StrictMode te avisará cuando una parte del código pueda dar error o lo planteado no sea la manera correcta
  // Detalle: A diferencia de Angular que para enviar un valor a un hijo se usa [usuario]="user" se usa usuario ={usuario}
  <React.StrictMode>
    <HelloWorldApp
      user={{ name: 'Pepe', lastName: 'Doe' }}
      id={ 1 }
      title='Hola Mundo'
    />
  </React.StrictMode>
)
