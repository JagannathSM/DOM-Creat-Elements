function label_creat(labeltag,attri,attrival,content){
    var out = document.createElement(labeltag);
    out.setAttribute(attri,attrival);
    out.innerHTML = content;
    return out;
}
function break_creat(){
    var b = document.createElement("br");
    return b;
}
function input_creat(inputtag,attri1,attri1val,attri2,attri2val){
    var out = document.createElement(inputtag);
    out.setAttribute(attri1,attri1val);
    out.setAttribute(attri2,attri2val);
    return out;
}


document.body.append(label_creat("label","for","first","FirstName:"));
document.body.append(break_creat());
document.body.append(input_creat("input","type","text","id","first"));
document.body.append(break_creat());
document.body.append(label_creat("label","for","middle","MiddleName:"));
document.body.append(break_creat());
document.body.append(input_creat("input","type","text","id","middle"));
document.body.append(break_creat());
document.body.append(label_creat("label","for","last","LastName:"));
document.body.append(break_creat());
document.body.append(input_creat("input","type","text","id","last"));
document.body.append(break_creat());
document.body.append(label_creat("label","for","email","Email:"));
document.body.append(break_creat());
document.body.append(input_creat("input","type","email","id","email"));
document.body.append(break_creat());
document.body.append(label_creat("label","for","add","Address:"));
document.body.append(break_creat());
document.body.append(input_creat("input","type","text","id","add"));
document.body.append(break_creat());
document.body.append(break_creat());
document.body.append(label_creat("button","type","button","Submit"));