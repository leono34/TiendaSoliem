<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SOLIEM PERU SAC</title>
    <link rel="icon" type="image/png" href="<?php echo base_url; ?>Assets/img/logo.png" />
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/icheck-bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/jquery-ui.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/adminlte.min.css">
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/DataTables/datatables.min.css">
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/dataTables.dateTime.min.css">
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/estilos.css">
</head>

<body class="sidebar-mini layout-fixed layout-navbar-fixed">
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-sm-inline-block d-none">
                    <a href="#" class="nav-link"><span class="badge badge-primary"><?php echo date('d-M-Y'); ?></span></a>
                </li>
                <li class="nav-item d-sm-inline-block">
                    <a href="<?php echo base_url; ?>usuarios/salir" class="nav-link"><span class="badge badge-success">Cerrar Sesión</span></a>
                </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <!-- Notifications Dropdown Menu -->
                
                <li class="nav-item">
                    <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="<?php echo base_url; ?>admin" class="brand-link">
                <img src="<?php echo base_url; ?>Assets/img/logo.png" alt="Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Pos Venta</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <?php if (!file_exists('Assets/img/usuarios/' . $_SESSION['id_usuario'] . '.png')) { ?>
                            <img class="img-thumbnail" src="<?php echo base_url; ?>Assets/img/avatar.svg" width="200">
                        <?php } else { ?>
                            <img class="img-thumbnail" src="<?php echo base_url; ?>Assets/img/usuarios/<?php echo $_SESSION['id_usuario']; ?>.png" width="350">
                        <?php } ?>
                    </div>
                    <div class="info">
                        <a href="<?php echo base_url; ?>usuarios/perfil" class="d-block"><?php echo $_SESSION['nombre'] ?></a>
                    </div>
                </div>
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-tools"></i>
                                <p>
                                    Administración
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="<?php echo base_url; ?>usuarios" class="nav-link">
                                        <i class="fas fa-user"></i>
                                        <p>Usuarios</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="<?php echo base_url; ?>admin/datos" class="nav-link">
                                        <i class="fas fa-tools"></i>
                                        <p>Configuración</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="<?php echo base_url; ?>clientes" class="nav-link">
                                <i class="nav-icon fas fa-users"></i>
                                <p>
                                    Clientes
                                </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="<?php echo base_url; ?>proveedor" class="nav-link">
                                <i class="fas fa-hospital nav-icon"></i>
                                <p>Proveedores</p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="<?php echo base_url; ?>productos" class="nav-link">
                                <i class="fas fa-box nav-icon"></i>
                                <p>Productos</p>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-shipping-fast"></i>
                                <p>
                                    Entradas
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="<?php echo base_url; ?>compras" class="nav-link">
                                        <i class="fas fa-store-alt"></i>
                                        <p>Nueva Compra</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="<?php echo base_url; ?>compras/historial" class="nav-link">
                                        <i class="fas fa-shopping-basket"></i>
                                        <p>Historial Compras</p>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-shopping-cart"></i>
                                <p>
                                    Salidas
                                    <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="<?php echo base_url; ?>compras/ventas" class="nav-link">
                                        <i class="fas fa-cash-register"></i>
                                        <p>Nueva Venta</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="<?php echo base_url; ?>compras/historial_ventas" class="nav-link">
                                        <i class="fas fa-cart-arrow-down"></i>
                                        <p>Historial Ventas</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <br>
                    <!-- Small boxes (Stat box) -->