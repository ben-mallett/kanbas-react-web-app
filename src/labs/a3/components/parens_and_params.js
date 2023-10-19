function ParensAndParams() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return(
        <div>
            <h3>Parens and Params</h3>
            <span>Two Squared: {twoSquared}</span>
            <span>square(2): {square(2)}</span>
            <span>Three Plus One: {threePlusOne}</span>
            <span>plusOne(3): {plusOne(3)}</span>
        </div>
    )
}

export default ParensAndParams;