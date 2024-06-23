"use client"
import { useState, useEffect } from "react";

export default function useCategorias() {
const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
            fetch('http://localhost:3000/api/categorias/getCategorias')
            .then(
                response => response.json())
            .then(data => {
                console.log(data);
                setCategorias(data);
            })
            .catch(error => console.log(error));
    }, []);
    
    return categorias;


}