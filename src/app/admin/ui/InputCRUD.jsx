export default function InputCRUD({ classNameExtra, placeholder, type }) {

    return (
        <input type={type} className={`inputCRUD ${classNameExtra}`} placeholder={placeholder} />)

}