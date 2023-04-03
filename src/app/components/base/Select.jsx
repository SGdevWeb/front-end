import React from "react";

export default function Select({className, name, id, label, dataList = [] , onChange, value}) {
    return(
    <select className={`border-2 border-gradient-v rounded-lg ${className}`} name={name} id={id} onChange={onChange} value={value}>
        <option disabled selected hidden>{label}</option>
        {dataList.map(({uuid, name}) => <option key={uuid} value={uuid}>{name}</option>)}
    </select>
)};
