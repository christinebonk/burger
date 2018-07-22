
  $("form").on("submit", function(event) {
    event.preventDefault();
    console.log("hi")

    var newBurger = {
      burger_name: $("#new_burg").val().trim()
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
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

