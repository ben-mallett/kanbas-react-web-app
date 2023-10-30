function ArrayIndexLen() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return(
        <div>
            <h2>Array Index and Length</h2>
            <span>Length: {length1}</span>
            <span>Index: {index1}</span>
        </div>
    )
}

export default ArrayIndexLen;