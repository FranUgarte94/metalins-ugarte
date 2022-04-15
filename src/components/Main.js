import acero from "../images/acero.png"

const Main = () => {
  return (
    <main className="main">
        <h2>El mejor buscador de Insumos Metalurgicos del país.</h2> 
        <h3>¡Busca, cotiza y compra con nosotros!</h3>
        <img src={acero} />
        <h2>Productos</h2> 

        <div class="card">
            
              <div class="card-body">
                <h5 class="card-title">Chapas</h5>
                <p class="card-text">Todo tipo de chapas, en variedad de espesores y terminaciones</p>
                
        </div>
      </div>

      <div class="card">
            
            <div class="card-body">
              <h5 class="card-title">Caños</h5>
              <p class="card-text">Caños redondos, cuadrados y rectangulares.</p>
              
      </div>
    </div>

    <div class="card">
            
            <div class="card-body">
              <h5 class="card-title">Perfiles</h5>
              <p class="card-text">UPN, IPN, perfil C, etc</p>
              
      </div>
    </div>

    </main>
  )
}

export default Main