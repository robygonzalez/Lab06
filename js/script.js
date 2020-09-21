$("#addItemButton").on("click", function(e) {
    e.preventDefault();
    var name = $("#input").val();
    $("#lista").append(`<div class="element">
        <h2 class="hh2">${name}</h2>
        <button type="submit" id="checkButton">check</button>
        <button type="submit" id="deleteButton">delete</button>
    </div>`);
})

$("#lista").on("click", "#checkButton", function() { 
    $(this).parent().toggleClass('strikethrough');
})

$("#lista").on("click", "#deleteButton", function() {
    $(this).parent().remove();
})