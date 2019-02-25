$(#burgerform).on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
        burgerName: $("#burgerinput").val().trim()
    };

    $ajax.("api/burgers", {
        type: "POST",
        data: "newBurger"
    }).then(
        function () {
            console.log("New Burger!");
            location.reload();
        }
    )
});

$("#devour").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    let id = $(this).data("id");
    let eatenState = $(this).data("EatenState");

    $.ajax({
        method: "PUT",
        url: "api/burgers/" + id,
    }).then(
        function () {
            console.log("Changed Eaten state to: " + eatenState);
            location.reload();
        }
    )
})