/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/





// Define UI Variables  here 

 a=location.href
 b=location.protocol
 c=location.host
 d=location.port
 e=location.hostname
 f=navigator.appName
 g=navigator.appVersion
 h=navigator.platform
 i=navigator.language
 j=navigator.cookieEnabled
 k=screen.height
 l=screen.width
 m=screen.pixelDepth
 n=window.length
 o=window.state 
// Display the BOM Information on the innerHTML of the elements
x=document.querySelectorAll(".badge")
x[0].innerHTML=a
x[1].innerHTML=b
x[2].innerHTML=c 
x[3].innerHTML=d 
x[4].innerHTML=e 
x[5].innerHTML=f
x[6].innerHTML=g
x[7].innerHTML=h
x[8].innerHTML=i
x[9].innerHTML=j
x[10].innerHTML=k
x[11].innerHTML=l
x[12].innerHTML=m
x[13].innerHTML=n
x[14].innerHTML=o

