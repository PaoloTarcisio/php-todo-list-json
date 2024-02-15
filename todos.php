<?php

use function PHPSTORM_META\type;

    $listatodos = file_get_contents('db/todos.json');

    header('content-type: application/json');

    echo $listatodos;
?>