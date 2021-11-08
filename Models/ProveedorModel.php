<?php
class ProveedorModel extends Query{
    public function __construct()
    {
        parent::__construct();
    }
    public function getProveedor()
    {
        $sql = "SELECT * FROM proveedor";
        $data = $this->selectAll($sql);
        return $data;
    }
    public function registrarPr(string $ruc, string $nombre, string $telefono, string $direccion)
    {
        $verficar = "SELECT * FROM proveedor WHERE ruc = '$ruc'";
        $existe = $this->select($verficar);
        if (empty($existe)) {
            # code...
            $sql = "INSERT INTO proveedor(ruc, nombre, telefono, direccion) VALUES (?,?,?,?)";
            $datos = array($ruc, $nombre, $telefono, $direccion);
            $data = $this->save($sql, $datos);
            if ($data == 1) {
                $res = "ok";
            }else{
                $res = "error";
            }
        }else{
            $res = "existe";
        }
        return $res;
    }
    public function modificarPr(string $ruc, string $nombre, string $telefono ,string $direccion, int $id)
    {
        $sql = "UPDATE proveedor SET ruc=?, nombre = ?, telefono = ? ,direccion = ? WHERE id = ?";
        $datos = array($ruc, $nombre, $telefono ,$direccion, $id);
        $data = $this->save($sql, $datos);
        if ($data == 1) {
            $res = "modificado";
        } else {
            $res = "error";
        }
        return $res;
    }
    public function editarPr(int $id)
    {
        $sql = "SELECT * FROM proveedor WHERE id = $id";
        $data = $this->select($sql);
        return $data;
    }
    public function accionPr(int $estado, int $id)
    {
        $sql = "UPDATE proveedor SET estado = ? WHERE id = ?";
        $datos = array($estado, $id);
        $data = $this->save($sql, $datos);
        return $data;
    }
    public function verificarPermisos($id_user, $permiso)
    {
        $tiene = false;
        $sql = "SELECT p.id, p.permiso, d.* FROM permisos p INNER JOIN detalle_permisos d ON p.id = d.id_permiso WHERE d.id_usuario = $id_user AND p.permiso = '$permiso'";
        $existe = $this->select($sql);
        if ($existe != null || $existe != "") {
            $tiene = true;
        }
        return $tiene;
    }
}
