app.controller('ctr', function ($scope, $http) {
    $scope.nombre = "";
    $scope.opcion = 1;
    $scope.clientes = {};
    $scope.clientes.nombre = "";
    $scope.clientes.apellido = "";
    $scope.clientes.telefono = "";
    $scope.listaClientes = new Array();

    $scope.obtenerInformacion = function () {
        console.log($scope.clientes);
    };


    $http.get("https://jsonplaceholder.typicode.com/posts").success(function (respuesta) {
        console.log(respuesta);
        $scope.listaInformacion = respuesta;
    });



    $scope.cambiarOpcion = function (opcion) {
        $scope.opcion = opcion;
    };

    $scope.agregarInformacion = function () {
        $scope.cl = {};
        $scope.cl.nombre = $scope.clientes.nombre;
        $scope.cl.apellido = $scope.clientes.apellido;
        $scope.cl.telefono = $scope.clientes.telefono;
        $scope.listaClientes.push($scope.cl);
    };





});