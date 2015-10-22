'use strict';

angular.module("modlMuDiyIntDesigner").service('MuDiyIntDesignerService', function() {

    var products = [
        {type: 'kitchen'},
        {type: 'living'},
        {type: 'dining'},
        {type: 'bedroom'},
        {type: 'washroom'}
    ];

    return {
        products: function() {
            return products;
        }
    };

    /*
    var toolbox.toppanel = true;
    $scope.toolbox.bottompanel = true;
    $scope.toolbox.leftpanel = true;
    $scope.toolbox.rightpanel = true;
    $scope.toolbox.isCollapsed = true;
    $scope.toolbox.toppanel.isCollapsed = false;
    $scope.toolbox.bottompanel.isCollapsed = false;
    $scope.toolbox.leftpanel.isCollapsed = false;
    $scope.toolbox.rightpanel.isCollapsed = false;
    */

});
