import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function App() {
  const [userLocation, setUserLocation] = useState(null); // สถานะตำแหน่งผู้ใช้
  const [clinics] = useState([
    {
      name: "โรงพยาบาลสัตว์วิภา 24 ชั่วโมง ",
      phone: "082-127-3536",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.755, lng: 100.501 },
    },
    {
      name: "โรงพยาบาลสัตว์ MAH",
      phone: "02-463-4199",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.757, lng: 100.504 },
    },
    {
      name: "บางบอนสัตวแพทย์",
      phone: "02-870-6701",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.759, lng: 100.498 },
    },
    {
      name: "โรงพยาบาลสัตว์สุขสวัสดิ์",
      phone: "02-428-1443",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.752, lng: 100.506 },
    },
  ]);

  const [selectedClinic, setSelectedClinic] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // กรณีไม่สามารถดึงตำแหน่งได้ ให้ตั้งค่าเริ่มต้น
          setUserLocation({ lat: 13.7563, lng: 100.5018 });
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setUserLocation({ lat: 13.7563, lng: 100.5018 });
    }
  }, []);

  // คำนวณระยะทางระหว่างสองจุด
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // รัศมีโลก (กิโลเมตร)
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // ระยะทางในกิโลเมตร
  };

  // เรียงลำดับคลินิกตามระยะทาง
  const sortedClinics = userLocation
    ? clinics
        .map((clinic) => ({
          ...clinic,
          distance: calculateDistance(
            userLocation.lat,
            userLocation.lng,
            clinic.position.lat,
            clinic.position.lng
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
    : clinics;

  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-full max-w-4xl rounded-lg bg-white shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-left text-color-b mb-4 font-sans">
            ค้นหาคลินิกแนะนำ
          </h1>
          <div className="w-full h-64 rounded-lg shadow-md overflow-hidden">
            <LoadScript googleMapsApiKey="AIzaSyDkrkJNScs9Qjy3gwkqNzurOoucjfUqfmg">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation || { lat: 13.7563, lng: 100.5018 }}
                zoom={13}
              >
                {userLocation && (
                  <>
                    <Marker
                      position={userLocation}
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Marker สีฟ้า
                        scaledSize:
                          window.google && window.google.maps
                            ? new window.google.maps.Size(40, 40)
                            : null,
                      }}
                    />
                    <InfoWindow position={userLocation}>
                      <div>
                        <h2 className="font-bold font-sans">ตำแหน่งของคุณ</h2>
                        <p className="font-sans">ตำแหน่งปัจจุบันของคุณ</p>
                      </div>
                    </InfoWindow>
                  </>
                )}

                {userLocation &&
                  sortedClinics.map((clinic, index) => (
                    <Marker
                      key={index}
                      position={clinic.position}
                      icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Marker สีแดง
                        scaledSize:
                          window.google && window.google.maps
                            ? new window.google.maps.Size(40, 40)
                            : null,
                      }}
                      onClick={() => setSelectedClinic(clinic)}
                    />
                  ))}

                {selectedClinic && (
                  <InfoWindow
                    position={selectedClinic.position}
                    onCloseClick={() => setSelectedClinic(null)}
                  >
                    <div>
                      <h2 className="font-bold">{selectedClinic.name}</h2>
                      <p>เบอร์โทรศัพท์: {selectedClinic.phone}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        <div className="p-6">
          {sortedClinics.map((clinic, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 shadow-md rounded-lg p-4 mb-4"
            >
              <div>
                <h2 className="font-semibold text-lg text-gray-800">
                  {clinic.name}
                </h2>
                <p className="text-gray-600">เบอร์โทรศัพท์: {clinic.phone}</p>
                <p className="text-gray-600">ที่อยู่: {clinic.address}</p>
              </div>
              <button
                className="bg-color-b text-white py-2 px-4 rounded-lg hover:bg-purple-600 font-sans"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${clinic.position.lat},${clinic.position.lng}`,
                    "_blank"
                  )
                }
              >
                เส้นทาง
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
