function camelToUnderscore(key) {
    return key.replace( /([A-Z])/g, "_$1").toLowerCase();
};

function sequelizeModelToJSON(obj) {
    return Object.keys(obj).reduce((acc, key) => {
        acc[camelToUnderscore(key)] = obj[key];
        return acc;
    }, {})
}

module.exports = {
    camelToUnderscore,
    sequelizeModelToJSON
}