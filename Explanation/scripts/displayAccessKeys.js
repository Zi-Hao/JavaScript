function displayAccessKeys(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false; //判断是否可用
    var links = document.getElementsByTagName("a");  //获取所有链接
    var akeys = new Array();  //创建一个数组，保存访问键
    for(var i=0; i<links.length; i++){  //遍历链接
        var current_link = links[i];
        if(!current_link.getAttribute("accesskey")) continue;//如果没有accesskey属性，继续循环
        var key = current_link.getAttribute("accesskey");//取得accesskey值
        var text = current_link.lastChild.nodeValue;//取得链接文本
        akeys[key] = text;
    }
    var list = document.createElement("ul")//创建ul
    for(key in akeys){  //遍历访问键
        var text = akeys[key];
        var str = key + ": "+text;//创建放到列表项中的字符串
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);//创建列表项
        list.appendChild(item);//把列表项添加列表中
    }
    var header = document.createElement("h3");  //创建标题
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);  //把标题添加到页面主体
    document.body.appendChild(list);  //把列表添加到页面主体
}
addLoadEvent(displayAccessKeys);
