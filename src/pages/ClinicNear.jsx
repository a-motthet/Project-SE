import React from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const center = { lat: 13.7563, lng: 100.5018 };

const containerStyle = {
  width: "100%",
  height: "100%",
};

function App() {
  const clinics = [
    {
      name: "โรงพยาบาลสัตว์วิภา 24 ชั่วโมง",
      phone: "082-127-3536",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.755, lng: 100.501 }, // พิกัด
    },
    {
      name: "โรงพยาบาลสัตว์ MAH",
      phone: "02-463-4199",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.757, lng: 100.504 }, // พิกัด
    },
    {
      name: "บางบอนสัตวแพทย์",
      phone: "02-870-6701",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.759, lng: 100.498 }, // พิกัด
    },
    {
      name: "โรงพยาบาลสัตว์สุขสวัสดิ์",
      phone: "02-428-1443",
      address: "ตำแหน่งที่ตั้ง",
      position: { lat: 13.752, lng: 100.506 }, // พิกัด
    },
  ];

  const [selectedClinic, setSelectedClinic] = React.useState(null);

  return (
    <div className="min-h-screen flex justify-center items-center py-6">
      <div className="w-full max-w-4xl rounded-lg bg-white shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-left text-[#6373B7] mb-4">
            ค้นหาคลินิกใกล้ฉัน
          </h1>
          <div className="w-full h-64 rounded-lg shadow-md overflow-hidden">
            <LoadScript googleMapsApiKey="AIzaSyDkrkJNScs9Qjy3gwkqNzurOoucjfUqfmg">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
              >
                
                {clinics.map((clinic, index) => (
                  <Marker
                    key={index}
                    position={clinic.position}
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
          {clinics.map((clinic, index) => (
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
                className="bg-[#6373B7] text-white py-2 px-4 rounded-lg hover:bg-purple-600"
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
