const ownerMail = "";
const devMail = "https://script.google.com/macros/s/AKfycbwj8er80p4-Eg6wKhPlt-JYzfAHFLqSF27gPq0nN9c3W33x7PkRSgBs_q6goUVS6L9JgA/exec";

let msg = "";

function validate() {
  let r = "";
  const formNames = ["First Name","Last Name","Email","Subject","Message"];
  formNames.forEach(value => {
    if (document.forms["contactUs"][value].value == "") {
      if (r != "") r += ", ";
      r+=value;
    }
  });
  if (r != "") {
    msg = r+" must be filled out";
    popUpGen("Error",msg);
    return false;
  }
  const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let f = document.forms["contactUs"]["Email"].value;
  if (!email.test(f)) {
    msg = "Invalid e-mail address";
    popUpGen("Error",msg);
    return false;
  } 
  return true;
}
$('#contactUs').on('submit',function(e){
  e.preventDefault();
  if (validate()) {
    var serializedForm = $("#contactUs").serialize();
    document.getElementById("contactUs").reset();
    const error = "Something went wrong. Please try again";
    $.ajax({
      url: devMail, //make sure this is ownerMail in actual release
      method: "POST",
      dataType: "json",
      data: serializedForm,
      success: function(response) {
        if(response.result == "success") {
          msg = "Thank you for contacting us.";
          popUpGen(msg,"");
          return true;
        }
        else {
          msg = error;
          popUpGen(msg,"");
          console.log(response.error);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        msg = error;
        console.log("jqXHR: "+jqXHR+"\ntextStatus: "+textStatus+"\nerrorThrown: "+errorThrown);
        popUpGen(msg,"");
      }
    })
  }
});
