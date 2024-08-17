import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { productList } from '../components/ProductList';

export default function ProductDetail() {
    const {productId} = useParams()
    const navigate = useNavigate()
    console.log('productId===', productId);
    console.log(productList);
    
    const targetProduct = productList[Number(productId) - 1]
    const {userId, id, title, body} = targetProduct
    
  return (
    <div>
        <h1>ProductDetail</h1>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <button onClick={() => navigate('/')}>홈으로 이동</button>
        <ul>
            <li>상품 번호: {id}</li>
            <li>상품명:{title}</li>
            <li>판매자:{userId}</li>
            <li>상세 설명:{body}</li>
        </ul>
    </div>
  )
}

/**
 * navigate() 숫자 인자 의미
 * 
 * 양수 숫자('n')
 * - 현재 페이지에서 'n'페이지 앞으로 이동 ex) 1 = 다음 페이지
 * 
 * 음수 숫자
 */