## Ҫ�� 
    
- �½�main.js�ļ�����дһ��������ʵ�����¹��ܣ��ж�һ���ַ����Ƿ��ǻ��Ĵ��������ģ�һ���ַ�����ǰ����ʹӺ������һ�������磺abcba���ǻ��Ĵ�����

```
function palindrome(message){
  // wirte your code here
var m=message.length;
for(var i=0;i<m/2;i++)
{
  if(message[i]!==message[m-i])
return false;

  }
else 
{return true;}


}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
```
