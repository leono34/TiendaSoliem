let t_user, t_caja, t_cli, t_pro, t_Pr,
    t_h_c, t_h_v;
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('frmUsuario')) {
        const input = document.querySelector('#correo');
        const expresiones = {
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        }
        const campos = {
            correo: false
        }
        const validarFormulario = (e) => {
            switch (e.target.name) {
                case "correo":
                    validarCampo(expresiones.correo, e.target, 'correo');
                    break;
            }
        }
        const validarCampo = (expresion, input, campo) => {
            if (expresion.test(input.value)) {
                document.getElementById(campo).classList.remove('is-invalid');
                campos[campo] = true;
                document.getElementById('btnAccion').classList.remove('d-none');
            } else {
                document.getElementById('btnAccion').classList.add('d-none');
                document.getElementById(campo).classList.add('is-invalid');
                campos[campo] = false;
            }
        }
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    }
    const buttons = [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',

                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para PDF
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte de usuarios',
                filename: 'Reporte de usuarios',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para print
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
    ];
    const language = {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontró nada",
            "info": "Mostrando del _START_ al _END_ de un total de _TOTAL_",
            "infoEmpty": "No hay registros",
            "emptyTable": "No hay datos para mostrar",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "paginate": {
                "first": "Primera",
                "last": "Última",
                "next": "Siguiente",
                "previous": "Anterior"
            },
    }
    //usuarios
    t_user = $('#t_user').DataTable({
        "aPreocesing": true,
        "aServerSide": true,
        "ajax": {
            "url": "" + base_url + "usuarios/listar",
            "dataSrc": ""
        },
        "columns": [{
                "data": "id"
            },
            {
                "data": "usuario"
            },
            {
                "data": "correo"
            },
            {
                "data": "nombre"
            },
            {
                "data": "estado"
            },
            {
                "data": "acciones"
            }
        ],
        "dom": "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons,
        language,
        "resonsieve": true,
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [
            [5, "asc"]
        ]
    });
    //Clientes
    t_cli = $('#t_cli').DataTable({
        "aPreocesing": true,
        "aServerSide": true,
        "ajax": {
            "url": "" + base_url + "clientes/listar",
            "dataSrc": ""
        },
        "columns": [{
                "data": "id"
            },
            {
                "data": "nombre"
            },
            {
                "data": "telefono"
            },
            {
                "data": "direccion"
            },
            {
                "data": "estado"
            },
            {
                "data": "acciones"
            }
        ],
        "dom": "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons,
        language,
        "resonsieve": true,
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [
            [0, "desc"]
        ]
    });
	//Clientes
    t_Pr = $('#t_Pr').DataTable({
        "aPreocesing": true,
        "aServerSide": true,
        "ajax": {
            "url": "" + base_url + "proveedor/listar",
            "dataSrc": ""
        },
        "columns": [{
                "data": "id"
            },
			{
                "data": "ruc"
            },
            {
                "data": "nombre"
            },
            {
                "data": "telefono"
            },
            {
                "data": "direccion"
            },
            {
                "data": "estado"
            },
            {
                "data": "acciones"
            }
        ],
        "dom": "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons,
        language,
        "resonsieve": true,
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [
            [0, "desc"]
        ]
    });
    t_h_c = $('#t_compras').DataTable({
        "aPreocesing": true,
        "aServerSide": true,
        "ajax": {
            "url": "" + base_url + "compras/listar_historial",
            "dataSrc": ""
        },
        "columns": [{
                "data": "id"
            },
            {
                "data": "nombre"
            },
            {
                "data": "total"
            },
            {
                "data": "fecha"
            },
            {
                "data": "estado"
            },
            {
                "data": "acciones"
            }
        ],
        
        "drawCallback": function () {
            let api = this.api();
            $(api.columns(2).footer()).html(
                'Total:  ' + api.columns(2, {
                    page: 'current'
                }).data().sum()
            )
        },
        "dom": "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons,
        language,
        "resonsieve": true,
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [
            [3, "desc"]
        ]
        
    });
    t_h_v = $('#t_ventas').DataTable({
        "aPreocesing": true,
        "aServerSide": true,
        "ajax": {
            "url": "" + base_url + "compras/listar_ventas",
            "dataSrc": ""
        },
        
        "columns": [{
                "data": "id"
            },
            {
                "data": "nombre"
            },
            {
                "data": "total"
            },
            {
                "data": "fecha"
            },
            {
                "data": "estado"
            },
            {
                "data": "acciones"
            }
        ],
        "drawCallback": function () {
            let api = this.api();
            $(api.columns(2).footer()).html(
                'Total:  ' + api.columns(2, {
                    page: 'current'
                }).data().sum()
            )
        },
        "dom": "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons,
        language,
        "resonsieve": true,
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [
            [0, "desc"]
        ]
    });
    $('#min').change(function (e) {
        t_h_v.draw();
        t_h_c.draw();
    });
    $('#max').change(function (e) {
        t_h_v.draw();
        t_h_c.draw();
    });
    //productos
    t_pro = $('#t_pro').DataTable({
        "aPreocesing": true,
        "aServerSide": true,
        "ajax": {
            "url": "" + base_url + "productos/listar",
            "dataSrc": ""
        },
        "columns": [
            {
                "data": "codigo"
            },
            {
                "data": "descripcion"
            },
            {
                "data": "precio_venta"
            },
            {
                "data": "cantidad"
            },
            {
                "data": "estado"
            },
            {
                "data": "acciones"
            }
        ],
        
        "dom": "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons,
        language,
        "createdRow": function (row, data, index) {
            //pintar una celda
            if (data.cantidad < data.stock_minimo) {
                //pintar una fila
                $('td', row).css({
                    'background-color': '#ff5252',
                    'color': 'white',
                    'border-style': 'solid',
                    'border-color': '#bdbdbd'
                });
            } else if (data.cantidad == 0) {
                $('td', row).eq(3).html('<span class="badge badge-danger">Agotado</span>');
            }
        },
        "resonsieve": true,
        "bDestroy": true,
        "iDisplayLength": 10,
        "order": [
            [5, "asc"]
        ]
    });
    //autocomplete
    $("#codigo").autocomplete({
    minLength: 3,
    source: function (request, response) {
        $.ajax({
            url: base_url + 'compras/buscarCodigo/',
            dataType: "json",
            data: {
                pro: request.term
            },
            success: function (data) {
                response(data);
            }
        });
    },
    select: function (event, ui) {
        document.getElementById('id').value = ui.item.id;
        document.getElementById('codigo').value = ui.item.codigo;
        document.getElementById('precio').value = ui.item.precio;
        document.getElementById('nombre').value = ui.item.descripcion;
        document.getElementById('cantidad').removeAttribute('disabled');
        document.getElementById('cantidad').focus();
    }
    })
    //autocomplete venta
    $("#codigo_venta").autocomplete({
        minLength: 2,
        source: function (request, response) {
            $.ajax({
                url: base_url + 'compras/buscar/',
                dataType: "json",
                data: {
                    pro: request.term
                },
                success: function (data) {
                    response(data);
                }
            });
        },
        select: function (event, ui) {
            document.getElementById('id').value = ui.item.id;
            document.getElementById('codigo_venta').value = ui.item.codigo;
            document.getElementById('precio').value = ui.item.precio;
            document.getElementById('nombre').value = ui.item.descripcion;
            document.getElementById('cantidad').removeAttribute('disabled');
            document.getElementById('cantidad').focus();
        }
    })
    $("#cliente").autocomplete({
        minLength: 2,
        source: function (request, response) {
            $.ajax({
                url: base_url + 'compras/buscar_cli/',
                dataType: "json",
                data: {
                    pro: request.term
                },
                success: function (data) {
                    response(data);
                }
            });
        },
        select: function (event, ui) {
            document.getElementById('id_cli').value = ui.item.id;
            document.getElementById('direccion').value = ui.item.direccion;
        }
    })
    $("#ruc").autocomplete({
        minLength: 2,
        source: function (request, response) {
            $.ajax({
                url: base_url + 'compras/buscar_pr/',
                dataType: "json",
                data: {
                    pro: request.term
                },
                success: function (data) {
                    response(data);
                }
            });
        },
        select: function (event, ui) {
            document.getElementById('id_pr').value = ui.item.id;
            document.getElementById('nombre_pr').value = ui.item.nombre;
        }
    })
})
if (document.getElementById('min') && document.getElementById('max')) {
    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var FilterStart = $('#min').val();
            var FilterEnd = $('#max').val();
            var DataTableStart = data[3].trim();
            var DataTableEnd = data[3].trim();
            if (FilterStart == '' || FilterEnd == '') {
                return true;
            }
            if (DataTableStart >= FilterStart && DataTableEnd <= FilterEnd) {
                return true;
            } else {
                return false;
            }

        });
}
function frmUsuario() {
    document.getElementById('id').value = '';
    document.getElementById('title').textContent = 'Nuevo Usuario';
    document.getElementById('btnAccion').textContent = 'Registrar';
    document.getElementById('frmUsuario').reset();
    document.querySelector('.claves').classList.remove('d-none');
    document.querySelector('.confirmar').classList.remove('d-none');
    $('#nuevo_usuario').modal('show');
}
//validaciones
function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48 && key <= 57) || (key == 8))
}
function longitud(e, c) {
    if (e.target.value.length >= c){
        e.target.value = e.target.value.slice(0, c);
        document.getElementById(e.target.name).classList.remove('is-invalid');
    }else{
        document.getElementById(e.target.name).classList.add('is-invalid');
    }
}
function registrarUser(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const usuario = document.getElementById('usuario');
    const correo = document.getElementById('correo');
    const clave = document.getElementById('clave');
    const confirmar = document.getElementById('confirmar');
    if (nombre.value == '' || usuario.value == '' || correo.value == '') {
        alertas('Todo los campos son obligatorios', 'warning');
        return false;
    } else {
        if (clave.value != confirmar.value) {
            document.getElementById('error').innerHTML = 'Las contraseña no coinciden';
        } else {
            document.getElementById('error').innerHTML = '';
            const url = base_url + 'usuarios/registrar';
            const frm = document.getElementById('frmUsuario');
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    $('#nuevo_usuario').modal('hide');
                    t_user.ajax.reload();
                }
            }
        }
    }
}

