function ForLoop() {
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
    for (let i = 0;
         i < stringArray1.length;
         i++) {
      const string1 = stringArray1[i];
      stringArray2.push(
        string1.toUpperCase());
    }
    return(
        <div>
            <h2>For Loop</h2>
            <span>
                String Array 2: {stringArray2}
            </span>
        </div>
    )
}

export default ForLoop