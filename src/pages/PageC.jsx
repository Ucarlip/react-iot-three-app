import React from "react";
import Headeriot from "../components/Headeriot.jsx";
import Footeriot from "../components/Footeriot.jsx";
import Navbariot from "../components/Navbariot.jsx";

export default function PageC() {
    return (
        <div>
            <Navbariot />
            <Headeriot />
            PageA
            <Footeriot/>
            </div>
    );
}