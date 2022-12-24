import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur
                    consectetur magni, maiores eveniet fuga veritatis officiis quae dignissimos
                    illo atque totam enim officia! Quae laborum tempore enim mollitia blanditiis.
                </p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}