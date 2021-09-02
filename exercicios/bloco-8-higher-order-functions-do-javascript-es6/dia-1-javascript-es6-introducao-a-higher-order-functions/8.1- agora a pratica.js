// exercicio 1 feito em aula
/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
 Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
 A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um 
 email no formato nome_da_pessoa@trybe.com . */
console.log('exericio 1');
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  
   const createPerson = (name) => {
    return {
      nomeCompleto: name,
      email: `${name}@trybe.com`,
    };
  }
const employees = newEmployees(createPerson);
console.log(employees);
console.log('//////////');
// exercicio 2.
/* Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo
como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua 
HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */
const sorteio = (aposta) => {
  let randomNumber = Math.random () * 5;
  let roundNumber = Math.round(randomNumber);
  console.log(`O número sorteado foi: ${roundNumber}`);
  if (roundNumber === aposta) {
    return 'Parabéns você ganhou';
    
  }
  else {
    return 'Tente novamente';
  }

}

console.log(sorteio(4));




