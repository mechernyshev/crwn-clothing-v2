import { useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import './category.styles'
import {CategoryContainer, CategoryTitle} from "./category.styles";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const Category = () => {
    const { category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle className='category-title'>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? (<Spinner/>) : (<CategoryContainer className='category-container'>
                    {
                        products && products.map((product) => <ProductCard key={product.id} product={product}/>)
                    }
                </CategoryContainer>)
            }

        </Fragment>

    )
}

export default Category
