const original = {
    a: 1,
    b: 2,
    c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

const { a, c } = original;
sinB = {a,c}
console.log(sinB);

valorDeC = c;
console.log(valorDeC);