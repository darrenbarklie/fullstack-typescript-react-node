let literal: "daz" | "nghi" | "harley" | "popeye" = "harley";
literal = "daz";

literal = "john";
// Type 'john' is not assignable to type
// '"daz" | "nghi" | "harley" | "popeye"'

console.log(literal);

// Numerical literal is also possible in the same way
// with numbers instead of strings
