class FirstClass{
varable1:number;
name1:string;

    constructor(number2:number,name2:string) {
this.varable1=number2;  
this.name1=name2;
    }

    show(){
        console.log(`${this.varable1} this is number ${this.name1} this is my name`);
    }
}

let obj = new FirstClass(5,"Niho");
obj.show();