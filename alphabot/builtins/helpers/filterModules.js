const filterModules = async (modules, moduleName) => {
  for (let i = 0; i < modules.length; i++) {
    if(modules[i].name === moduleName) return modules[i];
  }
};

module.exports = filterModules
