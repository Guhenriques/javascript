// RECURSIVIDADE

function fatorial (n) {
  if (n == 1) { // se numero recebido for igual a 1
    return 1
  } else { // se nao for 1, o fatorial de um numero eh o numero X dele menos 1
    return n * fatorial(n-1) // fatorial chama ele mesmo
  }
}

console.log(fatorial(5))

/* 

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/