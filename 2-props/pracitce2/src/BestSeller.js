import bookimg from './img/bookimg.jpg'

const BestSeller = (props) => {
    const {title, author, type, price} = props

    return (
        <div style={{backgroundColor:'beige'}}>
            <h3 style={{color:'orange'}}>이번주 베스트셀러</h3>
            <img src={bookimg} alt="bookimg" style={{height:'300px'}}/>
            <h3>{title}</h3>
            <div>저자:{author}</div>
            <div>판매가:{price}원</div>
            <div>구분:{type}</div>
        </div>
    )
}

export default BestSeller;