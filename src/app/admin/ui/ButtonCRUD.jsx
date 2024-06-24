"use client"

export default function ButtonCRUD({ textButton, classNameExtra, onClick }) {

    return (
        <button className={`buttonCrud ${classNameExtra}`} onClick={onClick}>{textButton}</button>
    )

}