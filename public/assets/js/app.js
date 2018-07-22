
  $("form").on("submit", function(event) {
    event.preventDefault();
    var name = $("#new_burg").val().trim();
    if (name === "") {

    } else {
      var newBurger = {
       burger_name: name,
      };
       $.ajax("/api/burger", {
        type: "POST",
        data: newBurger,
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        });
    }
    });



$(".eat").on("click", function(event) {
  event.preventDefault();
  var id = $(this).attr("data-id");
  var devoured = true;
  var updateBurger = {
    id: id,
    devoured: devoured
  };

  $.ajax("/api/burger", {
    type: "PUT",
    data: updateBurger
  }).then(
  function() {
    console.log("updated buger");
    location.reload();
  })
})

