// JavaScript Document
var selecti = document.getElementById('change-language');
var newLanguage = new changeLanguage();
newLanguage.init();
function changeLanguage(){
	var parent = document.getElementById('add-language');
	this.init = function(){
		that.selectedPart = document.createElement('div');
		that.selectedPart.className='lang-change';
		parent.appendChild(that.selectedPart);
		that.selectedPart.onclick = isDropDown ? that.hideDropDown:that.showDropDown;
	}	
	
}