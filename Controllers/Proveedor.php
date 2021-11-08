<?php
class Proveedor extends Controller{
    public function __construct() {
        session_start();
        if (empty($_SESSION['activo'])) {
            header("location: ".base_url);
        }
        parent::__construct();
        $id_user = $_SESSION['id_usuario'];
        $perm = $this->model->verificarPermisos($id_user, "proveedores");
        if (!$perm && $id_user != 1) {
            $this->views->getView('templates', "permisos");
            exit;
        }
    }
    public function index()
    {
        $this->views->getView('clientes', "proveedor");
    }
    public function listar()
    {
        $data = $this->model->getProveedor();
        for ($i=0; $i < count($data); $i++) { 
            if ($data[$i]['estado'] == 1) {
                $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-primary" type="button" onclick="btnEditarPr(' . $data[$i]['id'] . ');"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" type="button" onclick="btnEliminarPr(' . $data[$i]['id'] . ');"><i class="fas fa-trash-alt"></i></button>
                <div/>';
            }else{
                $data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
                $data[$i]['acciones'] = '<div>
                <button class="btn btn-success" type="button" onclick="btnReingresarPr(' . $data[$i]['id'] . ');"><i class="fas fa-circle"></i></button>
                <div/>';
            }
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function registrar()
    {
		$ruc = strClean($_POST['ruc']);
        $nombre = strClean($_POST['nombre']);
        $telefono = strClean($_POST['telefono']);
        $direccion = strClean($_POST['direccion']);
        $id = strClean($_POST['id']);
        if (empty($ruc) || empty($nombre) || empty($telefono) || empty($direccion)) {
            $msg = array('msg' => 'Todo los campos son obligatorios', 'icono' => 'error');
        }else{
            if ($id == "") {
                    $data = $this->model->registrarPr($ruc, $nombre, $telefono, $direccion);
                    if ($data == "ok") {
                        $msg = "si";
                    $msg = array('msg' => 'Proveedor registrado', 'icono' => 'success');
                    }else if($data == "existe"){
                    $msg = array('msg' => 'El proveedor ya existe', 'icono' => 'warning');
                    }else{
                    $msg = array('msg' => 'Error al registrar el proveedor', 'icono' => 'error');
                    }
            }else{
                $data = $this->model->modificarPr($ruc, $nombre, $telefono, $direccion, $id);
                if ($data == "modificado") {
                    $msg = array('msg' => 'Proveedor modificado con éxito', 'icono' => 'success');
                }else {
                    $msg = "Error al modificar el proveedor";
                    $msg = array('msg' => 'Error al modificar el proveedor', 'icono' => 'error');
                }
            }
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function editar(int $id)
    {
        $data = $this->model->editarPr($id);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function eliminar(int $id)
    {
        $data = $this->model->accionPr(0, $id);
        if ($data == 1) {
            $msg = array('msg' => 'Proveedor dado de baja', 'icono' => 'success');
        }else{
            $msg = array('msg' => 'Error al eliminar el proveedor', 'icono' => 'error');
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
    public function reingresar(int $id)
    {
        $data = $this->model->accionPr(1, $id);
        if ($data == 1) {
            $msg = array('msg' => 'Proveedor reingresado', 'icono' => 'success');
        } else {
            $msg = array('msg' => 'Error al reingresar el proveedor', 'icono' => 'error');
        }
        echo json_encode($msg, JSON_UNESCAPED_UNICODE);
        die();
    }
}
