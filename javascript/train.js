$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDALXux4VYKeqKyBkvV7bmqTBCmAh4Y210",
    authDomain: "coders-7e994.firebaseapp.com",
    databaseURL: "https://coders-7e994.firebaseio.com",
    projectId: "coders-7e994",
    storageBucket: "coders-7e994.appspot.com",
    messagingSenderId: "833412560924",
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  // console.log("OUTPUT: database", database);

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-input")
      .val()
      .trim();
    var dest = $("#dest-input")
      .val()
      .trim();
    var firstT = $("#firstTrain-input")
      .val()
      .trim();
    var freq = $("#freq-input")
      .val()
      .trim();

    var newTrain = {
      name: trainName,
      destination: dest,
      first: firstT,
      frequency: freq,
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

    $("#train-input").val("");
    $("#dest-input").val("");
    $("#firstTrain-input").val("");
    $("#freq-input").val("");
  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var dest = childSnapshot.val().destination;
    var firstT = childSnapshot.val().first;
    var freq = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(dest);
    console.log(firstT);
    console.log(freq);

    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(dest),
      $("<td>").text(firstT),
      // $("<td>").text(empMonths),
      $("<td>").text(freq),
      // $("<td>").text(empBilled),
    );

    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
});
