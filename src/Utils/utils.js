const dateCreation = ()=>{
    const date = new Date().toString();
    const boundary = date.search("GMT");
    return date.substr(0,boundary).trim(); 
}

const mergeStateToObjects = (state, value1, value2)=>{
    const currentDateAndTime = dateCreation();
  return {
      id: geneateID(),
      [value1]: [state.value1],
      [value2]:[state.value2],
      created: currentDateAndTime
  };
}

const lowerCaseFirstLetter= (letter)=>{
   return letter.toString().charAt(0).toLowerCase() + letter.slice(1);
};

const geneateID = ()=>{
  return new Date().getTime().toString(36);
};
export default {
    mergeStateToObjects,
    lowerCaseFirstLetter,
    geneateID
}; 