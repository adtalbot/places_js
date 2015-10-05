$(document).ready(function() {
  $("#add-field-landmark").click(function() {
    $("#add-fields-landmark").append("<div class='new-fields-landmark'>" +
                              "<div class='form-group'>" +
                                "<label for='landmark'>Landmark</label>" +
                                "<input class='form-control add-landmark' name='landmark' type='text'>" +
                              "</div>" +
                            "</div>");
  });

  $("#add-field-companion").click(function() {
    $("#add-fields-companion").append("<div class='new-fields-companion'>" +
                              "<div class='form-group'>" +
                                "<label for='companion'>Companion</label>" +
                                "<input class='form-control add-companion' name='companion' type='text'>" +
                              "</div>" +
                            "</div>");
  });

  $("form#add-travel").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedDate = $("input#date").val();
    var newPlace = { location: inputtedLocation, date: inputtedDate, landmarks: [], companions: [] };

    $(".new-fields-landmark").each(function() {
      var inputtedLandmark = $(this).find("input.add-landmark").val();
      newPlace.landmarks.push(inputtedLandmark);
    });

    $(".new-fields-companion").each(function() {
      var inputtedCompanion = $(this).find("input.add-companion").val();
      newPlace.companions.push(inputtedCompanion);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function() {
      $("#show-places").show();

      $("#show-places h3").text(newPlace.location);
      $(".date").text(newPlace.date);

      $("ul#landmarks").text("");
      $("ul#companions").text("");

      newPlace.landmarks.forEach(function(landmark) {
        $("ul#landmarks").append("<li>Landmarks: " + landmark + "</li>");
      });
      newPlace.companions.forEach(function(companion) {
        $("ul#companions").append("<li>Companions: " + companion + "</li>");
      });
    });

    $("input#location").val("");
    $("input#date").val("");
    $("input.add-landmark").val("");
    $("input.add-companion").val("");
  });
});
