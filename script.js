var jpdbBaseURL = "http://api.login2explore.com:5577" ;
var jpdbIRL =  "/api/irl" ;
var jpdbIML = "/api/iml" ;
var stuDBName = "Class Details ";
var StuRelationName = "Student-REL";
var connToken = "90932736|-31949280202982219|90950744" ;
StuRelationName
$("#rollNo").focus();

function saveRecNo2LS(jsonObj){
  var lvData = JSON.parse(jsonObj.data);
  localStorage.setItem("recno", lvData.rec_no);
  
  }
  
  function getStu(){
    var rollNoJsonObj = getrollNoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken,
   stuDBName, StuRelationName , rollNoJsonObj);
  jQuery.ajaxSetup({async: false});
  var resJsonObj = executeCommandAtGivenBaseUrl(getRequest,
  jpdbBaseURL,jpdbIRL);
  jQuery.ajaxSetup({async: true});
  if (resJsonObj.status === 400){
    $("#save").prop("disabled",false); 
    $("#reset").prop("disabled",false);            
    $("#fullName").focus();
  }
  else if (resJsonObj.status === 200){
    $("#rollNo").prop("disabled",true);
    fillData(resJsonObj);
  
    $("#update").prop("disabled",false); 
    $("#reset").prop("disabled",false);           
    $("#fullName").focus();
  }
  }
  function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#rollNo").val(record.rollNo);
    $("#fullName").val(record.fullName);
    $("#class").val(record.class);
    $("#birthDate").val(record.birthDate);
    $("#address").val(record.address);
    $("#enrollDate").val(record.enrollDate);

}
function resetForm() {
  $("#rollNo").val("");
  $("#fullName").val("");
  $("#class").val("");
  $("#birthDate").val("");
  $("#address").val("");
  $("#enrollDate").val(""); 
  $("#rollNo").prop("disabled", false);
  $("#save").prop("disabled",true); 
  $("#update").prop("disabled",true);
  $("#reset").prop("disabled",true);            
  $("#rollNo").focus();
  }

function validateData() {
var rollNoVar = $("#rollNo").val();
if (rollNoVar === "") {
alert("Roll No. Required Value");
$("#rollNo").focus();
return "";
}
var fullNameVar = $("#fullName").val();
if (fullNameVar === "") {
alert("Full Name is Required Value");
$("#fullName").focus();
return "";
}
var classVar = $("#class").val();
if (classVar === "") {
alert("Student class is Required Value");
$("#class").focus();
return "";
}
var birthDateVar = $("#birthDate").val();
if (birthDateVar === "") {
alert("Birth Date is Required Value");
$("#birthDate").focus();
return "";
}
var addressVar = $("#address").val();
if (addressVar === "") {
alert("address is Required Value");
$("#address").focus();
return "";
}
var enrollDateVar = $("#enrollDate").val();
if (enrollDateVar === "") {
alert("Enrollment Date is Required Value");
$("#enrollDate").focus();
return "";
}
var jsonStrObj = {
  rollNo: rollNoVar,
  fullName: fullNameVar,
  class: classVar,
  birthDate:birthDateVar,
  address:addressVar,
  enrollDate:enrollDateVar
};
return JSON.stringify(jsonStrObj);
}
//This function creates the request to update data to given jsonStr (only if recNo 
//already exists in the relation)
function createUPDATERequest(connToken, jsonObj, stuDBName, StuRelationName, recNo) {
    var req = "{\n"
            + "\"token\" : \""
            + connToken
            + "\","
            + "\"dbName\": \""
            + stuDBName
            + "\",\n" + "\"cmd\" : \"UPDATE\",\n"
            + "\"rel\" : \""
            + StuRelationName
            + "\",\n"
            + "\"jsonStr\":{ \""
            + recNo
            + "\":\n"
            + jsonObj
            + "\n"
            + "}}";
    return req;
}
// This function is responsible to execute JPDB command on the default baseUrl
// and returns response to the caller.
function executeCommand(reqString, jpdbIML) {
    var url = jpdbBaseURL + jpdbIML;
    var jsonObj;
    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
}

function getrollNoAsJsonObj(){
    var rollNo = $("#rollNo").val();
    var jsonStr = {

      rollNo: rollNo
    };
    return JSON.stringify(jsonStr);

}

function saveStudent() {
var jsonStr = validateData();
if (jsonStr === "") {
return;
}
var putRequest = createPUTRequest(connToken,
jsonStr, stuDBName, StuRelationName);
alert(putRequest);
jQuery.ajaxSetup({async: false});
var resJsonObj = executeCommandAtGivenBaseUrl(putRequest,
jpdbBaseURL,jpdbIML);
jQuery.ajaxSetup({async: true});

alert(JSON.stringify(resJsonObj));

resetForm();
$("#rollNo").focus();
}

function updateStudent() {
    $("#update").prop("disabled",true); 
   var jsonUpdate = validateData();
  if (jsonUpdate === "") {
  return;
  }
  var updateRequest = createUPDATERequest(connToken,
    jsonUpdate, stuDBName, StuRelationName, localStorage.getItem('recno'));
  alert(updateRequest);
  jQuery.ajaxSetup({async: false});
  var resultJsonObj = executeCommandAtGivenBaseUrl(updateRequest ,
  jpdbBaseURL,jpdbIML);
  jQuery.ajaxSetup({async: true});
  console.log(resultJsonObj);
  
  alert(JSON.stringify(resultJsonObj));
  
  resetForm();
  $("#rollNo").focus();
  }


