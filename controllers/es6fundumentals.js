function EsConceptsController (){
  
   defaultParams =(name ="Betty") => {
    return name;
  }
  undefinedValues = (a=1,b=2,c=3)=>{
    return [a,b,c]
  }
  isMasiga = ()=> {
    return '';
  }

  sumMultiple = (name, ... values)=> {
      var result = 0;

      if(values){
        values.forEach(element => {
          result += element;
        });
      }
      return result;
  }

  spreadOperators = (x,y,z) => {
      return (x+y+z);
  }

  templating = (templating) => {
    return `${templating.name} is ${templating.age} years old from templating`
  }

  return {defaultParams,isMasiga,undefinedValues,sumMultiple,spreadOperators,templating};

}
module.exports = EsConceptsController();
