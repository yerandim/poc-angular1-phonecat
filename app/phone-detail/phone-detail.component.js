/**
 * Created by ot-yerandim on 3/04/17.
 */
angular.
    module('phoneDetail').
    component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$routeParams', 'Phone',
        function PhoneDetailController($routeParams, Phone) {
            var self = this;

            self.setImage = function setImage(imageUrl){
                self.mainImage = imageUrl;
            };

            self.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
                self.setImage(phone.images[0]);
            });
        }]
})