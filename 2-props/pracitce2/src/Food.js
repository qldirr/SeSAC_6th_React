const Food = (props) => {
    const {food} = props
    return (
        <>
            <h2>내가 가장 좋아하는 음식은 ? <span style={{color:'red'}}>{food}</span></h2>
        </>
    )
}

Food.defaultProps = {
    food:'갈비'
}

export default Food;