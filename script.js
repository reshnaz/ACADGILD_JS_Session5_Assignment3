
// 1. Empty object created.

console.log("Creating StudentDetails Object Literal with no properties...");

var StudentDetails = {};

console.log(StudentDetails);

// 2. Properties added to object

console.log("Adding 3 initial properties to StudentDetails...");

var studentProps = ["StudentName","DOB","Skills"];

StudentDetails = {
	"StudentName":"",
	"DOB":"",
	"Skills":""
};

console.log("Displaying properties of StudentDetails...");

console.log(StudentDetails);

// 3. Nested object property added to our parent object.

console.log("Updating StudentDetails with nested object called Address...");

StudentDetails.Address={};

console.log(StudentDetails);

// 4. Here we add sub-properties to the nested property.

console.log("Including sub-properties for nested Address property...");

StudentDetails.Address.state="";
StudentDetails.Address.city="";
StudentDetails.Address.country="";
StudentDetails.Address.pincode="";

console.log(StudentDetails);

// 5. We add 2 more properties to our main object here.

console.log("Updating StudentDetails by adding eyecolor and motherName properties...");

StudentDetails.eyecolor="";

StudentDetails.motherName="";

console.log(StudentDetails);

// 6. Finally, delete any one property and display the final result.

console.log("Deleting the Skills property from StudentDetails object and displaying final result...");

delete StudentDetails.Skills;

console.log(StudentDetails);