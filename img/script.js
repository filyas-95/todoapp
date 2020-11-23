let arr = [];
function load_items() {
	let temp = JSON.parse(window.localStorage.getItem("users"));
	if (temp) {
		arr = temp;
		console.log(arr);
		// alert("userrrssss"+arr);
	}
	// get_user();
}
window.onload = load_items;
// alert(arr);
function adduser() {


	
	let uiq = Date.now();
	console.log(uiq);
	let name = document.getElementById("user_name").value;
		
	let email = document.getElementById("user_em").value;
	
	// alert(email);
	let pass = document.getElementById("user_pass").value;
	let role = document.getElementById("user_role").value;
	



	// alert(pass);
	let pass_confirm = document.getElementById("user_pass_confirm").value;

	// alert(pass_confirm);

	if (pass == pass_confirm) {
		// alert("ok");
	
				

	if(check(email)==true){
		console.log(email);


	// let flag_value=true;
	alert("email already Registered");
	}


	else{


	

	let ob = { id: uiq, name: name, email: email, password: pass, role: role,u_id :"" };
	console.log(ob);
	arr.push(ob);
	console.log(arr);
	localStorage.setItem("users", JSON.stringify(arr));
	// alert(ob);
	// localStorage.setItem("users", JSON.stringify(arr));
	// window.location.reload();
	// flag_value=false;

	}

}

if(name== "" && email =="" && role == "Select Role" && pass=="" && pass_confirm =="" ){


	alert("fields cant be empty");
}
	else {
		alert("password dont match");
	}
// return flag_value;
}


function check(email){
	// let flag_value =true;
	if (arr.length > 0){
	for(let i=0; i<arr.length; i++){
	if(email ==arr[i].email  )

	{
		console.log(arr[i].email);
	flag_value=true;
	// break;
	}

	



	else{
		// alert("good");
		flag_value=false;

		
	}
	

	}
}
else{

	flag_value= false;
}
alert(flag_value);
	return flag_value;
}
function settingItem() {
	let ref = localStorage.getItem("users");
	if (ref) {
		arr = JSON.parse(ref);
	}
}
settingItem();
function create_UUID() {
	// let uiq = Date.now();
	// console.log(uiq);
}

function get_user() {
    let data="";
	alert("aheaea" + arr);
	console.log("good"+arr);

	// let getTick = localStorage.getItem("users");
	// console.log(getTick);

	// arr = JSON.parse(getTick);
	for (let i = 0; i < arr.length; i++) {
        data +="<tr>";
        // data +="<td>";
        data +="<td>"+ arr[i].name + "</td>";
        data +="<td>"+ arr[i].email + "</td>";
        data +="<td>"+ arr[i].password + "</td>";
        data +="<td id=btn_td><input type=submit id=edit_btn value=edit class=form-control onclick=edit_user(" +
        i +
        ")> <input type=submit id=delete_btn onclick=delete_btn(" +
        i +
        ")  value=Delete class=form-control>" +
        "</td>";
        data += "</tr>";
    }
    return (document.getElementById("showuser").innerHTML = data);
    
}
// function edit_user(val) {
// 	document.getElementById("update_field").style.display = "block";

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].id == val) {
// 			console.log(val);
// 			console.log(arr[i].id);
// 			// showid = arr[i].id;

// 			// document.getElementById("text_up").value = arr[i].name;
// 			// console.log(arr[i].name);
// 			// document.getElementById("email_up").value = arr[i].email;
// 			// console.log(arr[i].email);
// 			// document.getElementById("pass_up").value = arr[i].password;
// 			// console.log(arr[i].password);

// 			let show_name = document.getElementById("text_up");
// 			let show_email = document.getElementById("email_up");

// 			let show_password = document.getElementById("pass_up");
// 			// get_user();
//             // set_user();
//             show_name.value=arr[val].name;
            



// 			document.getElementById("update_form").onsubmit = function () {
// 				alert(arr[i].id);
// 				let edited_value =
// 					// alert("hii");
// 					(arr[i].name = document.getElementById("text_up").value);
// 				console.log(arr[i].name);
// 				arr[i].email = document.getElementById("email_up").value;
// 				console.log(arr[i].email);
// 				arr[i].password = document.getElementById("pass_up").value;
// 				console.log(arr[i].password);
// 				console.log(arr[i]);
// 				localStorage.removeItem("users");
// 				// set_user();
// 			};

// 			console.log(arr[i]);

// 			console.log(arr, "Arr after splice");
// 			// arr.splice(
// 			// 	val,
// 			// 	1,

// 			// );
// 			// console.log(arr,"Arr after splice");
// 			// let ob = {
// 			// 	id: showid,
// 			// 	name: arr[i].name,
// 			// 	email: arr[i].email,
// 			// 	password: arr[i].password,
// 			// };
// 			// console.log(ob,"console arr");
// 			// // console.log(typeof arr);
// 			// arr.push(ob);
// 			// console.log(arr,"Arr after push");

// 			// }
// 			document.getElementById("update_field").style.display = "none";
// 		}
// 	}
// }


function edit_user(val) {



    let update_name=document.getElementById("text_up");
    let update_email=document.getElementById("email_up");
    let update_password=document.getElementById("pass_up");
    update_name.value=arr[val].name;
    update_email.value=arr[val].email;
    update_password.value=arr[val].password;



    document.getElementById("update_field").style.display = "block";






document.getElementById("update_form").onsubmit = function () {
        let edit_name= update_name.value;
        let edit_email=update_email.value;
        let edit_pass=update_password.value;
        if(edit_name || edit_email || edit_pass){
            arr[val].name = edit_name;
            arr[val].email = edit_email;
            arr[val].password = edit_pass;
            set_user();
            get_user();
            // arr.splice(arr[val].name ,1,edit_name);
            console.log(arr);
            // arr.splice(arr[val].email ,1,edit_email);


            // arr.splice(arr[val].pass ,1,edit_pass);
      
            // get_user();
            document.getElementById("update_field").style.display =
            "none";
        }


        



    }


}




function delete_btn(val) {
	// var del = arr.splice(val, 1);

	
			// alert(val);

			arr.splice(val, 1);
		
	

	set_user();
	window.location.reload();
}

function set_user() {
	localStorage.setItem("users", JSON.stringify(arr));
	   get_user();
}
