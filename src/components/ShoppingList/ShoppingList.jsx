import React from 'react'
import { connect,useSelector } from "react-redux";
import { Wrapper, Title, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'
import { selectAllProducts } from '../../store/Products/Products.selectors';

function ShoppingList ({ title, products, onToggle,productsFromRedux }) {
  console.log("sem hooks",productsFromRedux)
  const reduxProducts = useSelector(state=>state.products)
  console.log("Com hooks:",reduxProducts)
  selectAllProducts
  // console.log("select modularizado:", useSelector(selectAllProducts));

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
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }
    </Array>
  </Wrapper>
}

const mapStateToProps = (state) =>{
  return{productsFromRedux:state.products}

}
export default connect(mapStateToProps)(ShoppingList)
