//js document
var lightbox1 = new lightBox();
lightbox1.init();
function lightBox(){
	var that = this;
	this.plusButton;
	this.parent;
	this.imageLocation;
	this.init = function(){
		that.plusButton = document.getElementById("light-box-icon");
		that.parent = (document.getElementsByClassName("top-content")[0]);
		that.imageLocation =  this.plusButton.parentNode.attributes.href.value;
		/*activate of the light box on click*/
		this.plusButton.onclick = function(){
			var productImageBackgroundDiv = document.createElement("div");
			productImageBackgroundDiv.className = "light-box-background";
			that.parent.appendChild(productImageBackgroundDiv);
			/*creation of the background-light-box*/
			var productImageDiv = document.createElement("div");
			productImageDiv.className = "light-box";
			that.parent.appendChild(productImageDiv);
			/*include of the image on the lighbox*/
			var productImage = document.createElement("img");
			productImage.setAttribute("src",that.imageLocation);
			(productImageDiv).appendChild(productImage);
			/*creation of the lighbox close button*/
			var crossButton = document.createElement("div");
			crossButton.className="light-box-cross-button";
			that.parent.appendChild(crossButton);
			/*action after click on the crossButton*/
			crossButton.onclick=function(){
				that.parent.removeChild(productImageBackgroundDiv);
				that.parent.removeChild(productImageDiv);
				that.parent.removeChild(crossButton);
			}
						
			return false;
		}
	}
}
