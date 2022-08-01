export const getComponents = (dataObject) => {
  const moduleNames = Object.keys(dataObject.data.attributes)
  const cleanModuleNames = moduleNames.filter(attr => {
    if( attr ==="createdAt" || attr ===  'updatedAt' || attr === 'publishedAt' ){
      return false;
    }else{
      return true;
    }
  })
  const components = cleanModuleNames.map(module => {
    try{
      return require(`../components/${module}.js`).default;
    }catch(err){
      console.log(`${module} component does not exist`);
    }
  }).filter(module => module);
  return components;
}