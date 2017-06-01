$(document).ready(function() {
  $("form#survey").submit(function(event){
    event.preventDefault();
    var animal = $("input:radio[name=animal]:checked").val();
      if (animal === "fruitbat") {
      $("#splashanimal").toggle();
      $("#fruitbat-showing").toggle();
    } else if (animal === "possum") {
    $("#splashanimal").toggle();
    $("#possum-showing").toggle();
  } if (animal === "trashpanda") {
    $("#splashanimal").toggle();
    $("#trashpanda-showing").toggle();
    }
      console.log(animal);
  });
});
