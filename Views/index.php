<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Iniciar Sesión</title>
    <link rel="icon" type="image/png" href="<?php echo base_url; ?>Assets/img/logo.png" />
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- icheck bootstrap -->
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/icheck-bootstrap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/adminlte.min.css">
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/estilobase.css">
</head>

<body class="hold-transition login-page" id="cuerpo">
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary" id="cardbase">
            <div class="card-header text-center">
                <a href="#" class="h1"><b>SOLIEM PERU SAC</a>
                <img class="img-thumbnail" src="<?php echo base_url; ?>Assets/img/logo.png" width="150">
            </div>
            <div class="card-body">
                <form id="frmLogin" onsubmit="frmLogin(event)">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Usuario" name="usuario" id="usuario">
                        <div class=" input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                        <div class="invalid-feedback">
                            El usuario es requerido, sin espacios.
                        </div>
                        <div class="valid-feedback">
                            Todo okey.
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Contraseña" name="clave" id="clave">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <div class="invalid-feedback">
                            El contraseña es requerido, mínimo 5 caracter.
                        </div>
                        <div class="valid-feedback">
                            Todo okey.
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success btn-block" id="btnAccion">Ingresa</button>
                </form>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
    <!-- /.login-box -->

    <!-- jQuery -->
    <script src="<?php echo base_url; ?>Assets/js/jquery-3.6.0.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="<?php echo base_url; ?>Assets/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="<?php echo base_url; ?>Assets/js/adminlte.min.js"></script>
    <script src="<?php echo base_url; ?>Assets/js/sweetalert2.all.min.js"></script>
    <script src="<?php echo base_url; ?>Assets/js/all.min.js"></script>
    <script>
        const base_url = '<?php echo base_url; ?>';
    </script>
    <script src="<?php echo base_url; ?>Assets/js/login.js"></script>
</body>

</html>