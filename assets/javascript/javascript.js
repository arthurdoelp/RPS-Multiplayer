//pull output text from the html
//

$(document).ready(function() {
    var database = firebase.database();
    var usersRef = database.ref("/users");
    var chatRef = database.ref("/chat");
    var connectionsRef = database.ref("/connections");
    var connectedRef = database.ref(".info/connected");

    // When the client's connection state changes...
    connectedRef.on("value", function(snap) {

        // If they are connected..
        if (snap.val()) {
  
        // Add user to the connections list.
        var con = connectionsRef.push(true);
        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove();
        }
    });
  
    // When first loaded or when the connections list changes...
    connectionsRef.on("value", function(snap) {
  
        // Display the viewer count in the html.
        // The number of online users is the number of children in the connections list.
        $("#connected-users").text(snap.numChildren());
    });





    var user1Input;
    var user2Input;

    var wins = 0;
    var losses = 0;
    var ties = 0;
    var messageInput = "";
    var messageArray = [];

    var user1ChoiceImage = $("#user-1-choice-image");
    var user2ChoiceImage = $("#user-2-choice-image");
    var userResult = $("#user-result");
    var winsText = $("#wins-text");
    var losesText = $("#loses-text");
    var tiesText = $("#ties-text");

    $(".btn-choice").on("click", function() {
        var userPick = $(this).val();

        console.log("Your Pick: " + userPick);
    });
});

