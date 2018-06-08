/* Task 1 */

var i = process.argv[2];    // исходное число
var a = +process.argv[3];   // исходная система счисления
var b = +process.argv[4];   // конечная система счисления

if (Math.min(a,b)>=2 & Math.max(a,b)<=36)  //если параметры соответсвуют условию
{
    // для начала приведем число в нормальный вид (десятичная система)
    var rn = 0;
    var rnMax = 0;
    
    rn = ConvToNumber(i.toUpperCase(),a);
    
    //приверим получившееся число 
    if (rn>=0 & rn<=10000){
        var out = "";
        if (rn==0){
            out="0";  
        } else { 
        //Теперь пересчитаем в необходимую 
            while (rn>0){
                var _o = (rn%b)+48;  //получили цифру
                if (_o>57) _o=_o+39; //если это буква  
                out = String.fromCharCode(_o)+out;
                rn  = Math.trunc(rn/b) ;
            }
        }
        console.log(out);
    } else {
        console.log("0 <= i >= 10000 - не соблюдается");
    }
} else                        // параметры не подходят по условию 
{
  if (a<2 | a>36)            //условие для переменной a
  {
    console.log('2<= a <= 36 - не соблюдается');
  }
  if (b<2 | b>36)            //условие для переменной b
  {
    console.log('2<= b <= 36 - не соблюдается'); 
  }
}

function ConvToNumber( m,s ) {
    var buffer = new Buffer(m, 'ascii');
    res= 0;
    for (var i = 0; i<buffer.length;i++){
        if (buffer[i]>=48 & buffer[i]<=57){
            res=res*s+buffer[i] - 48;
        } else {
            if (buffer[i]>=65 & buffer[i]<=90){
                res=res*s+buffer[i] - 55;
            } else res = -1
        }
    }
    //console.log(res)
    return res;
}
