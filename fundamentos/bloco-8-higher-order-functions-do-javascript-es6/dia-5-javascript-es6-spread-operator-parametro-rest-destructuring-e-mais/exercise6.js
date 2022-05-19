const toObject = ([name, manufacturer, year]) => {
    return {
        name,
        manufacturer,
        year,
    };
};

module.exports = { toObject };