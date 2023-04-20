const xmlString =`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
const parser= new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");


const listNode = xmlDOM.querySelector("list");
const nameNode = listNode.querySelector("name");
const firsteNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");

const studentNode = listNode.querySelector('list > student:last-child');
const nameNode2 = studentNode.querySelector('name');
const firsteNode2 = studentNode.querySelector("first");
const secondNode2 = studentNode.querySelector("second");
const ageNode2 = studentNode.querySelector("age");
const profNode2 = studentNode.querySelector("prof");

const langAttr = nameNode.getAttribute('lang');
const langAttr2 = nameNode2.getAttribute('lang');

const result = {
 
    list:[
        {name:`${firsteNode.textContent} ${secondNode.textContent}`,age: Number(ageNode.textContent), prof: profNode.textContent, lang: langAttr},
        {name:`${firsteNode2.textContent} ${secondNode2.textContent}`,age: Number(ageNode2.textContent), prof: profNode2.textContent, lang: langAttr2}
    ]
};



console.log('result', result);




