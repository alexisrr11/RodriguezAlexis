<?php
include("con_db.php");

if(isset($_POST['register'])) {
    if(strlen($_POST['name']) >= 1 && strlen ($_POST['email']) >= 1){
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $mensaje = trim($_POST['mensaje']);
        
        $consulta = "INSERT INTO datos(nombre, email, mensaje) VALUES ('$name','$email','$mensaje')";
        $resultado = mysqli_query($conex,$consulta);
        if ($resultado) {
            ?>
            <h3 class="ok">¡Tu mensaje se ha enviado correctamente!</h3>
            <?php
        } else {
            ?>
            <h3 class="bad">¡ups ha ocurrisdo un error!</h3>
            <?php 
            }
        } else {
            ?>
            <h3 class="bad">¡Por favor complete los campos!</h3>
            <?php
    }
    
}
?>