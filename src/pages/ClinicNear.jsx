import React, { useState, useEffect } from "react";

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [clinics] = useState([
    {
      name: "โรงพยาบาลสัตว์วันใสรักษาสัตว์",
      phone: "02-872-7903",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.64929, lng: 100.49619 },
    },
    {
      name: "คลินิกสัตว์ทุ่งครุ",
      phone: "094-985-5151",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.62142, lng: 100.5128 },
    },
    {
      name: "บ้านสวนธนฯสัตวแพทย์",
      phone: "02-426-4773",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.65114, lng: 100.48811 },
    },
    {
      name: "ปุกปุยสัตวแพทย์",
      phone: "086-369-6244",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.65043, lng: 100.48016 },
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("คลินิกใกล้ มจธ.");
  const [errorMessage, setErrorMessage] = useState("");
  const [geoError, setGeoError] = useState("");

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
          setGeoError("ไม่สามารถดึงตำแหน่งของคุณได้");
          setUserLocation({ lat: 13.7563, lng: 100.5018 }); // Default: กรุงเทพฯ
        }
      );
    } else {
      setErrorMessage("เบราว์เซอร์ของคุณไม่รองรับการระบุตำแหน่ง");
      setUserLocation({ lat: 13.7563, lng: 100.5018 });
    }
  }, []);

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

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

    const filteredClinics = sortedClinics.filter((clinic) =>
      clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const displayedClinics = sortedClinics.filter((clinic) =>
      clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = () => {
      const matchingClinic = sortedClinics.find((clinic) =>
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      if (matchingClinic) {
        const { lat, lng } = matchingClinic.position;
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
          "_blank"
        );
      } else {
        setErrorMessage(`ไม่พบคลินิกที่ตรงกับคำว่า "${searchQuery}"`);
      }
    };
    

  return (
    <div className="flex justify-center items-center py-6 font-sans bg-puple-box min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#6373B7] mb-4">
            ค้นหาคลินิก
          </h1>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="ค้นหาคลินิก เช่น 'คลินิกในประชาอุทิศ'"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setErrorMessage(""); 
              }}
            />
            <button
              className="mt-2 bg-[#6373B7] text-white py-2 px-4 rounded-lg color-holdber hover:scale-110"
              onClick={handleSearch}
            >
              ค้นหา
            </button>
          </div>
          {geoError && <div className="text-red-500 text-sm mb-4">{geoError}</div>}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          <div className="w-full h-64 rounded-lg shadow-md overflow-hidden">
            <iframe
              title="ค้นหาคลินิก"
              src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBPwGATC2MYwwKj2rMoFxJlEsy9qqphuKQ&q=${encodeURIComponent(
                searchQuery
              )}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="p-6 ">
        <h1 className="text-2xl font-bold text-[#6373B7] mb-4">
            คลินิกที่ทางเราเเนะนำ
          </h1>
          {sortedClinics.map((clinic, index) => (
            
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 shadow-md rounded-lg p-4 mb-4 transform transition-all hover:scale-105 hover:translate-x-2"
            >
              
              <div>
                <h2 className="font-semibold text-lg ">{clinic.name}</h2>
                <p>เบอร์โทรศัพท์: {clinic.phone}</p>
                <p>ที่อยู่: {clinic.address}</p>
                {userLocation && (
                  <p className="text-sm text-gray-600">
                    ระยะทาง: {clinic.distance.toFixed(2)} กม.
                  </p>
                )}
              </div>
              <button
                className="bg-[#6373B7] text-white py-2 px-4 rounded-lg color-holdber hover:scale-110 transition-all duration-300"
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
