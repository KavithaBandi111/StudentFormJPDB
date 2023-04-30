# StudentFormJPDB
The application has functionality for adding, updating, and retrieving student details. It takes input from the user for various fields such as Roll No., Full Name, Class, Birth Date, Address, and Enrollment Date. It also has functionality for validating the input and displaying error messages if necessary.
<!DOCTYPE html>: This is the document type declaration that specifies that this is an HTML5 document.
<html lang="en">: This is the opening tag for the HTML document and sets the language to English.
<head>: This is the start of the head section of the HTML document, which contains metadata and links to external resources.
<title>Bootstrap Example</title>: This sets the title of the HTML page to "Bootstrap Example".
<meta charset="utf-8">: This specifies the character encoding used in the HTML document.
<meta name="viewport" content="width=device-width, initial-scale=1">: This sets the viewport to the width of the device and sets the initial zoom level to 1.
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">: This is a link to the Bootstrap CSS file that provides the styling for the page.
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>: This is a link to the jQuery library that provides functionality for dynamic HTML manipulation.
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>: This is a link to the Bootstrap JavaScript file that provides interactivity for the page.
</head>: This is the end of the head section.
<body>: This is the start of the body section of the HTML document, which contains the content of the page.
<div class="container">: This creates a container for the student enrollment form.
<h2>Student Enrollment Form</h2>: This displays the heading of the form.
<form id="enrollment-form" method="get">: This starts the enrollment form and sets its method to GET.
<div class="form-group">: This creates a group of form elements.
<label for="rollNo">Roll No:</label>: This creates a label for the Roll No field.
<input type="text" class="form-control" id="rollNo" name="rollNo" onchange="getStu()">: This creates a text input field for the Roll No, and triggers the "getStu()" function when the input changes.
</div>: This closes the form group for the Roll No field.
There are additional form groups created for Full Name, Class, Birth Date, Address, and Enrollment Date fields in the same manner as above.
<input type="button" class="btn btn-primary" id="Save" value="Save" onclick="saveStudent();">: This creates a Save button that triggers the "saveStudent()" function when clicked.
<input type="button" class="btn btn-success" id="Update" value="Update" onclick="updateStudent();">: This creates an Update button that triggers the "updateStudent()" function when clicked.
<input type="button" class="btn btn-danger" id="Reset" value="Reset" onclick="resetForm();">: This creates a Reset button that triggers the "resetForm()" function when clicked.
</form>: This ends the enrollment form.
</div>: This closes the container for the student enrollment form.

jpdbBaseURL: a string representing the base URL for the API endpoints.
jpdbIRL: a string representing the URL for the IRL API endpoint.
jpdbIML: a string representing the URL for the IML API endpoint.
stuDBName: a string representing the name of the database for student details.
StuRelationName: a string representing the name of the relation for student details.
connToken: a string representing a connection token for accessing the API endpoints.
saveRecNo2LS(jsonObj): a function that saves a record number to local storage.
getStu(): a function that retrieves student details based on a roll number.
fillData(jsonObj): a function that fills student data into the form fields.
resetForm(): a function that resets the form fields.
validateData(): a function that validates the form fields and returns a JSON string of the data.
createUPDATERequest(connToken, jsonObj, stuDBName, StuRelationName, recNo): a function that creates a request for updating student data.
executeCommand(reqString, jpdbIML): a function that executes a JPDB command on the default base URL and returns the response.
getrollNoAsJsonObj(): a function that returns a JSON object of the roll number field.
saveStudent(): a function that validates the form data and sends a PUT request to update the student data.
