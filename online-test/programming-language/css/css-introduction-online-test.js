// JavaScript Document
var no_of_questions=10;
var time_limit_in_secs=600;
var questions=[
"What is the full form of CSS?",
"What h1 represents for in CSS?",
"What are the following attributes which help to apply style on HTML element?",
"What does “color: red” can be represented in CSS?",
"What does “font-size” represent in CSS?",
"Which tag can be used to apply css in html web pages?",
"Which selector is used to specify a rule to connect with a particular unique element?",
"Text, list, box, margin, border, color, and background properties can be implemented by which of the following languages?",
"Which of the selectors is used to specify a group of elements?",
"Ideally, you should have only One h1 tag on a web page. State true or false."
];
var option=[
"Cascading Style Sheets","Cascade Sheets Style","Color Style Sheets","Cascade Style Sheet",
"Selector","Value","Attribute","Tag",
"class","Selector","id","both class and id",
"Rule","Declaration","Selector","None of the above",
"Property","Property-Name","Selector","Rule",
"&ltcss&gt","&ltstyle&gt","&lt!DOCTYPE html&gt","&ltscript&gt",
"tag","id"," class","both class and tag",
"CSS","HTML","Ajax","PHP",
"class","tag","id","both class and tag",
"False","True","Both","None of above"
];
var correct_option=[
"A",
"A",
"D",
"B",
"B",
"B",
"B",
"A",
"A",
"B"
];
var explanation=[
"CSS stands for Cascading Style Sheets. CSS is a design language used to style and layout web pages. It is an extension to basic HTML that allows you to style your web pages.",
"h1 is the selector which tells the browser about the element you want to change.",
"Class is used to apply style on a group of elements while Id attribute is used to style an specific or unique element.",
"color: red represents as a declaration because it contains CSS property name and a value which is separated by a colon.",
"font-size represents property-name as it is used to increase or decrease the size of a font such as xx-small,x-small,small,medium,large,x-large ,xx-large,smaller, larger,percentage ,inherit.",
"The <style> tag is used to define style information for an HTML document. Inside the <style> element you specify how HTML elements should deliver on a browser.",
"CSS ID selector matches an element based on the value of its id attribute. The selected element's ID attribute must match exactly the value given in the selector. ID selector is a name preceded by a hash character (“#”).",
"Cascading Style Sheets implements all the properties to provide an HTML website more interactive look.",
"The CSS class selector matches elements based on the contents of their class attribute. A class selector is a name preceded by a full stop (“.”)",
"The main purpose of &ltH1&gt tags on the website was telling search crawlers about the importance of those headings. Most of the SEO specialists find it as a better practice to include other keywords in &ltH2&gt tags. This is also regarded as a ranking factor while doing onsite SEO."
];