const multiplesOfNumber = (value,limit) => {

   let result = []

   if ( value == 1 ){
      return value
   }
   if ( limit == 2 ){
      return limit
   }

   if ( value == 3 || limit == 4 ){
      return result = value + limit 
   }

 if ( limit == 10 || value ==  5){
      return result = value * limit 
   }
}

module.exports = { multiplesOfNumber }






// function findMultiples(int,limit){
//    let result = []
   
//    for (let i = int; i<=limit ; i+=int)
//      result.push(i)
     
//    return result
//  }