const fact = document.querySelector("#fact");
const factText = document.querySelector("#fact-text");
const numberInput = document.querySelector("#number-input");
numberInput.addEventListener("input", function(){
    let number = numberInput.value;
    if (number != "") {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", `http://numbersapi.com/${number}`);
      xhr.onload = function() {
          if (this.status === 200) {
            console.log(this);
          fact.style.display = "block";
          factText.innerText = this.responseText;
        }
      };
      xhr.send();
    }
});