function alertas(msg, icono) {
    Swal.fire({
        position: 'top-end',
        icon: icono,
        title: msg,
        showConfirmButton: false,
        timer: 3000
    });
}

function btnEditarUser(id) {
    document.getElementById('title').innerHTML = 'Modificar Usuario';
    document.getElementById('btnAccion').innerHTML = 'Modificar';
    const url = base_url + 'usuarios/editar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById('id').value = res.id;
            document.getElementById('nombre').value = res.nombre;
            document.getElementById('usuario').value = res.usuario;
            document.getElementById('correo').value = res.correo;
            document.querySelector('.claves').classList.add('d-none');
            document.querySelector('.confirmar').classList.add('d-none');
            document.getElementById('btnAccion').classList.remove('d-none');
            $('#nuevo_usuario').modal('show');
        }
    }
}

function btnEliminarUser(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El usuario no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "usuarios/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_user.ajax.reload();
                }
            }
        }
    })
}

function btnReingresarUser(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "usuarios/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_user.ajax.reload();
                }
            }

        }
    })
} //fin usuarios

function frmCliente() {
    document.getElementById('id').value = '';
    document.getElementById('title').innerHTML = 'Nuevo Cliente';
    document.getElementById('btnAccion').innerHTML = 'Registrar';
    document.getElementById('frmCliente').reset();
    $('#nuevo_cliente').modal('show');
}

