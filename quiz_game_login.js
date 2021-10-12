player1_name = "";
player2_name = "";
function Add_User(){
    player1_name = document.getElementById("mlogin1_input").value;
    player2_name = document.getElementById("mlogin2_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "quiz_game_page.html";
}