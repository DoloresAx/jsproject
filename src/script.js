// When the first button is clicked
function sayHello() {
    console.log("Button clicked!");
    alert("Hello, you clicked the button!");
  }
  
  // When the user enters their name and clicks Submit
  function greetUser() {
    let name = document.getElementById("nameInput").value;
  
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
  
    console.log("User entered:", name);
    alert("Hello, " + name + "!");
  
    // Also show the message on the web page
    document.getElementById("greetingMessage").innerText = "Nice to meet you, " + name + "!";
  }
  