import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetProfile = () => {
  const { id } = useParams();
  const [thispet, setThispet] = useState([]);
  const [guide, setGuide] = useState([]);

  const formatter = new Intl.DateTimeFormat("th-TH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  function calculatePetAge(birthDateString) {
    // แปลงวันเกิดจากสตริงเป็น Date object
    const birthDate = new Date(birthDateString);
    const currentDate = new Date(); // วันที่ปัจจุบัน

    // คำนวณอายุ
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();

    // ปรับอายุหากเดือนหรือวันยังไม่ถึงวันเกิดในปีนี้
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    // แปลงวันเกิดเป็นฟอร์แมตที่อ่านง่าย
    const formattedBirthDate = formatter.format(birthDate);

    return {
      age,
      formattedBirthDate,
    };
  }

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const token = localStorage.getItem("token"); // ดึง Token
        const response = await axios.get(`http://localhost:3001/pets/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setThispet(response.data); // เก็บข้อมูลสัตว์เลี้ยงใน State
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchPet();
  }, []);

  useEffect(() => {
    const fetchGuide = async () => {
      if (thispet.length > 0) {
        try {
          const token = localStorage.getItem("token");
          const breed = thispet[0].pet_breed;
          const gender = thispet[0].pet_gender;
          const weight = thispet[0].pet_weight;
          const age = calculatePetAge(thispet[0].pet_birthdate).age;

          const response = await axios.get(
            `http://localhost:3001/guide?breed=${breed}&gender=${gender}&weight=${weight}&age=${age}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log(response.data);
          setGuide(response.data);
        } catch (err) {
          console.error("Error fetching Guide:", err);
        }
      }
    };

    fetchGuide();
  }, [thispet]);

  if (thispet.length === 0) {
    return <p className="text-center">กำลังโหลดข้อมูลสัตว์เลี้ยง...</p>;
  }

  if (guide.length === 0) {
    return <p className="text-center">กำลังโหลดข้อมูลโภชนาการ...</p>;
  }

  return (
    <>
      <div className="m-10 flex items-center justify-center font-sans">
        <div className="bg-white rounded-large shadow-inner w-11/12 lg:w-3/4 xl:w-2/3">
          <div className="py-4 flex flex-col items-center font-sans">
            <div className="w-11/12 md:w-3/4 lg:w-1/2 space-y-6">
              <div className="flex flex-cols item-center">
                <div className="flex-grow text-left mt-2">
                  <h1 className="text-xl font-extrabold text-color-b">
                    {thispet[0].pet_name} :
                  </h1>
                  <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="text-md text-color-b font-bold md:text-lg mt-1">
                      สัตว์เลี้ยง : {thispet[0].pet_breed}
                    </div>
                    <div className="text-md text-color-b font-bold md:text-lg mt-1">
                      เพศ : {thispet[0].pet_gender}
                    </div>
                    <div className="text-md text-color-b  font-bold md:text-lg mt-1">
                      อายุสัตว์ :{" "}
                      {calculatePetAge(thispet[0].pet_birthdate).age}
                    </div>
                    {/* <div className="text-md text-color-b  font-bold md:text-lg mt-1">
                      สายพันธุ์ : xxxx
                    </div> */}
                    <div className="text-md text-color-b font-bold md:text-lg mt-1">
                      น้ำหนัก : {thispet[0].pet_weight} กิโลกรัม
                    </div>
                  </div>
                </div>
                <div className="w-52 h-52 rounded-lg flex-shrink-0 ml-4">
                  <img
                    src={thispet[0].pet_photo}
                    alt={`${thispet[0].pet_photo} picture`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg text-color-b font-bold">อาหารตามวัย</h3>
                <div className="border-2 p-4 text-color-b font-bold rounded-large">
                  {guide[0].guide_foodwithage.split("\n").map((line, index) => (
                    <p key={index}>
                      {line} <br></br>
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg text-color-b font-bold">
                  อาหารที่ควรหลีกเลี่ยง
                </h3>
                <div className="border-2 p-4 text-color-b font-bold rounded-large">
                  {guide[0].guide_avoid_food.split("\n").map((line, index) => (
                    <p key={index}>
                      {line} <br></br>
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg text-color-b font-bold">
                  อาหารที่แนะนำ
                </h3>
                <div className="border-2 p-4 text-color-b font-bold rounded-large">
                  {guide[0].guide_recommended_food
                    .split("\n")
                    .map((line, index) => (
                      <p key={index}>
                        {line} <br></br>
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetProfile;
