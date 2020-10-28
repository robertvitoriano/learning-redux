import React,{useEffect} from 'react'
import { connect,useSelector } from "react-redux";
import { Wrapper, Title, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'
import { selectAllProducts,selectSelectedProducts } from '../../store/Products/Products.selectors';
import {toggleProduct} from '../../store/Products/Products.actions'

function ShoppingList ({ title,dispatch,displayOnlySelected  }) {
  console.log(displayOnlySelected )

  const  products = useSelector(displayOnlySelected  ? selectSelectedProducts:selectAllProducts)

  return <Wrapper>
    <Title>
      { title }:
    </Title>
    <Array>
      {
        products.map(product =>
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() =>dispatch(toggleProduct(product.id))}/>
        )
      }
    </Array>
  </Wrapper>
}

const mapStateToProps = (state) =>{
  return{products:state.products}

}
export default connect(mapStateToProps)(ShoppingList)
