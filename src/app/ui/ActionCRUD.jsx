"use client"

import React, { useState } from "react";
import InputCRUD from "./InputCRUD";
import ButtonCRUD from "./ButtonCRUD";

export default function ActionCRUD({ textButton, placeholder, classNameExtra, onClickButton }) {
    const [inputValue, setInputValue] = useState("");

    const handleClickButton = () => {
        if (onClickButton) {
            onClickButton(inputValue);
        }
    };

    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="addCategorie actionCrud">
            <InputCRUD placeholder={placeholder} classNameExtra={classNameExtra} onChange={handleChangeInput} />
            <div className="titleCrud">
                <ButtonCRUD textButton={textButton} onClick={handleClickButton} />
            </div>
        </div>
    );
}

