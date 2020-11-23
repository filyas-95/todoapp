var arr = [];
var assign = [];
// var assign_push = [];


function get_assignee(){
	assign_push= JSON.parse( localStorage.getItem("Assignee"));
	// alert(assign);
	console.log(assign_push);





}

// get_assignee();
function on_load() {
	// alert("hi");
	// get_assignee();
	// getusers();
	let getuser = localStorage.getItem("tickets");
	// let getuser1= JSON.parse( localStorage.getItem("Assignee"));

	assign = JSON.parse(getuser);


	
	if (window.location.href.indexOf("assignform.html") > -1) {
		console.log("hi");
		// assign_user();
		console.log(assign);

		let url = document.location.href;
		let url_get = url.split("?");
		let hi = url_get[1];
		assign_user(hi);

		// assign_user();

		// console.log(hi);
		// assign_user();
		// console.log(arr[hi]);
	} else {
		console.log("hi 1");
		let getTick = localStorage.getItem("tickets");
		console.log(getTick);

		arr = JSON.parse(getTick);
		let options = "";
		console.log(names);
		for (let i = 0; i < names.length; i++) {
			options += `
		<option value=${names[i]}>${names[i]} +${roles[i]}</option> `;
		}
		// alert(options);
		for (let i = 0; i < arr.length; i++) {
			// let html = `
			//     <tr>
			//         <td>${show[i].name}</td>
			//         <td>${show[i].email}</td>
			//         <td>${show[i].Desc}</td>
			//         <td>
			//             <select class=form-control id=slec_id selected onchange=Assign(); >

			//             <option >    ${options}    </options>
			//             </select>
			//         </td>
			//     </tr>
			// `;
			document.getElementById("show").innerHTML +=
				"<tr>" +
				"<td>" +
				arr[i].name +
				"</td>" +
				"<td>" +
				arr[i].email +
				"</td>" +
				"<td>" +
				arr[i].Desc +
				"</td>" +
				"<td>" +
				arr[i].Subject +
				"</td><td>" +
				arr[i].Suboption +
				"</td><td id=form_btn><input id=btn_assign type=button value=Assign  class=form-control  id=slec_id" +
				[i] +
				" onclick=Assign(" +
				[i] +
				");>  </button></td>" +
				"</tr>";

			// document.getElementById("show").innerHTML+="<tr>"+"<td>"+show[i].name+"</td>" +"<td>"+show[i].email+"</td>"+"<td>"+show[i].Desc+"</td>"+"<td><select class=form-control id=slec_id onchange=Assign(); value=>"+options+"</select></td>"+"</tr>";
			// console.log(html)
			// document.getElementById("show").innerHTML += html;
			console.log(arr[i]);

			//    let ge= document.getElementById("slec_id"+names[i]);
			console.log(options.value);

			// submit_form();
			// for(let i=0;i<op)
		}
	}
}
window.onload = on_load;

function assign_user(val) {
	// onload();
	let uiq = Date.now();
	let options = "";
	console.log(names);
	for (let i = 0; i < names.length; i++) {
		options += `
		<option id=sel value=${names[i]}>${names[i]} ${roles[i]}</option> `;
	}
	

	let user_assignee = document.getElementById("show_opt");
	document.getElementById("id_display").innerHTML =  assign[val].id;
	// alert(uid);
	let user = document.getElementById("hi");
	let user_em = document.getElementById("em");
	let user_desc = document.getElementById("descrip");
	let user_title = document.getElementById("title_t");
	let user_subti = document.getElementById("subtitle_t");
	user.value = assign[val].name;
	user_em.value =  assign[val].email;
	user_desc.value=assign[val].Desc;
	user_title.value =  assign[val].Subject;

	user_subti.value = assign[val].Suboption;

user_assignee.innerHTML=options;
// get_assignee();


}

