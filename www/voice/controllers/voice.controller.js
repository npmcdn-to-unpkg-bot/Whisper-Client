angular.module('media.voiceCtrl', ['ionic','media.voiceService'])

.controller('VoiceCtrl', function($scope,voiceService) {
  $scope.uploadFile = function(){
    var serverUrl = 'D:/test';
    var fileUrl = 'D:/English Learning/js acadamy/Mar4 interview2/Cyrus/Q1.wma';
    voiceService.uploadFileToUrl(serverUrl,fileUrl);
  }
    // var server = "D:/test";
    // var filePath = 'D:/English Learning/js acadamy/Mar4 interview2/Cyrus/Q1.wma';
    // var trustHosts = true;
    // var options = {};
    // document.addEventListener('deviceready', function () {
    //   $cordovaFileTransfer.upload(server, filePath, options)
    //   .then(function(result) {
    //     console.log('result',result);
    //     // Success!
    //   }, function(err) {
    //     // Error
    //     console.log('result',result);
    //   }, function (progress) {
    //     // constant progress updates
    //   });

    // }, false);

  // document.addEventListener('deviceready', function () {


   //  $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
   //    .then(function(result) {
   //      // Success!
   //    }, function(err) {
   //      // Error
   //    }, function (progress) {
   //      $timeout(function () {
   //        $scope.downloadProgress = (progress.loaded / progress.total) * 100;
   //      });
   //    });

   // }, false);



// });
});
