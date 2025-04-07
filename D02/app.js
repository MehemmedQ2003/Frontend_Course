HTMLElement.prototype.changePrototype = function(width, height, color){
    this.setAttribute("style", "width:" + width + "px; height:" + height + "px; background-color:" + color);
}