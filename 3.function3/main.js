## 要求 
    
- 新建main.js文件，编写一个函数，实现以下功能：按字母表顺序输出传入的参数字符串。

```
function alphabetSort(message){
  // wirte your code here
var n=message.length;
for(var i=0;i<n;i++)
{
 if(message[i+1]<message[i])
{
   var t;
  t=message[i+1];
message[i+1]=message[i];
message[i]=t;
}

}


}
alphabetSort('hello'); // should return 'ehllo'
```