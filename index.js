function getFirstSelector(selector){
  console.log('First match:',document.querySelectorAll(selector)[0])
  return document.querySelectorAll(selector)[0]
}

function nestedTarget(){
  let id_item = document.getElementById('nested')
  return id_item.querySelector('.target')
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i = 0; i < lis.length; i++){
    var tmp_num = parseInt(lis[i].innerHTML) + n
    lis[i].innerHTML = tmp_num
  }
}

function deepestChild(){
  var id_item = document.getElementById('grand-node')
  while(true){
    id_item = id_item.children[0]
    if(!id_item.children[0])
      return id_item
  }

}
