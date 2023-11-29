
function letSee() {
  
  $("#bodyy").text("");
  let searchInput = $(".searchQ").val();
  let request = new XMLHttpRequest();
  let url = "https://api.giphy.com/v1/gifs/search?q="+searchInput+"&api_key=uWqd3rgKM2mgxuIOoAZatTDFOJapxak2";

  request.open("GET", url, true);

  request.onload = function() {

    let res = JSON.parse(this.response); 
    
    if (request.status >= 200 && request.status < 400) {

      
      for (let i = 0; i < 10;i++) {
        
        $("#bodyy").append(`<img src=  ${res.data[i].images.downsized_large.url} >`);
        //$('body').append('src',(res.data[i].images.downsized_large.url));
      }  

    }

    
  };

  //OPTIONAL
  
  let newRequest = new XMLHttpRequest();
  let newUrl = "https://api.adviceslip.com/advice/search/"+searchInput;
  newRequest.open("GET", newUrl, true);
  newRequest.onload = function() {

    let newRes = JSON.parse(this.response);
    if (newRequest.status >= 200 && newRequest.status < 400) {
      let resAdv = newRes.slips[0].advice;
      console.log(resAdv);
      $("#advice").text(resAdv);
    }

    
  };
  
  

  request.send();
  newRequest.send();
}

// forms
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}