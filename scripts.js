$("#btn").on("click",function(){

  // Although there are easier ways to traverse through the DOM,
  // just using most of jQuery traversing functions for testing
  let inputVal = $(this).parent().siblings().has("input").find("input").val().toUpperCase()

  if (inputVal != "") {
    $("#lmpMsg").html(inputVal)
    $("#errorMsg").attr("style","display:none;")
  } else {
    $("#errorMsg").html("<span>!</span> No value Inputed").toggle()
  }
  
})

