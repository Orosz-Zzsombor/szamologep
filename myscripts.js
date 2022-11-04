function gomb(jel)
{
    var a = parseFloat(document.getElementById('szam1').value);
    var b = parseFloat(document.getElementById('szam2').value);
    if (jel=="+")
    {
        document.getElementById('eredmeny').innerHTML = a+b;
    }
    else if(jel=="-")
    {
        document.getElementById('eredmeny').innerHTML = a-b;
    }
    else if(jel=="*")
    {
        document.getElementById('eredmeny').innerHTML = a*b;
    }
    else
    {
        document.getElementById('eredmeny').innerHTML =a/b;
    }
}