function update_ticket() {
	let id = document.getElementById("id_display").innerHTML;
	// alert(id);
	let tep = document.getElementById("show_opt").value;
	alert(tep);
	let user = document.getElementById("hi").value;
	let user_em = document.getElementById("em").value;
	let user_desc = document.getElementById("descrip").value;
	let user_title = document.getElementById("title_t").value;
	let user_subti = document.getElementById("subtitle_t").value;
	let ob = {
		id: id,
		Name: user,
		email: user_em,
		Description: user_desc,
		Title: user_title,
		Subtitle: user_subti,
		Assignee: tep,
	};

	assign_push.push(ob);

	
	localStorage.setItem("Assignee", JSON.stringify(assign_push));

	// get_assignee();

	
		// on_load();
}

// window.onload=get_assignee;
function load_items() {
	let temp = JSON.parse(window.localStorage.getItem("users"));
	if (temp) {
		arr = temp;
	}
	get_user();
	// alert("hi");
}

function adduser() {
	let uiq = Date.now();
	console.log(uiq);
	let name = document.getElementById("user_name").value;

	let email = document.getElementById("user_em").value;
	// alert(name);
	let pass = document.getElementById("user_pass").value;

	let role = document.getElementById("user_role").value;
	let pass_confirm = document.getElementById("user_pass_confirm").value;
	alert(pass_confirm);

	if (pass == pass_confirm) {
		alert("ok");
	} else {
		alert("password dont match");
	}
	alert(pass);

	let ob = { id: uiq, name: name, email: email, password: pass, role: role };
	console.log(ob);
	arr.push(ob);
	console.log(arr);
	localStorage.setItem("users", JSON.stringify(arr));

	return true;
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
	let data = "";
	alert("aheaea" + arr);
	console.log(arr);

	for (let i = 0; i < arr.length; i++) {
		data += "<tr>";

		data += "<td>" + arr[i].name + "</td>";
		data += "<td>" + arr[i].email + "</td>";
		data += "<td>" + arr[i].password + "</td>";
		data +=
			"<td id=btn_td><input type=button id=edit_btn value=edit class=form-control onclick=edit_user(" +
			i +
			")> <input type=submit id=delete_btn onclick=delete_btn(" +
			i +
			")  value=Delete class=form-control>" +
			"</td>";
		data += "</tr>";
	}
	return (document.getElementById("showuser").innerHTML = data);
}

function edit_user(val) {
	let update_name = document.getElementById("text_up");
	let update_email = document.getElementById("email_up");
	let update_password = document.getElementById("pass_up");
	update_name.value = arr[val].name;
	update_email.value = arr[val].email;
	update_password.value = arr[val].password;

	document.getElementById("update_field").style.display = "block";

	document.getElementById("update_form").onsubmit = function () {
		let edit_name = update_name.value;
		let edit_email = update_email.value;
		let edit_pass = update_password.value;
		if (edit_name || edit_email || edit_pass) {
			arr[val].name = edit_name;
			arr[val].email = edit_email;
			arr[val].password = edit_pass;
			set_user();
			get_user();
			// arr.splice(arr[val].name ,1,edit_name);
			console.log(arr);
			document.getElementById("update_field").style.display = "none";
		}
	};
}

function delete_btn(val) {
	arr.splice(val, 1);

	set_user();
	window.location.reload();
}

function set_user() {
	localStorage.setItem("users", JSON.stringify(arr));
	get_user();
}

var names = [];
var roles = [];

getusers();
function getusers() {
	let getTick = localStorage.getItem("users");
	// let 	get = localStorage.getItem("Assignee");
	// console.log(get);
	// alert(get);

	console.log(getTick);

	let show = JSON.parse(getTick);
	names = show.map((n) => {
		return n.name;
	});

	roles = show.map((n) => {
		return n.role;
	});
}

function Assign(value) {
	// alert("kuch bh");
	let page_form = "assignform.html?" + encodeURIComponent(value);
	location.href = page_form;
}