function registrarCli(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    if (nombre.value == '' || telefono.value == '' || direccion.value == '') {
        alertas('Todo los campos son requeridos', 'warning');
        return false;
    }else if (telefono.value.length < 9) {
        alertas('Ingrese un teléfono valido', 'warning');
        return false;
    } else {
        const url = base_url + 'clientes/registrar';
        const frm = document.getElementById('frmCliente');
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                $('#nuevo_cliente').modal('hide');
                t_cli.ajax.reload();
            }
        }
    }
}

function btnEditarCli(id) {
    document.getElementById('title').innerHTML = 'Modificar Cliente';
    document.getElementById('btnAccion').innerHTML = 'Modificar';
    const url = base_url + 'clientes/editar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById('id').value = res.id;
            document.getElementById('nombre').value = res.nombre;
            document.getElementById('telefono').value = res.telefono;
            document.getElementById('direccion').value = res.direccion;
            $('#nuevo_cliente').modal('show');
        }
    }
}

function btnEliminarCli(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El cliente no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "clientes/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_cli.ajax.reload();
                }
            }
        }
    })
}

function btnReingresarCli(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "clientes/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_cli.ajax.reload();
                }
            }

        }
    })
} //fin clientes
function frmProveedor() {
    document.getElementById('id').value = '';
    document.getElementById('title').innerHTML = 'Nuevo Proveedor';
    document.getElementById('btnAccion').innerHTML = 'Registrar';
    document.getElementById('frmProveedor').reset();
    $('#nuevo_proveedor').modal('show');
}

