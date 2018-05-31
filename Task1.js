/* Task 1 */
var i = process.argv[2];    // исходное число
var a = +process.argv[3];   // исходная система счисления
var b = +process.argv[4];   // конечная система счисления

if (Math.min(a,b)>=2 & Math.max(a,b)<=36)  //если параметры соответсвуют условию
{
    // для начала приведем число в нормальный вид (десятичная система)
    var rn = 0;
    for (var n=0; n<i.length; n++)
    {
        var _i = i.charCodeAt(n)-48;
        if (_i>9) _i = _i-39;
        if (_i>=a){
            console.log("чило i не соответсвует исходной системе счисления")
            return;
        }
        rn = rn*a + _i;
    }
    console.log(rn);
    //приверим получившееся число 
    if (rn>=0 & rn<=10000){
        //Теперь пересчитаем в необходимую
        var out = "";
        while (rn>0){
            var _o = (rn%b)+48;
            if (_o>57) _o=_o+39;
            out = String.fromCharCode(_o)+out;
            rn  = Math.trunc(rn/b) ;
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