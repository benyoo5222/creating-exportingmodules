var list=[];

function savenumbers(input){
   list.push(input);
}


function sortedlist(){

  return sortit(list);
}

function sortit(list){

  list.sort(function(a,b){
    return a-b;
  })
  return list;
}

module.exports={
  list:savenumbers,
  sort: sortedlist
}


