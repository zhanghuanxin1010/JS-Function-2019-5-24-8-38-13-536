## Ҫ�� 
    
- �½�main.js�ļ�����дһ��������ʵ�����¹��ܣ���һ���ַ������������

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
