
// メソッドやプロパティを定義できる
angular.module('myapp', [])
    // MainControllerを追加
    .controller('MainController', ['$scope', function($scope){

        // users配列
        $scope.users = [
            {"name":"taguchi", "score":52.22},
            {"name":"tanaka", "score":38.22},
            {"name":"yamada", "score":11.11},
            {"name":"aaaa", "score":22.22},
            {"name":"bbbb", "score":100.98},
            {"name":"cccc", "score":88.68}
        ];

        // 変数
        $scope.today = new Date();

        // イベント
        $scope.addUser = function() {
        
        };
    }])

    // UserItemControllerを追加   セミコロンは19行目から26行目に移動
    .controller('UserItemController', ['$scope', function($scope) {
        // incrementというイベント
        $scope.increment = function() {
            // scoreプロパティの値をカウントアップ
            $scope.user.score++;
        };
        
        // decrementというイベント
        $scope.decrement = function() {
            // scoreプロパティの値をカウントダウン
            $scope.user.score--;
        };
    }]);
