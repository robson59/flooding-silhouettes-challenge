const calcFlooding = (size: string, values: string) => {
    const sizeInt = parseInt(size);

    const valuesArray = values.trim().split(' ').map(x => +x);

    if (!sizeInt || !valuesArray.length || sizeInt !== valuesArray.length) {
        return false;
    }

    let leftIndex = valuesArray[0];

    let sum = 0;

    let count = 1;

    while (count < sizeInt) {

        if (valuesArray[count] < leftIndex) {

            let rightIndex = valuesArray
                .slice(count, sizeInt)
                .reduce((a, b) => {
                    return Math.max(a, b);
                });

            if (leftIndex <= rightIndex) {
                sum = sum + (leftIndex - valuesArray[count]);
            } else {
                sum = sum + (rightIndex - valuesArray[count]);
            }

        } else {
            leftIndex = valuesArray[count];
        }

        count++;
    }

    return sum;
}

export { calcFlooding }
