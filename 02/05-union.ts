let unionObj: null | { name: string } = null;
unionObj = { name: "daz" };

console.log(unionObj);
// => { name: 'daz' }

// The `unionObj` var is declared to be of the
// `null` type OR { name: string } type, using
// the pipe character: |
