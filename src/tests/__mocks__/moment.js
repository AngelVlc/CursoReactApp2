//para llamar al moment real en vez de al mock (no se puede importar)
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};