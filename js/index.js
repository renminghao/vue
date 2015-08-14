var markdown = function (input){
  return "<a href='http://www.tmall.com'>TMALL</a>";
}

var header = new Vue({
  el : "#header",
  replace : false,
  template : 'Markdown Edit'
})

var textarea = new Vue({
  el : "#editor",
  data : {
    input : "# Welcome to here"
  },
  filters : {
    marked : function (input){
      return markdown(input);
    }
  }
})