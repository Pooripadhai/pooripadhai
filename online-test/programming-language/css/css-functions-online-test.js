// JavaScript Document
var no_of_questions=10;
var time_limit_in_secs=600;
var questions=[
"Which of the following function is used to blur the images by the filter property in CSS?",
"Which of the following function is used by the filter property for creating your own advance effects on DOM elements?",
"Which of the following function is used by the filter property for converting an element’s color to a shade of gray?",
"Which of the following function is used by the filter property for adjusting the brightness of an element’s color?",
"Which of the following function is used by the filter property for adjusting the difference between light and dark values?",
"Which of the following function is applied by the filter property for a saturation effect of an element’s color, making it appear more or less realistic?",
"Which of the following function represents a linear gradient as a CSS image?",
"Which of the following function is used by the filter property for flipping an element’s color?",
"Which of the following function is used by the filter property for applying a sepia tinge to an element’s color, typical of old photographs?",
"Which of the following function is used to represent a two-dimensional transformation in matrix format?",
];
var option=[
"scatter()"," blur()","opaque()","all of the mentioned",
"create()","DOM()","custom()","none of the mentioned",
"grayscale()","black()","shade()","brightness()",
"light()","dark()","brightness()","contrast()",
"dark()","brightness()","light()","contrast()",
"saturate()","saturation()","color()","none of the mentioned",
"image()","linear-gradient()","gradient()","grayscale()",
"invert()","contrast()","flip()","image()",
"contrast()","brightness()","sepia()","grayscale()",
"matrix3d()","matrix2d()","perspective","matrix()"
];
var correct_option=[
"B",
"C",
"A",
"C",
"D",
"A",
"B",
"A",
"C",
"D"
];
var explanation=[
"blur() provides a blur effect to an image. in this, if we assign large value then it will create more blur or if assign 0 or less value then no effect or less blur effect is provided.",
"custom() is used for advance effect on DOM elements.",
"grayscale() is a function that converts the input image to grayscale. The amount of the conversion can be specified as a number or a percentage. A value of 100% is completely grayscale, while a value of 0% leaves the input unchanged.",
"brightness() is a linear multiplier to the input image by making it appear brighter or darker. When the value under 100% it will darken the image, while a value over 100% brightens the image. A value of 0% will create an image that is completely black, while a value of 100% leaves the image unchanged.",
"contrast() is used to adjusts the contrast of the input image. when it is defined as 0% it will make the image completely black. when 100% (1) it provide the default or original input image. when the Values given over 100% will provide results with less contrast.",
"Saturation can be adjusted with number or percentage. A value of 100% saturation results in an image that's unchanged. A value of 0% saturation results in an image that's completely un-saturated.",
"The linear-gradient() CSS function creates an image consisting of a progressive change between two or more colors along with a straight line. To create a linear gradient you must define at least two colors.",
"The property assign value of 100% it is completely inverted, while a value of 0% leaves the input unchanged.",
"Sepia is a filter that is often used in photography software. A sepia filter produces a type of monochrome image in which the image appears in shades of reddish-brown.",
"matrix() creates a matrix from the given set of values.",
];