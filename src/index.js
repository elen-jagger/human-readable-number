module.exports = function toReadable (number) {
    const list = {
        0 : 'zero' ,
        1 : 'one' , 
        2 : 'two' ,
        3 : 'three' ,
        4 : 'four' ,
        5 : 'five' ,
        6 : 'six' ,
        7 : 'seven' ,
        8 : 'eight' ,
        9 : 'nine' ,
        10 : 'ten' ,
        11 : 'eleven' ,
        12 : 'twelve' ,
        13 : 'thirteen' ,
        14 : 'fourteen' ,
        15 : 'fifteen' ,
        16 : 'sixteen' ,
        17 : 'seventeen' ,
        18 : 'eighteen' ,
        19 : 'nineteen' ,
        20 : 'twenty' ,
        30 : 'thirty' ,
        40 : 'forty' ,
        50 : 'fifty' ,
        60 : 'sixty' ,
        70 : 'seventy' ,
        80 : 'eighty' ,
        90 : 'ninety' ,
    } ;   

    if ((number >= 0) && (number <= 20)) { return list[number]; }
    
    if ((number > 20) && (number < 100)) {
        let decade = (Math.floor(number / 10)) * 10;
        let unit = number % 10 ;

        if (unit === 0) { return list[decade]; }
        else { return list[decade] + ' ' + list[unit]; }
    } else {
        let hundreed = Math.floor(number / 100);
        let decade = (Math.floor((number % 100) / 10)) * 10;
        let unit = (number % 100) % 10;

        if (unit === 0) { 
            if (decade === 0) {
                return list[hundreed] + ' hundred';
          } else {
                return list[hundreed] + ' hundred ' + list[decade]; 
            }            
        }

        else if (decade < 10) {
            return list[hundreed] + ' hundred ' + list[unit];
        }

        else if (decade == 10) {
            let num = number % 100;
            return list[hundreed] + ' hundred ' + list[num];        
        } else {
            return list[hundreed] + ' hundred ' + list[decade] + ' ' + list[unit];
        }      
    }  
}