function registrarPr(e) {
    e.preventDefault();
    const ruc = document.getElementById('ruc');
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    if (ruc.value == '' || nombre.value == '' || telefono.value == '' || direccion.value == '') {
        alertas('Todo los campos son requeridos', 'warning');
        return false;
    }else if(ruc.value.length < 11){
        alertas('Ingrese un ruc valido', 'warning');
        return false;
    } else if (telefono.value.length < 9) {
        alertas('Ingrese un teléfono valido', 'warning');
        return false;
    }else {
        const url = base_url + 'proveedor/registrar';
        const frm = document.getElementById('frmProveedor');
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                $('#nuevo_proveedor').modal('hide');
                t_Pr.ajax.reload();
            }
        }
    }
}

function btnEditarPr(id) {
    document.getElementById('title').innerHTML = 'Modificar Proveedor';
    document.getElementById('btnAccion').innerHTML = 'Modificar';
    const url = base_url + 'proveedor/editar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById('id').value = res.id;
            document.getElementById('ruc').value = res.ruc;
            document.getElementById('nombre').value = res.nombre;
            document.getElementById('telefono').value = res.telefono;
            document.getElementById('direccion').value = res.direccion;
            $('#nuevo_proveedor').modal('show');
        }
    }
}

function btnEliminarPr(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El proveedor no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "proveedor/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_Pr.ajax.reload();
                }
            }
        }
    })
}

function btnReingresarPr(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "proveedor/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_Pr.ajax.reload();
                }
            }

        }
    })
} //fin proveedores
function frmProducto() {
    document.getElementById('id').value = '';
    document.getElementById('title').innerHTML = 'Nuevo Producto';
    document.getElementById('btnAccion').innerHTML = 'Registrar';
    document.getElementById('frmProducto').reset();
    $('#nuevo_producto').modal('show');
}

function preview(e) {
    var input = document.getElementById('imagen');
    var filePath = input.value;
    var extension = /(\.png|\.jpeg|\.jpg)$/i;
    if (!extension.exec(filePath)) {
        alertas('Seleccione una imagen valida', 'warning');
        deleteImg();
        return false;
    } else {
    const url = e.target.files[0];
    const urlTmp = URL.createObjectURL(url);
    document.getElementById("img-preview").src = urlTmp;
    document.getElementById("icon-cerrar").innerHTML = `
    <button class="btn btn-danger" onclick="deleteImg()"><i class="fas fa-times"></i></button>`;
    }
}
function previewLogo(e) {
    var input = document.getElementById('imagen');
    var filePath = input.value;
    var extension = /(\.png)$/i;
    if (!extension.exec(filePath)) {
        alertas('Seleccione una imagen de tipo png', 'warning');
        deleteImg();
        return false;
    } else {
    const url = e.target.files[0];
    const urlTmp = URL.createObjectURL(url);
    document.getElementById("img-preview").src = urlTmp;
    document.getElementById("icon-cerrar").innerHTML = `
    <button class="btn btn-danger" onclick="deleteImg()"><i class="fas fa-times"></i></button>`;
    }
}

