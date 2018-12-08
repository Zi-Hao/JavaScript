function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for(var i=0;i<headers.length;i++){
        elem = getNextElement(headers[i].nextSibling);
        elem.style.fontweight;
        elem.style.fontSize;
    }
}
//获取下一个元素节点
function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}