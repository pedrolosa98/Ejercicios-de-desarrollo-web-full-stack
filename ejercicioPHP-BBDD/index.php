<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="./insert.php">Registrar Zoo</a>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Ciudad</th>
            </tr>
        </thead>
        <tbody>
            <?php
            include "database.php";
            $zoo = new database();
            $listadoZoo = $zoo->selectZoo();
            while ($fila = mysqli_fetch_object($listadoZoo)) {?>
            <tr>
                <th><?php echo $fila->idZoo?></th>
                <th><?php echo $fila->nombreZoo?></th>
                <th><?php echo $fila->ciudad?></th>
            </tr>
            <?php } ?>  
        </tbody>
    </table>
</body>
</html>