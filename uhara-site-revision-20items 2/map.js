
document.addEventListener("DOMContentLoaded", () => {
  if (typeof L === "undefined") return;
  const clinic = {
    lat: 35.167952,
    lng: 138.907125,
    address: "〒410-1127 静岡県裾野市平松289 第一ビル201号室"
  };

  document.querySelectorAll(".clinic-map").forEach((element) => {
    const map = L.map(element, {
      scrollWheelZoom: false,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const range = L.circle([clinic.lat, clinic.lng], {
      radius: 16000,
      color: "#5b7f86",
      weight: 2,
      opacity: 0.8,
      fillColor: "#86a89a",
      fillOpacity: 0.12
    }).addTo(map);

    L.circleMarker([clinic.lat, clinic.lng], {
      radius: 8,
      color: "#ffffff",
      weight: 3,
      fillColor: "#527a34",
      fillOpacity: 1
    }).addTo(map).bindPopup(
      `<strong>うはら在宅診療所</strong><br>${clinic.address}<br>訪問診療範囲：半径16km`
    );

    map.fitBounds(range.getBounds(), { padding: [24, 24] });
  });
});
