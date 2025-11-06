import React from "react";
import Headeriot from "../components/Headeriot.jsx";
import Footeriot from "../components/Footeriot.jsx";
import Navbariot from "../components/Navbariot.jsx";

export default function pageB() {
    return (
        <div>
            <Navbariot />
            <Headeriot wow='หน้า B' woo='OwO' />
            PageA
            <Footeriot/>
            </div>
    );
}