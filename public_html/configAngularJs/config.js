var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './views/productos.html',
        controller: 'ctrProductos'
    }).when('/ventas',{
        templateUrl: './views/ventas.html',
        controller: 'ctrVentas'
    });
});




