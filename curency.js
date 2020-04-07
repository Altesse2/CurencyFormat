/*
@param amount : the amount to be converted to curency;
@param curencySymbol: the curency Symbol exple: $
@return a String of the amount formated into curency
*/
    
  this.Curency =  function(amount, curencySymbol) {
    
    this.curencySymbol = curencySymbol;

    this.amountString = "";

    let trimer = function(str){
        //separate the decimal part and the int part.

        let decimalPosition = str.indexOf(".");

        let strTrimed = str.slice(0, decimalPosition);

        let decimalPoint= str.slice( decimalPosition, str.length );

        let arr =[strTrimed, decimalPoint]
        
        console.log(arr);

        return arr;
    }

    let commaAdder= function(str){

        let format = "";
 
         let formatReturned = "";
 
        let counter = 0;
        // add the comma to the string starting from the right
     for (let i = str.length; i > 0 ; i--) {
    
         format += str[i-1];
 
         counter += 1;
 
         if (counter % 3 == 0) {
 
             format += ",";
 
         };

        }

        //the result is inverted

        // to turn. another for loop to turn it back to normal with the comma
         for (let i = format.length; i > 0; i--) {
 
             formatReturned += format[i-1];
 
         }
         return formatReturned;
     
         
    }


        this.getDecimalFormat = function () {
            let str = "" + amount + ""; 

                this.amountString = trimer(str);

            let format = commaAdder(this.amountString[0]);

                    format = format + this.amountString[1];

                    format = this.curencySymbol + format;

                    return format;
        }
            

          
        this.getIntegerFormat = function () {

           let str = "" + amount + ""; 

          let format = this.curencySymbol + commaAdder(str);

               // format = this.curencySymbol + format;
            
                return format  ;
                  
               }
   
    
}