function registrarPro(e) {
    e.preventDefault();
    const codigo = document.getElementById('codigo');
    const nombre = document.getElementById('nombre');
    const precio_compra = document.getElementById('precio_compra');
    const precio_venta = document.getElementById('precio_venta');
    if (codigo.value == '' || nombre.value == '' || precio_compra.value == ''
    || precio_venta.value == '') {
        alertas('Todo los campos son requeridos', 'warning');
    } else {
        const url = base_url + 'productos/registrar';
        let frm = document.getElementById('frmProducto');
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.upload.addEventListener('progress', function () {
            document.getElementById('btnAccion').textContent = 'Procesando';
        });
        http.send(new FormData(frm));
        http.addEventListener('load', function () {
            document.getElementById('btnAccion').textContent = 'Procesando';
            $('#nuevo_producto').modal('hide');
            t_pro.ajax.reload();
        });
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
            }
        }
    }
}

function btnEditarPro(id) {
    document.getElementById('title').innerHTML = 'Modificar Producto';
    document.getElementById('btnAccion').innerHTML = 'Modificar';
    const url = base_url + 'productos/editar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById('id').value = res.id;
            document.getElementById('codigo').value = res.codigo;
            document.getElementById('nombre').value = res.descripcion;
            document.getElementById('precio_compra').value = res.precio_compra;
            document.getElementById('precio_venta').value = res.precio_venta;
            document.getElementById('minimo').value = res.stock_minimo;
            document.getElementById("img-preview").src = base_url + 'Assets/img/pro/' + res.foto;
            document.getElementById("icon-cerrar").innerHTML = `
            <button class="btn btn-danger" onclick="deleteImg()">
            <i class="fas fa-times"></i></button>`;
            document.getElementById("foto_actual").value = res.foto;
            $('#nuevo_producto').modal('show');
        }

    }
}

function btnEliminarPro(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El producto no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "productos/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_pro.ajax.reload();
                }
            }
        }
    })
}

