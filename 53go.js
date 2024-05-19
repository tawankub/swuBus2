var map = L.map('map').setView([13.7444989,100.5626958], 9);
		mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

		var taxiIcon = L.icon({
			iconUrl: 'https://cdn-icons-png.flaticon.com/128/1023/1023464.png',
			iconSize: [70, 70]
		})
        // จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข้ามมศว
		var marker = L.marker([13.745735, 100.562580

                    ], { icon: taxiIcon }).addTo(map);

		// สิ้นสุดป้าย
			var newMarker = L.marker([13.7370886,100.6415429
                    ], { draggable : false}).addTo(map);

			L.Routing.control({
				waypoints: [
                    // ป้ายระหว่างทาง
					L.latLng(13.745735, 100.562580),                   
                    L.latLng(13.744782, 100.585211),
                    L.latLng(13.744312, 100.602269),
                    L.latLng(13.754578, 100.612504),
                    L.latLng(13.752728, 100.618754),
                    L.latLng(13.755564, 100.627647),
                    L.latLng(13.752379, 100.639963),
                    L.latLng(13.747958, 100.644239),
                    L.latLng(13.7370886,100.6415429),
                    // L.latLng(),
                    // L.latLng(),
                    // L.latLng(),
                    // L.latLng()
				],
				createMarker :function(i, waypoint, n) {
					return L.marker(waypoint.latLng, {
						draggable : false
					});
				}

        //โค้ดรถขยับ 
			}).on('routesfound', function (e) {
				var routes = e.routes;
				console.log(routes);

				e.routes[0].coordinates.forEach(function (coord, index) {
					setTimeout(function () {
						marker.setLatLng([coord.lat, coord.lng]);
					}, 100 * index)
				})

			}).addTo(map);
		
// onclick

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // เช็คว่ากล่องเดิมมีคลาส "active" หรือไม่
    var isActive = this.classList.contains("active");
    
    // ปิดกล่องเดิมหากมีคลาส "active"
    var activeAccordions = document.querySelectorAll(".accordion.active");
    activeAccordions.forEach(function(acc) {
      acc.classList.remove("active");
      acc.nextElementSibling.style.maxHeight = null;
    });

    // เปิดหรือปิดกล่องที่ถูกคลิก
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (!isActive) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = null;
    }
  });
}