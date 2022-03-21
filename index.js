function saturdayFun(activity= 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(work='go to the office') {
    return `This Monday, I will ${work}.`;
};

function wrapAdjective(highlight = "*") {
    return function (inner = "a hard worker") {
        return `You are ${highlight}${inner}${highlight}!`;
    };
}

wrapAdjective()();
wrapAdjective("||")("a dedicated programmer");