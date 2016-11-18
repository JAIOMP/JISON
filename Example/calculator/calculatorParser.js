var parse = function(content){
    if(typeof content.left !== "number"){
        content.left = parse(content.left);
        return parse(content);
    }
    if(typeof content.right !== "number"){
        content.right = parse(content.right);
        return parse(content);
    }
    return eval(content.left + content.op +content.right);
};
exports.parse = parse;