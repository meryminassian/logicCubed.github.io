/*
  Maro Zohrabyan
  Find me on GitHub: https://github.com/MarZohrabyan
  e-mail: zohrabyanmaro@gmail.com
*/ 

const Background = {
    x: 0,
    y: 0,
    width: resolution.width,
    height: resolution.height,
    img: "",
    get img(){
        return this.img;
    },
    set img(URL){
        if(typeof(URL) !== "string"){
        return null; 
        }
        if(URL === "" ||  URL === null || URL === undefined){
            return null;
        }
        this.img = URL;
       
        return false;
    },
    draw: function(){
        context.drawImg(this.img(), this.x, this.y)
    }
}


//function background(URL){
// if(TypeOf(URL) !== "string"){
//    return null; 
// }
// if(URL === "" ||  URL === null || URL === undefined){
//     return null;
// }
//
// 
//
// return false;
//}
