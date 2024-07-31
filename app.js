//burada tüm butonları çağırıp btn ye atık
const btn = document.getElementsByTagName("button")
//burada ekran çaracak
const ekran = document.getElementById("ekran")
//burada ekranı çağırdık
const calc = document.getElementById("calculate")
//buraya c butoonunu çağırdık
const clear = document.getElementById("clear")
//for döngüsü ile 0dan başlayarak 16 ya kadar 1er artırarak dön
for(let i=0; i< 16; i++){
    //eğer 12 ve 14 eşit değilse çalışsın yani c ve =i ekranına çalışsın 
    if(i != 12 && i!= 14){
        //i o dan 15e kadar olabilir
        //burada butona tıkladında yaz fonksionu çalışacak
        btn[i].addEventListener("click",yaz)
    }
    
}
//bubutona basınca seçilibutondeğeri çalışacak
function yaz(){
ekran.value = ekran.value + this.value
}
//burada = basınca hesapla fonsionu çalışacak
calc.addEventListener("click",hesapla)

//bu fonksion çalışınca yazılan değerlerin eval ile hesaplayacak
function hesapla (){
    ekran.value = eval(ekran.value)
}

//buraya tıklanılınca cler fonksionu çalışacak
clear.addEventListener("click",sil)

//bu fonksion çalışınca budeğerler silinecek
function sil (){
    ekran.value = ""
}