class Foo{
    constructor(_a, _b, _c){
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }
    A(){
        this.a = "a";
        console.log(this.a);
    }

    B(){
        this.b = "b";
        console.log(this.b);
    }
    
    C(){
        this.c = "c";
        console.log(this.c);
    }
}
    
let obj= new Foo();
obj.A();
obj.B();
obj.C();



// HTMLElement.prototype.changeBgColor = function(color){
//     this.setAttribute("style", "background-color: " + color);
// }