/**
 * Created by ot-yerandim on 3/04/17.
 */
angular.
    module('core').
    filter('checkmark', function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
});