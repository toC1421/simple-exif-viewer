document.addEventListener("DOMContentLoaded", function () {
    var imageUrl = window.location.hash.substring(1);
    document.getElementById("img").innerHTML = "<img src =" + imageUrl + " id='img1' width='300' height='300' >" ;
});

window.onload=getExif;

function getExif() {
  var img1 = document.getElementById("img1");
  EXIF.getData(img1, function() {
    if(EXIF.getAllTags(this).length === 0){
      var allData = document.getElementById("alldata");
      allData.innerHTML = "EXIF情報は含まれていませんでした";
      return;
    }else{
      var ImageDescription = EXIF.getTag(this,"ImageDescription");
      var Maker = EXIF.getTag(this, "Make");
      var Model = EXIF.getTag(this, "Model");
      var DateTime = EXIF.getTag(this,"DateTime");
      var ExifVersion = EXIF.getTag(this,"ExifVersion");
      var GPSVersion = EXIF.getTag(this,"GPSVersionID");
      var GPSLatitude = EXIF.getTag(this,"GPSLatitude");
      var GPSLongitude = EXIF.getTag(this,"GPSLongitude");
		  var makeAndModel = document.getElementById("makeAndModel");
      if(ImageDescription === undefined){
        ImageDescription = "未定義";
      }
      if(Maker === undefined){
        Maker = "未定義";
      }
      if(Model === undefined){
        Model = "未定義";
      }
      if(DateTime === undefined){
        DateTime = "未定義";
      }
      if(ExifVersion === undefined){
        ExifVersion = "未定義";
      }
      if(GPSVersion === undefined){
        GPSVersion = "未定義";
      }
      if(GPSLatitude === undefined){
        GPSLatitude = "未定義";
      }
      if(GPSLongitude === undefined){
        GPSLongitude = "未定義";
      }
      document.getElementById('title').innerHTML = ImageDescription;
      document.getElementById('maker').innerHTML = Maker;
      document.getElementById('model').innerHTML = Model;
      document.getElementById('date').innerHTML = DateTime;
      document.getElementById('exifversion').innerHTML = ExifVersion;
      document.getElementById('gpsversion').innerHTML = GPSVersion;
      document.getElementById('latitude').innerHTML = GPSLatitude;
      document.getElementById('longitude').innerHTML = GPSLongitude;
    }
  });
}
