angular.module("umbraco").controller("VimeoController", function ($scope: Vimeo.IVimeoScope, assetsService: umbraco.services.IAssetsService, entityResource, dialogService: umbraco.services.IDialogService) {
    assetsService.loadCss("/App_Plugins/Vimeo/vimeo.min.css", $scope, null, 1000);
    
    if ($scope.control.value == null) {
        $scope.control.value = { EmbeddedCode: null, Image: null };
    }

    $scope.setImageUrl = () => {

        if ($scope.control.value.Image) {
            entityResource.getById($scope.control.value.Image, "Media").then(function (ent) {
                $scope.control.ImageUrl = ent.metaData.umbracoFile.Value.src;
            });
        }
    }

    $scope.openOverlay = function () {
        $scope.overlay = {
            view: "/App_Plugins/Vimeo/vimeo-overlay.html",
            title: "Vimeo Picker",
            show: true,
            submit: function (model) {
                //console.log(model);
                // do submit magic here


                if (!$scope.control.value) 
                {
                    $scope.control.value = { Image: "", EmbeddedCode: "" };
                }
                $scope.setImageUrl();


                $scope.change = () => {
                    $scope.setImageUrl();
                }

                $scope.overlay.show = false;
                $scope.overlay = null;
            },
            close: function (oldModel) {
                // do close magic here

                $scope.overlay.show = false;
                $scope.overlay = null;
            },
            openMediaPicker: () => {
                dialogService.mediaPicker({
                    onlyImages: null,
                    callback: populatePicture
                })
            },
            control: $scope.control
        };

        function populatePicture(item) {
            updateModel(item.id);
        }
        function updateModel(id) {

            var existingValue = $scope.control.value;
            
            existingValue.Image = id;
            $scope.setImageUrl();
        };
    }
});