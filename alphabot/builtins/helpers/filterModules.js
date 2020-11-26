const filterModules = async (modules, moduleName) => {
  for (const m of modules) {
    if(m.name === moduleName) return m;
  }
};

module.exports = filterModules
