var count = 0;

var input = document.getElementById("task");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  	document.getElementById("add").click();
  }
});

function addToList(){
	var task_text = document.getElementById("task").value;
	if(task_text != ""){
		count++;
		addElement(count);
		document.getElementById("task").value = ""
	}
}

function addElement(count){
	var wrap = document.getElementById("wrap");
	var wrap_inner = document.createElement("div");
	wrap_inner.setAttribute("id", "task_" + count);
	wrap_inner.setAttribute("class", "task_block");
	wrap.appendChild(wrap_inner);

	var item = document.createElement("p");
	item.setAttribute("id", "item" + count)
	item.setAttribute("class", "task_name");
	var task_text = document.getElementById("task").value;
	var node = document.createTextNode(task_text);
	item.appendChild(node);
	wrap_inner.appendChild(item);
	
	var delete_item = document.createElement("button");
	node = document.createTextNode("Delete");
	delete_item.setAttribute("onclick", "deleteItem(this.id)");
	delete_item.setAttribute("id", "delete_" + count);
	delete_item.setAttribute("class", "actionButton delete");
	delete_item.appendChild(node);
	wrap_inner.appendChild(delete_item);

	var complete = document.createElement("button");
	node = document.createTextNode("Complete");
	complete.setAttribute("onclick", "markComplete(this.id)");
	complete.setAttribute("id", "complete_" + count);
	complete.setAttribute("class", "actionButton complete");
	complete.appendChild(node);
	wrap_inner.appendChild(complete);

	var incomplete = document.createElement("button");
	node = document.createTextNode("Incomplete");
	incomplete.setAttribute("onclick", "markIncomplete(this.id)");
	incomplete.setAttribute("id", "incomplete_" + count);
	incomplete.setAttribute("class", "actionButton incomplete");
	incomplete.appendChild(node);
	wrap_inner.appendChild(incomplete);
	incomplete.style.display = "none";
}


function markComplete(id){
	var parent = document.getElementById(id).parentElement;
	var para = parent.getElementsByTagName("P");
	para[0].classList.add("completed");

	var but = parent.getElementsByTagName("button");
	but[1].style.display = "none";
	but[2].style.display = "inline";

}

function deleteItem(id){
	var parent = document.getElementById(id).parentElement.id;
	var wrap = document.getElementById("wrap");
	wrap.removeChild(document.getElementById(parent));
}

function clearList(){
	var wrap = document.getElementById("wrap");
	while (wrap.firstChild) {
    	wrap.removeChild(wrap.lastChild);
  	}

  	var sub_head = document.createElement("h2");
  	var node = document.createTextNode("Task");
  	sub_head.appendChild(node);
	wrap.appendChild(sub_head);
}

function markIncomplete(id){
	var parent = document.getElementById(id).parentElement;
	var para = parent.getElementsByTagName("P");
	para[0].classList.remove("completed");

	var but = parent.getElementsByTagName("button");
	but[1].style.display = "inline";
	but[2].style.display = "none";

}