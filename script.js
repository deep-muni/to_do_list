var count = 0;

function addToList(){
	
	count++;
	addElement(count);

}

function addElement(count){
	var wrap = document.getElementById("wrap");
	var wrap_inner = document.createElement("div");
	wrap_inner.setAttribute("id", "task_" + count);
	wrap.appendChild(wrap_inner);

	var item = document.createElement("p");
	item.setAttribute("id", "item" + count)
	var task_text = document.getElementById("task").value;
	var node = document.createTextNode(task_text);
	item.appendChild(node);
	wrap_inner.appendChild(item);
	
	var complete = document.createElement("button");
	node = document.createTextNode("Complete");
	complete.setAttribute("onclick", "markComplete(this.id)");
	complete.setAttribute("id", "complete_" + count);
	complete.appendChild(node);
	wrap_inner.appendChild(complete);

	var incomplete = document.createElement("button");
	node = document.createTextNode("Incomplete");
	incomplete.setAttribute("onclick", "markIncomplete(this.id)");
	incomplete.setAttribute("id", "incomplete_" + count);
	incomplete.appendChild(node);
	wrap_inner.appendChild(incomplete);
	incomplete.style.display = "none";

	var delete_item = document.createElement("button");
	node = document.createTextNode("Delete");
	delete_item.setAttribute("onclick", "deleteItem(this.id)");
	delete_item.setAttribute("id", "delete_" + count);
	delete_item.appendChild(node);
	wrap_inner.appendChild(delete_item);	
}


function markComplete(id){
	var parent = document.getElementById(id).parentElement;
	var para = parent.getElementsByTagName("P");
	para[0].classList.add("completed");

	var but = parent.getElementsByTagName("button");
	but[0].style.display = "none";
	but[1].style.display = "inline";

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
}

function markIncomplete(id){
	var parent = document.getElementById(id).parentElement;
	var para = parent.getElementsByTagName("P");
	para[0].classList.remove("completed");

	var but = parent.getElementsByTagName("button");
	but[0].style.display = "inline";
	but[1].style.display = "none";

}