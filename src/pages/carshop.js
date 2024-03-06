import "../App.css";
import React from "react";

function Carshop() {
  return (
    <div>
      <div class="container">
        <h1>Carrito</h1>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acción</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody id="items"></tbody>
          <tfoot>
            <tr id="footer">
              <th scope="row" colspan="5">
                Carrito vacío - comience a comprar!
              </th>
            </tr>
          </tfoot>
        </table>
        <div class="row" id="cards"></div>
      </div>

      <template id="template-footer">
        <th scope="row" colspan="2">
          Total productos
        </th>
        <td>10</td>
        <td>
          <button class="btn btn-danger btn-sm" id="vaciar-carrito">
            vaciar todo
          </button>
        </td>
        <td class="font-weight-bold">
          $ <span>5000</span>
        </td>
      </template>

      <template id="template-carrito">
        <tr>
          <th scope="row">id</th>
          <td>Café</td>
          <td>1</td>
          <td>
            <button class="btn btn-info btn-sm">+</button>
            <button class="btn btn-danger btn-sm">-</button>
          </td>
          <td>
            $ <span>500</span>
          </td>
        </tr>
      </template>

      <template id="template-card">
        <div class="col-12 mb-2 col-md-4">
          <div class="card">
            <img src="" alt="" class="card-img-top" />
            <div class="card-body">
              <h5>Titulo</h5>
              <p>precio</p>
              <button class="btn btn-dark">Comprar</button>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default Carshop;
