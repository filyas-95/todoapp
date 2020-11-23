var arr = [];
var names=[];


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
		return n.id;
	});
}
let hi;
function on_load() {
getusers();

	// alert("hi");
	// get_assignee();
	// getusers();
	let getuser = localStorage.getItem("tickets");
	// let getuser1= JSON.parse( localStorage.getItem("Assignee"));

	arr = JSON.parse(getuser);


	
	if (window.location.href.indexOf("assignform.html") > -1) {
		// console.log("hi");
		// assign_user();
		console.log(arr);

		let url = document.location.href;
		let url_get = url.split("?");
		 hi = url_get[1];
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
				"</td><td id=disp> "+arr[i].assigned_to+"</td><td id=form_btn><input id=btn_assign type=button value=Assign  class=form-control  id=slec_id" +
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

    alert(val);
	// onload();
	let uiq = Date.now();
	let options = "";
	console.log(names);
	for (let i = 0; i < names.length; i++) {
		options += `
		<option id=sel value=${roles[i]}>${names[i]}</option> `;
	}
	

	let user_assignee = document.getElementById("show_opt");
	document.getElementById("id_display").innerHTML =  arr[val].id;
	// assigning elements to the variables;
	let user = document.getElementById("hi");
	let user_em = document.getElementById("em");
	let user_desc = document.getElementById("descrip");
	let user_title = document.getElementById("title_t");
    let user_subti = document.getElementById("subtitle_t");
    // setting values to the elements from array
	user.value = arr[val].name;
	user_em.value =  arr[val].email;
	user_desc.value=arr[val].Desc;
	user_title.value =  arr[val].Subject;
    user_subti.value = arr[val].Suboption;
    user_assignee.innerHTML=options;
    // assigning to assignee
    let selected_option = document.getElementById("show_opt").value;
    
    // arr[i].assigned_user = selected_option;




// get_assignee();


}


function update_ticket() {

	let id = document.getElementById("id_display").innerHTML;
	// alert(id);

	
	let tep = document.getElementById("show_opt").value;
    alert(tep);
	arr[hi].assigned_to = tep;

	
		
		localStorage.setItem("tickets", JSON.stringify(arr,arr[hi].assigned_to));



	
    console.log(arr[hi]);

    
    // arr[i]
		// localStorage.setItem("Assignee", JSON.stringify(get));


}


// function add_ticket() {
// 	let id = document.getElementById("id_display").innerHTML;
// 	// alert(id);
// 	let tep = document.getElementById("show_opt").value;
// 	alert(tep);
// 	let user = document.getElementById("hi").value;
// 	let user_em = document.getElementById("em").value;
// 	let user_desc = document.getElementById("descrip").value;
// 	let user_title = document.getElementById("title_t").value;
// 	let user_subti = document.getElementById("subtitle_t").value;
// 	let ob = {
// 		id: id,
// 		Name: user,
// 		email: user_em,
// 		Description: user_desc,
// 		Title: user_title,
// 		Subtitle: user_subti,
// 		Assignee: tep,
// 	};

// 	assign_push.push(ob);

	
// 	localStorage.setItem("Assignee", JSON.stringify(assign_push));

// 	// get_assignee();

	
// 		// on_load();
// }


function Assign(value) {
	// alert("kuch bh");
	let page_form = "assignform.html?" + encodeURIComponent(value);
	location.href = page_form;
}
