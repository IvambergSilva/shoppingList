import styled from "styled-components";

import { Base, Body, Feedback, Product, SecundaryHeading, Support, Tag } from "../../styles/Variables";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductContainer = styled(Flex)`
    background: ${Base.gray_400};
    max-width: 100%;
    font-size: 2rem;
    justify-content: space-between;
    height: 6.8rem;
    border-radius: 0.8rem;
    padding: 1.6rem 2rem;
`;

export const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    flex-shrink: 0;
    border-radius: 0.2rem;
    border: 1px solid ${Product.purple_light};
    cursor: pointer;
    margin-right: 2rem;

    &:hover {
        background: ${Product.purple_dark};
        border: 1px solid ${Product.purple_light};
    }

    &:checked {
        background: ${Feedback.success};
        border: 1px solid ${Feedback.success};

        &:hover {
            background: ${Feedback.success_light};
        }
    }
`

export const ProductItem = styled.div`
    gap: 0.2rem;

    h2 {
        font-size: ${SecundaryHeading.size};
        font-weight: ${SecundaryHeading.weight};
        line-height: ${SecundaryHeading.lineHeight};
        color: $gray-100;
        text-transform: capitalize;
    }

    p {
        font-size: ${Body.size};
        font-weight: ${Body.weight};
        line-height: ${Body.lineHeight};
        color: $gray-200;
    }
`;

interface IProductCategoryProps {
    categoryColor: string
}

const categoryColors = [
    { id: 'padaria', color: 'yellow' },
    { id: 'legume', color: 'green' },
    { id: 'fruta', color: 'orange' },
    { id: 'bebida', color: 'blue' },
    { id: 'carne', color: 'pink' }
]


export const ProductCategory = styled(Flex) <IProductCategoryProps>`
    background: ${(props) => {
        const categoryStyle = categoryColors.find((color) => color.id == props.categoryColor)

        if (categoryStyle) {
            const bg = `${categoryStyle.color}_dark`
            return `${Support[bg as keyof typeof Support]}`;
        }
    }};

    color: ${(props) => {
        const categoryStyle = categoryColors.find((color) => color.id === props.categoryColor)


        if (categoryStyle) {
            return `${Support[categoryStyle.color as keyof typeof Support]}`;
        }
    }};

    height: 3.2rem;
    border-radius: 1.6rem;
    padding: 0.8rem 1.6rem;
    gap: 0.6rem;
    font-size: ${Tag.size};
    font-weight: ${Tag.weight};
    line-height: ${Tag.lineHeight};
`;

export const Icon = styled(Flex)`
    cursor: pointer;
`