const createId = (name) => {
    const emailName = name.replace(/ /g, '_');
    const email = `${emailName.toLowerCase()}@trybe.com`;
    const newEmployee = {
        name,
        email,
    };
    return newEmployee;
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    return employees;
  };

module.exports = { newEmployees, createId };