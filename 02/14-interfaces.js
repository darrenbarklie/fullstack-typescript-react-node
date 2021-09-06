// Use interfaces (aka contracts) to show only the
// signature of a type, as opposed to its internal
// workings. Having specific types for paramaters
// and return types enforces certain expectations
// between both the user and the creater of the
// interface; they act as strict rules about what
// can come out of and go into a type instance.
var nghi = {
    name: "nghi",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = nghi.id + "-" + nghi.name;
        if (!nghi.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(nghi.getUniqueId());
var daz = {
    name: "daz",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = daz.id + "-" + daz.name;
        if (daz.isManager) {
            return "mgr-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(daz.getUniqueId());
// Another possible use of interfaces is when using third-party
// APIs. It's tempting to use `any` throughout, but you should
// prefer providing a type where possible.
// If you receive JSON that is bloated beyond your requirements,
// create an interface that has only the fields that you need.
// Since TypeScript only cares about the shape of any given type,
// it will ignore the fields not mentioned, providing it receives
// what is expected.
// Be careful to handle `null` and `undefined` fields appropraitely.
