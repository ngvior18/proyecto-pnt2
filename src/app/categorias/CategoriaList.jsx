import Categoria from "./Categoria";

export default function CategoriaList(props) {
    return (
        <ul>
            {props.categorias.map(categorias => {
                return (
                    <Categoria
                        id={categorias["_id"]}
                        nombre={categorias.nombre}
                    />
                );
            }

            )}
            </ul>

    );
}