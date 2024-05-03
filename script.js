var option;

window.addEventListener('popstate', function(event) {
    goBack();
});

function showOptions(selectedOption) {
    option = selectedOption;
    document.getElementById("content").style.display = "none";
    document.getElementById("options").style.display = "flex";
    history.pushState(null, null, "");
}

function sendData(data) {
    var jsonData = {
        "data": data
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/receiveData", true); // Adjust URL accordingly
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Poruka uspješno poslana na Unreal Engine!");
            } else {
                alert("Pogreška prilikom slanja poruke na Unreal Engine.");
            }
        }
    };
    xhr.send(JSON.stringify(jsonData));
}

function goBack() {
    document.getElementById("content").style.display = "block";
    document.getElementById("options").style.display = "none";
}
