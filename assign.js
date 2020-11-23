var arr = [];














function load_items() {
	let temp = JSON.parse(window.localStorage.getItem("tickets"));
	if (temp) {
        arr = temp;
// alert(arr);
		show_assignee();
operational();
		get_data();
		// console.log(arr);
		// alert("userrrssss"+arr);
	}
	// get_user();
}
window.onload = load_items;

function show_assignee(){
    console.log(arr);




for( let i=0; i<arr.length; i++){
// alert(arr[i].Name);
// fet_data += "<tr>";
// fet_data += "<td id=got>" + arr[i].Name + "</td>";
// fet_data +=

    // alert(task);
// localStorage.setItem("TASK", task);

}
// return (document.getElementById("show-ticks").innerHTML = fet_data);

}


function priority (val){


val=document.getElementById("select_priority").value;
	alert(val);
	
}

function operational(){



	let po;
 po= sessionStorage.getItem("Session");
alert(po);



	let check=[];
//  check = JSON.parse(localStorage.getItem("tickets"));
 check = JSON.parse(localStorage.getItem("tickets"));






			console.log(check);
			
			for(let i=0; i<check.length; i++){
			if(po == check[i].assigned_to)
			{



				

				// alert(check[i].id);


				document.getElementById("show_ticks").innerHTML+= " <tr > <td >"+ arr[i].name+" </td>" +"<td>" + arr[i].email+ "</td>"+"<td>" + arr[i].Subject+ "</td>"+"<td>" + arr[i].Suboption+ "</td>"+"<td>" + arr[i].Desc+ "</td>"+"<td>"+arr[i].status+"</td> <td>"+arr[i].priority+"</td><td>"+arr[i].comment+"</td>  <td> <input type=button onclick=Resolve("+i+") ; class=form-control value=Resolve></td></tr>" ;


				// break;
			}
				
	//     alert("sacrifice");
	// }
// console.log(check[i]);
			}
	// }
//    alert(vle);
   }  

				

var get_d=[];

function get_data(){

	get_d=JSON.parse(localStorage.getItem("tickets"));

console.log(get_d);	
	
}

   

   function Resolve(val){






    
    document.getElementById("show-res").style.display = "block";
	



	document.getElementById("update").onsubmit = function () {



			let prior=document.getElementById("priority").value;
			get_d[val].priority=prior;
	let res_chocie=document.getElementById("resolve").value;
	alert(res_chocie);


get_d[val].status=res_chocie;
localStorage.setItem("tickets",JSON.stringify(get_d,get_d[val].priority));

localStorage.setItem("tickets",JSON.stringify(get_d,get_d[val].status));

		let comment=document.getElementById("res_comment").value;

		get_d[val].comment=comment;
		alert(comment);

		localStorage.setItem("tickets",JSON.stringify(get_d,get_d[val].comment));
	


	}





// document.getElementById("update_form").onsubmit = function () {
//         let edit_name= update_name.value;
//         let edit_email=update_email.value;
//         let edit_pass=update_password.value;
//         if(edit_name || edit_email || edit_pass){
//             arr[val].name = edit_name;
//             arr[val].email = edit_email;
//             arr[val].password = edit_pass;
//             set_user();
//             get_user();
//             // arr.splice(arr[val].name ,1,edit_name);
//             console.log(arr);
//             // arr.splice(arr[val].email ,1,edit_email);


//             // arr.splice(arr[val].pass ,1,edit_pass);
      
//             // get_user();
//             document.getElementById("update_field").style.display =
//             "none";
//         }


        



//     }


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