function btnReingresarPro(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "productos/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    t_pro.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}

function calcularPrecio(e) {
    e.preventDefault();
    const cant = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    document.getElementById("sub_total").value = precio * cant;
    if (e.which == 13) {
        if (cant > 0 && cant != '') {
            const url = base_url + "compras/ingresar";
            const frm = document.getElementById("frmCompra");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    frm.reset();
                    cargarDetalle();
                    document.getElementById('codigo').focus();
                    document.getElementById('cantidad').setAttribute('disabled', 'disabled');
                    alertas(res.msg, res.icono);
                    return false;
                }
            }
        } else {
            document.getElementById('cantidad').focus();
            alertas('Ingrese una cantidad valida', 'warning');
            return false;
        }
    }
}
function calcularPrecioV(e) {
    e.preventDefault();
    const cant = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    document.getElementById("sub_total").value = precio * cant;
    if (e.which == 13) {
        if (cant > 0 && cant != '') {
            const url = base_url + "compras/ingresarV";
            const frm = document.getElementById("frmVenta");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    frm.reset();
                    cargarDetalleTemp();
                    document.getElementById('codigo_venta').focus();
                    document.getElementById('cantidad').setAttribute('disabled', 'disabled');
                    alertas(res.msg, res.icono);
                    return false;
                }
            }
        } else {
            alertas('Ingrese una cantidad valida', 'warning');
            document.getElementById('cantidad').focus();
        }
    }
}
if (document.getElementById('t_com')) {
    cargarDetalle();
}
if (document.getElementById('t_ven')) {
    cargarDetalleTemp();
}
function cargarDetalle() {
    const url = base_url + "compras/listar/detalle";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let html = '';
            res.detalle.forEach(row => {
                html += `<tr>
               <td>${row['id']}</td>
               <td>${row['descripcion']}</td>
               <td>${row['cantidad']}</td>
               <td>${row['precio']}</td>
               <td>${row['sub_total']}</td>
               <td>
               <button class="btn btn-danger" type="button" onclick="deleteDetalle(${row['id']})">
               <i class="fas fa-trash-alt"></i></button>
               </td>
               </tr>`;
            });
            document.getElementById("tblDetalle").innerHTML = html;
            document.getElementById("total").value = res.total_pagar.total;
        }
    }
}
function cargarDetalleTemp() {
    const url = base_url + "compras/listar/detalle_temp";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let html = '';
            let total;
            res.detalle.forEach(row => {
                total = row['sub_total'] - row['descuento'];
                html += `<tr>
               <td>${row['id']}</td>
               <td>${row['descripcion']}</td>
               <td>${row['cantidad']}</td>
               <td width="150">
               <input type="number" class="form-control" placeholder="Desc" onkeyup="calcularDescuento(event, ${row['id']})">
               </td>
               <td>${row['descuento']}</td>
               <td>${row['precio']}</td>
               <td>${total.toFixed(2)}</td>
               <td>
               <button class="btn btn-danger" type="button" onclick="deleteDetalle_venta(${row['id']})">
               <i class="fas fa-trash-alt"></i></button>
               </td>
               </tr>`;
            });
            document.getElementById("t_ven").innerHTML = html;
            calcular();
        }
    }
}
function calcularDescuento(e, id) {
    if (e.which == 13) {
        if (e.target.value > 0 && e.target.value != '') {
        const url = base_url + 'compras/descuentoVenta/' + id + '/' + e.target.value;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                cargarDetalleTemp();
                calcular();
                return false;
            }
        }
        }
    }
}
function calcular() {
    var filas = document.querySelectorAll("#t_ventas_hist tbody tr");

    var total = 0;
    filas.forEach(function (e) {
        var columnas = e.querySelectorAll("td");
        var importe = parseFloat(columnas[6].textContent);
        total += importe;
    });
    var filas = document.querySelector("#total");
    filas.value = total.toFixed(2);
}
function deleteDetalle(id) {
    const url = base_url + "compras/delete/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            alertas(res.msg, res.icono);
            cargarDetalle();
        }
    }
}
function deleteDetalle_venta(id) {
    const url = base_url + "compras/delete_venta/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            alertas(res.msg, res.icono);
            cargarDetalleTemp();
        }
    }
}
function generarCompra() {
    Swal.fire({
        title: 'Esta seguro de procesar la Compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            let fila = document.querySelectorAll("#t_com tr").length;
            if (fila < 2) {
                alertas('No hay productos para proceder con la compra', 'warning');
                return false;
            } else {
                const id = document.getElementById('id_pr').value;
                const url = base_url + "compras/generar/" + id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        const res = JSON.parse(this.responseText);
                        alertas(res.msg, res.icono);
                        if (res.folio) {
                            const ruta = base_url + 'compras/generarPdf/' + res.folio;
                            window.open(ruta)
                            setTimeout(() => {
                                cargarDetalle();
                            }, 300);
                        }
                    }
                }
            }

        }
    })
}
function generarVenta() {
    Swal.fire({
        title: 'Esta seguro de procesar la Venta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            let fila = document.querySelectorAll("#t_ventas_hist tr").length;
            if (fila < 2) {
                alertas('No hay productos para proceder con la venta', 'warning');
                return false;
            }else{
                const id = document.getElementById('id_cli').value;
                const url = base_url + "compras/generarVenta/"+ id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        const res = JSON.parse(this.responseText);
                        alertas(res.msg, res.icono);
                        if (res.folio) {
                            const ruta = base_url + 'compras/generarVentaPdf/' + res.folio;
                            window.open(ruta)
                            setTimeout(() => {
                                cargarDetalleTemp();
                                document.getElementById('id_cli').value = '';
                                document.getElementById('cliente').value = '';
                                document.getElementById('direccion').value = '';
                            }, 300);
                        }
                    }
                }
            }

        }
    })
}
function btnAnularC(id) {
    Swal.fire({
        title: 'Esta seguro de anular la Compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'compras/anularC/'+ id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_h_c.ajax.reload();
                }
            }

        }
    })
}
function btnAnularV(id) {
    Swal.fire({
        title: 'Esta seguro de anular la Venta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'compras/anularV/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_h_v.ajax.reload();
                }
            }

        }
    })
}
function deleteImg() {
    document.getElementById("icon-cerrar").innerHTML = '';
    document.getElementById("icon-image").classList.remove("d-none");
    document.getElementById("img-preview").src = base_url + 'Assets/img/avatar.svg';
    document.getElementById("imagen").value = '';
    document.getElementById("foto_actual").value = '';
}
function modificarPerfil() {
    const imagen = document.getElementById('imagen');
    if (imagen.value == '') {
        alertas('Selecciona una Imagen', 'warning');
    } else {
        const url = base_url + 'usuarios/cambiarPerfil';
        let frm = document.getElementById('frmPerfil');
        const formData = new FormData(frm);
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(formData);
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            }
        }
    }
}
function EliminarPerfil() {
    Swal.fire({
        title: 'Esta seguro de eliminar tu foto de perfil?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'usuarios/eliminarPerfil';
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    setTimeout(() => {
                        window.location.reload();
                    }, 300);
                }
            }
        }
    })
}
function modificarEmpresa() {
    const identidad = document.getElementById('identidad');
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const imagen = document.getElementById('imagen');
    if (identidad.value == '' || nombre.value == '' || telefono.value == '' || direccion.value == '') {
        alertas('Todo los campos son obligatorios', 'warning');
    } else {
        const url = base_url + 'admin/cambiarEmpresa';
        let frm = document.getElementById('frmEmpresa');
        const formData = new FormData(frm);
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(formData);
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            }
        }
    }
}
function cambiarPass() {
    const actual = document.getElementById('actual').value;
    const nueva = document.getElementById('nueva').value;
    const confirmar = document.getElementById('confirmar').value;
    if (actual == '' || nueva == '' || confirmar == '') {
        alertas('Todo los campos son obligatorios', 'warning');
    }else{
        if (nueva != confirmar) {
            alertas('Las contraseñas no coinciden', 'warning');
        }else{
            const url = base_url + 'usuarios/cambiar_pass';
            const frm = document.getElementById('frmPass');
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                }
            }
        }
    }
    
}

