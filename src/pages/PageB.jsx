import React from "react";
import Headeriot from "../components/Headeriot.jsx";
import Footeriot from "../components/Footeriot.jsx";
import Navbariot from "../components/Navbariot.jsx";
import BMI from "./../assets/bmi.png";

export default function pageB() {
  return (
    <div>
      <Navbariot />
      <Headeriot wow="หน้า B" woo="OwO" />
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-x1">
        <h1 className="text-center text-3xl font-bold">BMI Calculator</h1>
        <h3 className="text-center mt-2 text-gray-400">คำนวณ BMI</h3>
        <img src={BMI} alt="รูปBMI" className="w-30 mx-auto mt-5" />
        <h3 className="mt-5 ">ป้อนน้ำหนัก(กิโลกรัม)</h3>
        <input
          type="number"
          placeholder="เช่น 65"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />
        <h3 className="mt-5 ">ป้อนส่วนสูง(เซนติเมตร)</h3>
        <input
          type="number"
          placeholder="เช่น 170"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />
        <button
          className="p-3 bg-blue-500 hover:bg-blue-700 mr-2
            rounded-lg w-full text-white font-bold cursor-pointer mt-5"
        >
          คำนวณ BMI
        </button>
        <button
          className="p-3 bg-gray-300 hover:bg-gray-500 mr-2
            rounded-lg w-full text-black cursor-pointer mt-5"
        >
          รีเซ็ต
        </button>
        <div className="flex justify-center items-center gap-2 mt-5 text-2xl">
          ค่า BMI ที่คำนวณได้:
          <span className="text-5x1 text-blue-600 font-bold">0.00</span>
        </div>
        <button
          className="p-3 bg-gray-300 hover:bg-gray-500 mr-2
            rounded-lg w-full text-black cursor-pointer mt-5"
        >
          กลับหน้าหลัก
        </button>
      </div>
      <Footeriot />
    </div>
  );
}
