import Product from "../../components/Product/Product";

export default function Home() {
    return (
        <div>
            <Product
                category='fruta'
                item='Maça'
                amount={2}
                unit='kg'
            />
            <Product
                category='padaria'
                item='Pão frances'
                amount={2}
                unit='unidade'
            />
            <Product
                category='carne'
                item='Peito de Frango'
                amount={1}
                unit='kg'
            />
            <Product
                category='legume'
                item='Brócolis'
                amount={1}
                unit='unidade'
            />
            <Product
                category='bebida'
                item='Leite'
                amount={2}
                unit='litro'
            />
            <Product
                category='bebida'
                item='Refrigerante'
                amount={1}
                unit='litro'
            />
        </div>
    )
}
