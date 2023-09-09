import { Apple, Beef, Carrot, Milk, MoreVertical, Sandwich } from "lucide-react";
import { CheckBoxInput, Flex, Icon, ProductCategory, ProductContainer, ProductItem } from './Product.styles'

interface IProduct {
    category: string
    item: string
    amount: number
    unit: string
}

export default function Product({ category, item, amount, unit }: IProduct) {

    const IconSize = '16';

    const Icons = [
        { id: 'carne', symbol: <Beef size={IconSize} /> },
        { id: 'bebida', symbol: <Milk size={IconSize} /> },
        { id: 'fruta', symbol: <Apple size={IconSize} /> },
        { id: 'legume', symbol: <Carrot size={IconSize} /> },
        { id: 'padaria', symbol: <Sandwich size={IconSize} /> },
    ];

    const selectIcon = Icons.find((icon) => icon.id === category);

    return (
        <ProductContainer>
            <Flex>
                <CheckBoxInput />
                <ProductItem>
                    <h2>{item}</h2>
                    <p>
                        {amount} {unit}
                        {unit !== 'kg' && amount !== 1 ? `s` : ''}
                    </p>
                </ProductItem>
            </Flex>
            <Flex>
                <ProductCategory
                    categoryColor={category}
                >
                    {selectIcon && <span>{selectIcon.symbol}</span>}
                    <p>{category}</p>
                </ProductCategory>
                <Icon>
                    <MoreVertical fontSize={20} />
                </Icon>
            </Flex>
        </ProductContainer>
    )
}
