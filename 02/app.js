
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę do tabliczki mnozenia!')


if(x>=1 && x<10){
for(let i=1; i <=9; i++){
    const result = x*i
    console.log(i + ' x ' + x + ' = ' + result)
}} else {
    alert('Podałeś błędne dane')
}


/* rozwiązanie z pętlą while  */
const a = prompt('Podaj liczbę jaką chcesz spotęgować!')
const n = prompt('Do której potęgi ma zostać wykonane działanie?')
if(a >=1 && n >= 0 && a<=100 && n <= 100){
    
    let iter = 0
    let info = ' '
    let result = 1    
        while (iter < n) {
    
        result = result * a
        if(iter > 0){
        info = info + ' x '
        }
        info = info + a
        
        iter++
    }
    console.log(info +  ' = ' + result)
}else{
    console.log('Podałeś liczby spoza zakresu')
}