## Ҫ�� 
    
- �½�main.js�ļ�����дһ��������ʵ�����¹��ܣ�����ĸ��˳���������Ĳ����ַ�����

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