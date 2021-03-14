const ZERO_TEST = {
    size: '15',
    values: '10 10 10 10 10 10 10 10 10 10 10 10 10 10 10',
}

const ONE_ENTRANCE_TEST = {
    size: '1',
    values: '10',
}

const TEXT_SIZE_ENTRANCE_TEST = {
    size: 'text',
    values: '10 20 30 40',
}

const TEXT_VALUES_ENTRANCE_TEST = {
    size: '5',
    values: 'te st te xt',
}

const INCORRECT_ENTRANCE_TEST = {
    size: '4',
    values: '10 20 30 40 50',
}

const FLOODED_TEST = {
    size: '9',
    values: '5 4 3 2 1 2 3 4 5',
    result: 16,
}

export {
    ZERO_TEST,
    TEXT_VALUES_ENTRANCE_TEST,
    TEXT_SIZE_ENTRANCE_TEST,
    ONE_ENTRANCE_TEST,
    FLOODED_TEST,
    INCORRECT_ENTRANCE_TEST
}