function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

    console.log(numberArray1);
    console.log(stringArray1);
    console.log(variableArray1);

    return(
        <div>
            <h3>Working with arrays</h3>
            <span>Number Array: {numberArray1.map((a, i) => <span>{a}</span>)}</span>
            <span>String Array: {stringArray1.map((a, i) => <span>{a}</span>)}</span>
            <span>Variable Array: {variableArray1.map((a, i) => <span>{a}</span>)}</span>
        </div>
    )
}

export default WorkingWithArrays;