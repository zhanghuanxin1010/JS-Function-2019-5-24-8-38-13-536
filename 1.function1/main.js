## 要求 
    
- 新建main.js文件，编写一个函数，实现以下功能：将一个字符串逆序输出。

```
function reverseString(message){
  // wirte your code here
var a=message.length/2;
for(var i=0;i<a;i++);
 { 
  var t;
  t=message[i];
 message[i]=message[message.length];
message[message.length]=t;
}


}
reverseString('hello'); // should return 'olleh'
```
