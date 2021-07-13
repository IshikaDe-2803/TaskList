document.addEventListener("DOMContentLoaded", function () {
  //Submit button disable/enable
  const submit = document.getElementById("submit");
  submit.disabled = true;
  const newTask = document.getElementById("task");
  newTask.onkeyup = () => {
    if (newTask.value.length > 0) {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  };

  // Add close button to existing tasks
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      //delete the parent element which is the list element
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  //checking and unchecking of tasks
  var myNodelist = document.querySelector("ul");
  myNodelist.addEventListener("click", function (check) {
    check.target.classList.toggle("checked");
    console.log("checked");
  });

  //create a new task
  document.querySelector("form").onsubmit = () => {
    const task = newTask.value;
    const li = document.createElement("li");
    li.innerHTML = task;
    document.querySelector("#tasks").append(li);
    newTask.value = "";
    submit.disabled = true;

    document.getElementById("task").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
    return false;
  };
});
