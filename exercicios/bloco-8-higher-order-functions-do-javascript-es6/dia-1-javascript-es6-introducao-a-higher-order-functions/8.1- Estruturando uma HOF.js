const doingThings = (callback) => console.log(callback);


const wakeUp = () => {
  return 'Acordando!!';
}
const breakFast = () => {
  return 'Bora tomar café!!';
}
const toSleep = () => {
  return
}

// Ao chamar a função doingThings:
doingThings(breakFast());

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!