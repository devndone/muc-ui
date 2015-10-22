'use strict';

angular.module("modlMuDiyIntDesigner").controller('contrlrMuDiyIntDesigner', function($scope, MuDiyIntDesignerService) {

    $scope.products = MuDiyIntDesignerService.products;

});

