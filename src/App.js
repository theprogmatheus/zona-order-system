import './App.css';

import logo from './assets/img/logo.png'

import { useState } from 'react';


function App() {


  const [form, setForm] = useState({
    id: "",
    name: "",
    phone: "",
    address: "",
    order: "",
    total: "",
    payment: "",
    extra: ""
  });


  const print = () => {
    window.print();
  }


  return (
    <>
      <div id="toPrint">

        <h1 style={{ fontSize: "1.3em" }}>WhatsApp</h1>
        <br />
        <p style={{ fontWeight: "bold", fontSize: "1em", marginBottom: "5px" }}>#{form.id}</p>
        <p>{form.name}</p>
        <br />
        <p style={{ fontSize: "0.9em" }}>{form.phone}</p>
        <br />
        <h3 style={{ fontWeight: "bold", fontSize: "1em", marginBottom: "5px" }}>Endereço</h3>
        <p>{form.address.split('\n').map(line => (
          <>
            {line}
            <br />
          </>
        ))}</p>
        <br />
        <h3 style={{ fontWeight: "bold", fontSize: "1em", marginBottom: "5px" }}>Pedido</h3>
        <p >{form.order.split('\n').map(line => (
          <>
            {line}
            <br />
          </>
        ))}</p>
        <br />
        <br />
        <p style={{ fontWeight: "bold", fontStyle: "italic" }}>Total: {form.total}</p>
        <p style={{ fontWeight: "bold", fontStyle: "italic" }}>Troco: {form.payment}</p>
        <br />

        {form.extra && (
          <>
            <h3 style={{ fontWeight: "bold", fontSize: "1em", marginBottom: "5px" }}>Observação</h3>
            <p>{form.extra.split('\n').map(line => (
              <>
                {line}
                <br />
              </>
            ))}</p>
            <br />
          </>
        )}

        <p style={{ fontSize: "0.85em", fontStyle: "italic", textTransform: "capitalize" }}>
          Agradecemos
          <br />
          a
          <br />
          preferência
        </p>

      </div>


      <div className='app'>
        <div className="auth-screen">

          <form
            className="auth-screen-form"
            onSubmit={(e) => {
              e.preventDefault();



              print();
            }}
          >

            <a href="https://theprogmatheus.github.io/zona-order-system/" className="auth-screen-brand">
              <img
                className="auth-screen-logo"
                src={logo}
                alt="logo"
              />
              <h1>Zona Order System</h1>
            </a>

            <input
              type="text"
              placeholder="Identificador"
              autoComplete='off'
              required


              value={form.id}
              onChange={(e) => {
                setForm({
                  ...form,
                  id: e.target.value
                })
              }}

            />

            <input
              type="text"
              placeholder="Nome do cliente"
              autoComplete='off'
              required

              value={form.name}
              onChange={(e) => {
                setForm({
                  ...form,
                  name: e.target.value
                })
              }}
            />
            <input
              type="text"
              placeholder="Número para contato"
              autoComplete='off'
              required

              value={form.phone}
              onChange={(e) => {
                setForm({
                  ...form,
                  phone: e.target.value
                })
              }}
            />

            <textarea
              type="text"
              placeholder="Endereço do cliente"
              autoComplete='off'
              required
              style={{ minHeight: "90px" }}

              value={form.address}
              onChange={(e) => {
                setForm({
                  ...form,
                  address: e.target.value
                })
              }}
            />

            <textarea
              type="text"
              placeholder="Pedido do cliente"
              autoComplete='off'
              required
              style={{ minHeight: "150px" }}

              value={form.order}
              onChange={(e) => {
                setForm({
                  ...form,
                  order: e.target.value
                })
              }}
            />

            <input
              type="text"
              placeholder="Valor total"
              autoComplete='off'
              required

              value={form.total}
              onChange={(e) => {
                setForm({
                  ...form,
                  total: e.target.value
                })
              }}
            />

            <input
              type="text"
              placeholder="Troco"
              autoComplete='off'

              value={form.payment}
              onChange={(e) => {
                setForm({
                  ...form,
                  payment: e.target.value
                })
              }}
            />

            <textarea
              type="text"
              placeholder="Observação"
              autoComplete='off'
              style={{ minHeight: "130px" }}

              value={form.extra}
              onChange={(e) => {
                setForm({
                  ...form,
                  extra: e.target.value
                })
              }}
            />

            <input id="submit" type="submit" value='Fazer pedido' />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
