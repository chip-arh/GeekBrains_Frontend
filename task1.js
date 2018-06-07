/* Task 1 */

var i = process.argv[2];    // исходное число
var a = +process.argv[3];   // исходная система счисления
var b = +process.argv[4];   // конечная система счисления

if (Math.min(a,b)>=2 & Math.max(a,b)<=36)  //если параметры соответсвуют условию
{
    // для начала приведем число в нормальный вид (десятичная система)
    var rn = 0;
    var rnMax = 0;
    var iMax = "10000"
    for (var n=0; n<iMax.length; n++)
    {
        var _i = ConvToNumber(iMax[n]);
        rnMax = rnMax*a + _i;
    }
    for (var n=0; n<i.length; n++) 
    {
        var _i = ConvToNumber(i[n]);
        if (_i>=0 & _i<a){
            rn = rn*a + _i;    
        } else{
            console.log("чило i не соответсвует исходной системе счисления")
            return;
        }
    }
    //приверим получившееся число 
    if (rn>=0 & rn<=rnMax){
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

function ConvToNumber( m ) {
    for (var n=0; n<=9; n++)
    {
        if ((n+48)==(m.charCodeAt(0)))
            return n;
    }
    for (var n=10; n<=36; n++)
    {
        if ((n+87)==(m.charCodeAt(0)))
            return n;
    }
    return -1;
}
