export var actionTypesMapping = {
    CATCH: "CATCH",
    DOG: "DOG",
    RESET: "RESET"
};
export var onCatch = function (id) {
    return { type: actionTypesMapping.CATCH, id: id };
};
export var onReset = function () {
    return { type: actionTypesMapping.RESET };
};
export var onDog = function () {
    return { type: actionTypesMapping.DOG };
};
//# sourceMappingURL=actions.js.map