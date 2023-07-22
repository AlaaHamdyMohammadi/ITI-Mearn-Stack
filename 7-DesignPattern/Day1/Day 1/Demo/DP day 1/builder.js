class Course{
    constructor(obj){
      this.name=obj.name;
      this.sales=obj.sales;
      this.isFree=obj.isFree;
      this.isCampain=obj.isCampain;
      this.price=obj.price;
    }
}

// var javascriptCourse=new Course("javascript",200,false,true,5000)

class CourseBuilder{
    constructor(name,sales,isFree=true,isCampain=false,price=0){
        this.name=name;
        this.sales=sales;
        this.isFree=isFree;
        this.isCampain=isCampain;
        this.price=price;
    }
    makePaid(price){
         this.price=price;
         this.isFree=false
         return this
    }

    makeCampain(){
        this.isCampain=true
        return this
    }

    build(){
        return new Course(this)
    }
}

var htmlCourse=new CourseBuilder("html",300).makePaid(3000).makeCampain().build()
console.log(htmlCourse);
// htmlCourse.makePaid(3000)
// htmlCourse.makeCampain()
// console.log(htmlCourse.build()); 