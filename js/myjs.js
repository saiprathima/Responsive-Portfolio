
function collapseMenu(){
		var classToAdd = " nav";
		var otherClasstoAdd = " navbar-nav";
		var x = document.getElementById('menu');
		x.className = x.className.replace('breadcrumb','');
		x.className = x.className + classToAdd;
		x.className = x.className + otherClasstoAdd;
}
