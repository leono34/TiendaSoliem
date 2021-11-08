<?php include "Views/templates/header.php"; ?>
<div class="card">
    <div class="card-header bg-dark text-white">
        <h6>Nueva Compra</h6>
    </div>
    <div class="card-body">
        <form id="frmCompra">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="codigo"><i class="fas fa-barcode"></i> Buscar Producto</label>
                        <input type="hidden" id="id" name="id">
                        <input id="codigo" class="form-control" type="text" name="codigo" placeholder="Código o nombre del producto">
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-group">
                        <label for="nombre">Descripción</label>
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Descripción del productos" disabled>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="cantidad">Cant</label>
                        <input id="cantidad" class="form-control" type="number" name="cantidad" onkeyup="calcularPrecio(event)" placeholder="Cant" disabled>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="precio">Precio</label>
                        <input id="precio" class="form-control" type="text" name="precio" placeholder="Precio compra" disabled>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="sub_total">Sub Total</label>
                        <input id="sub_total" class="form-control" type="text" name="sub_total" placeholder="Sub total" disabled>
                    </div>
                </div>

            </div>
        </form>
    </div>
</div>
<div class="table-responsive">
    <table class="table table-light table-bordered table-hover" id="t_com">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Sub Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="tblDetalle">
        </tbody>
    </table>
</div>
<div class="row">
    <div class="col-md-3">
        <div class="form-group">
            <label for="ruc"><i class="fas fa-users"></i> Buscar Proveedor</label>
            <input type="hidden" id="id_pr" name="id_pr" value="1">
            <input id="ruc" class="form-control" type="text" name="ruc" placeholder="Nombre del proveedor">
        </div>
    </div>
    <div class="col-md-5">
        <div class="form-group">
            <label for="nombre_pr">Nombre</label>
            <input id="nombre_pr" class="form-control" type="text" name="nombre_pr" placeholder="Nombre" disabled>
        </div>
    </div>
    <div class="col-md-4 ml-auto">
        <div class="form-group">
            <label for="total" class="font-weight-bold">Total a Pagar</label>
            <input id="total" class="form-control" type="text" name="total" placeholder="Total" disabled>
            <button class="btn btn-primary mt-2 btn-block" type="button" onclick="generarCompra()">Generar Compra</button>
        </div>
    </div>
</div>
<?php include "Views/templates/footer.php"; ?>