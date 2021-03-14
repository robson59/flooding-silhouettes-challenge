import { readFile } from './lib/File';
import { calcFlooding } from './lib/Silhouette';

const exec = (fileName: string) => {
    const file = readFile(fileName);

    if (!file) {
        return 'Invalid file';
    }

    let index = 1;

    let output = '';

    while (index <= parseInt(file[0]) * 2) {

        const values = file[index + 1];
        const size = file[index]

        const result = calcFlooding(size, values)

        if (result === false) {
            output = `File with invalid content! \n size: ${size} \n values: ${values}`;
            break;
        }

        output = `${output} \n ${result}`;

        index += 2;
    }


    return output;
}

export { exec }