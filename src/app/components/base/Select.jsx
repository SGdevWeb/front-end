import React from "react";

export default function Select({className, name, id,}) {
    return(
        
    <select className={`border-2 border-gradient-v rounded-lg ${className}`} name={name} id={id}>
        <option disabled selected hidden value="">Type de projet</option>
        <option value="reseau-social">Réseau Social</option>
        <option value="e-commerce">E-commerce</option>
        <option value="blog">Blog</option>
        <option value="autre">Autre</option>
    </select>

)
}
