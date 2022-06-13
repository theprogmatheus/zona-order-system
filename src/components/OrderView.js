import styles from './OrderView.module.css';


import logo from './../assets/img/logo.png'

const OrderView = () => {
  return (
    <div className={styles.view}>

      <form
        className={styles.authScreenForm}
      >

        <div className={styles.authScreenBrand}>
          <img
            className={styles.authScreenLogo}
            src={logo}
            alt="logo"
          />

          <h1>I Want Eat</h1>
        </div>

        <input
          type="text"
          placeholder="Nome do cliente"
        />

        <input
          type="text"
          placeholder="Número para contato"
        />

        <textarea
          placeholder="Endereço do cliente"
          style={{ minHeight: "70px" }}

        />

        <textarea
          placeholder="Pedido do cliente"
          style={{ minHeight: "100px" }}
        />

        <input
          type="text"
          placeholder="Valor total"
        />
        <input
          type="text"
          placeholder="Troco"
        />


        <textarea
          placeholder="Observação"
          style={{ minHeight: "50px" }}
        />


        <input className={styles.authScreenFormSubmit} type="submit" value='Imprimir Pedido' />
      </form>

    </div>
  )
}

export default OrderView