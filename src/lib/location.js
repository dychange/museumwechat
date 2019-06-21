export const location =  {
    initMap(id){
      let mapObj = new AMap.Map(id, {})
      let geolocation;
      mapObj.plugin(['AMap.Geolocation'], function () {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //  是否使用高精度定位，默认:true
            timeout: 1000
        })
        mapObj.addControl(geolocation)
        geolocation.getCurrentPosition()
      })
      return geolocation;
    }
  }