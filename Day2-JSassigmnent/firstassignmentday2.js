        //Assignment
        // create two variables and perform all the operators
        // learned today

        // operators
        // binary (operation perform in two data) a+b
        // arithmetic operators + - * / %
        // assignment operators (use to pass values
        // and work from right to left) = += -= /= %=


        // arithmetic operators
        var a = 20;
        var b = 21;
        r     = a + b;
        re    = a - b;
        res   = a * b;
        resu  = a / b;
        resul = a % b;
        console.log(r);
        console.log(re);
        console.log(res);
        console.log(resu);
        console.log(resul);
        
        // assignment operators
        var c = 20;
        var d = 21;
        c +=10;
        d /= 10;
        // resul = c %= 10;
        console.log(c);
        console.log(d);

        // comparison operators == != < > <= >=
        var i = 20;
        var j = 21;
        console.log(i == j);
        console.log(i != j);
        console.log(i < j);

        // identity operators === !== 
        var k = 20;
        var l = "20";
        console.log(k!==l);

        //conditional operators && || !
        var number1 = 20;
        var number2 = 21;

        console.log(number1<number2 && number2>number1);
        console.log(!(number1<number2));
        console.log(!(number1<number2 && number2>number1))

        // unary
        var num6 = 9;
        var num7 = num6++;
        num6++;
        console.log(num6);
        console.log(num7, num6);
