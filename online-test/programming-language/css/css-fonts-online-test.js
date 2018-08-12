// JavaScript Document
var no_of_questions=10;
var time_limit_in_secs=600;
var questions=[
"Identify from the following which value is supposed to be a slightly bolder weight in font attribute?",
"Identify from the following which property allows the spaces between the c",
"Identify from the following which is not a value for the font-style property?",
"Identify from the following which value specifies whether the user agent is allowed to synthesize oblique or bold font faces when a font family lacks bold or italic faces?",
"Identify from the following which is used to selects a normal, or small-caps face from a font family?",
"Identify from the following which is not an appropriate value for the font-variant property?",
"Identify from the following which property adjusts the font-size of the fallback fonts defined with font-family so that the x-height is the same no matter what font is used?",
"Identify from the following which allows you to expand or condense the widths for a normal, condensed, or expanded font face?",
"Identify from the following which font-size-adjust is the value used in calculating the size of the fallback fonts?",
"'In font attribute, font-style comes first and than font-weight'.State true or false.",
];
var option=[
"lighter","dark","emphasize","light",
"font-style","font-variant","font-family","font-kerning",
"oblique","italic","normal","none of the above",
"font-weight","font-kerning","font-synthesis","font-variant",
"font-variant","font-synthesis","font-kerning","font-weight",
"default","inherit","small-caps","large-caps",
"font-size-adjust","font-adjust","font-size-fallback","default",
"font-style","font-expand","font-stretch","none of the mentioned",
"count","auto","number","none",
"False","True","Both","none"
];
var correct_option=[
"A",
"D",
"D",
"C",
"A",
"D",
"A",
"D",
"C",
"A"
];
var explanation=[
"lighter gives the lighter characters and makes the font slightly bolder.",
"Kerning defines the space between the letters.",
"oblique, italic and as well as normal are used as a value for font-style property.",
"font-synthesis property controls which are the missing typefaces, bold or italic which may be synthesized by the browser. Fonts used for Chinese, Japanese, Korean and other logographic scripts tend not to include these variants.",
"font-variant as its name self-explain the meaning variant of fonts.",
"In font-variant there is no value for large-caps as we use uppercase or capitalize for letters.",
"font-size-adjust property gives developers the ability to set the font-size of an element depending on the size of its lowercase letters, rather than the uppercase letters.",
"None of the above mention do all. font-stretch can do some of the part but not all.",
"The specified number is usually the aspect ratio of the first-choice font.",
"It is not a correct statement because the correct Syntax is stated as:<br>font: font-weight font-style font-variant font-size/line-height font-family",
];