if (document.getElementById('donutChart') && document.getElementById('areaChart')) {
    stock_minimo();
    productos();
}
function stock_minimo() {
    const url = base_url + 'admin/stock_minimo';
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            var nombre = [];
            var cantidad = [];
            for (var i = 0; i < data.length; i++) {
                nombre.push(data[i]['descripcion']);
                cantidad.push(data[i]['cantidad']);
            }
            var donutChartCanvas = $('#donutChart').get(0).getContext('2d')
            var donutData = {
                labels: nombre,
                datasets: [{
                    data: cantidad,
                    backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
                }]
            }
            var donutOptions = {
                maintainAspectRatio: false,
                responsive: true,
            }
            //Create pie or douhnut chart
            // You can switch between pie and douhnut using the method below.
            new Chart(donutChartCanvas, {
                type: 'doughnut',
                data: donutData,
                options: donutOptions
            })
        }
    }
}

function productos() {
    const url = base_url + 'admin/productos';
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            var nombre = [];
            var cantidad = [];
            for (var i = 0; i < data.length; i++) {
                nombre.push(data[i]['descripcion']);
                cantidad.push(data[i]['cantidad']);
            }
            // Get context with jQuery - using jQuery's .get() method.
            var areaChartCanvas = $('#areaChart').get(0).getContext('2d')

            var areaChartData = {
                labels: nombre,
                datasets: [{
                        label: 'Digital Goods',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointRadius: false,
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data: cantidad
                    },
                    {
                        label: 'Electronics',
                        backgroundColor: 'rgba(210, 214, 222, 1)',
                        borderColor: 'rgba(210, 214, 222, 1)',
                        pointRadius: false,
                        pointColor: 'rgba(210, 214, 222, 1)',
                        pointStrokeColor: '#c1c7d1',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                ]
            }

            var areaChartOptions = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                        }
                    }]
                }
            }

            // This will get the first returned node in the jQuery collection.
            new Chart(areaChartCanvas, {
                type: 'line',
                data: areaChartData,
                options: areaChartOptions
            })
        }
    }
}
function btnPermisos(id) {
    const http = new XMLHttpRequest();
    const url = base_url + "/usuarios/permisos/" + id;
    http.open("GET", url);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("frmPermisos").innerHTML = this.responseText;
            $("#permisos").modal("show");
        }
    }
}

function registrarPermisos() {
    const http = new XMLHttpRequest();
    const frm = document.getElementById("frmPermisos");
    const url = base_url + "usuarios/registrarPermisos";
    http.open("POST", url);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            $("#permisos").modal("hide");
            alertas(res.msg, res.icono);
        }
    }
}
