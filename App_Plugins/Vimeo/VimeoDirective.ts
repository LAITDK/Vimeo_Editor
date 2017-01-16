/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../Scripts/typings/umbraco/umbraco.d.ts" />
angular.module("umbraco.directives")
    .directive('vimeoPicker', (dialogService, entityResource) => {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: '/App_Plugins/Vimeo/vimeo-picker.html',
            require: "ngModel",
            link: ($scope, element, attr, ctrl: umbraco.IUmbracoController) => {
                

            }
        };
    });

