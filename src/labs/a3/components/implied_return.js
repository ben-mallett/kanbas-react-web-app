function ImpliedReturn () {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    
    return(
        <div>
            <h3>Implied return</h3>
            <span>A: {4} B: {5}</span>
            <span>Four times five: {4 * 5}</span>
            <span>Multiply: {fourTimesFive}</span>
        </div>
    )
}

export default ImpliedReturn;