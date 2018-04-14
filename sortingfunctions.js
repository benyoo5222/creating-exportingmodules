function listnumbers(){
   var listofnumbers=[];

   return function(numbers){
      listofnumbers.push(numbers);
      return listofnumbers;
   };
}
var newlist=listnumbers();

var sorted=function sortedlist(numbers){

  var list=newlist(numbers);


  list.sort(function(a,b){
    return a-b;
  })

  return list;

}

module.exports={
  sort:sorted
}


