class Speaker {
  private message: string;
  constructor(private name: string) {}

  get Message() {
    if (!this.message.includes(this.name)) {
      throw Error("message is missing speaker's name");
    }
    return this.message;
  }

  set Message(val: string) {
    let tmpMessage = val;
    if (!val.includes(this.name)) {
      tmpMessage = this.name + " " + val;
    }
    this.message = tmpMessage;
  }
}

const speaker = new Speaker("daz");
speaker.Message = "hello";
console.log(speaker.Message);

// => Accessors are only available when targeting
// ECMAScript 5 and higher.
// tsc --target "ES6" 12-getSet.ts
// => daz hello

// The `message` field is `private` and the `getter` and
// `setter` properties are `public`

// To practice good encapsulation, hide our field and only
// expose it when needed via getter and/or setter or a
// function that allows modification to the field

// When deciding on an access level to your members, start
// with the most restrictive and become less restrictive as
// required. By allowing access via accessors, we can
// do checks and modifications so that we retain ultimate
// control over what comes in and out of the class
