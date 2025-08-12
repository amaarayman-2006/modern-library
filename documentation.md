# Documentation for Modern Library :

Thanks for using Modern Library. Make sure to give a feedback and report bugs.<br /><br />
N.B : Library CDNs are in a separate file


## CSS : 

Basically like bootstarp, you can utilize it by using the pre-made classes in modern.css file by linking it to the .html file.
<br /><br />
**Color pallette** : ( primary, secondary, success, fail, warning, info, light, dark, redLink, blueLink, basic ) for main colors and ( hprimary, hsecondary, hsuccess, hfail, hwarning, hinfo, hlight, hdark, hredLink, hblueLink, hbasic ) for hover color effects.
<br /><br />
**Div side paddings** : `.section-1` , `.section-2`, `.section-3`, `.section-full`
<br /><br />
**Buttons** : Must use 2 classes `.btn` and `.btn-color` -------> as : `class="btn btn-primary" `
        <br />*Available colors : all + .btn-block*
<br /><br />
**Outline buttons** : same as buttons but use `.btn-outline-color` instead of `.btn-color`
<br /><br />
**inputs** : `.input-s`, `.input-m`, `.input-l`, `.input-xl`, `.input-xxl`, `.input-max`
<br /><br />
**Fonts** : From `.f1` to `.f10`
<br /><br />
**Text Formats** : `.align-center`, `.align-right`, `.align-left`, `.f-left`, `.f-right`, `.underlined`, `.bold`, `.italic`

**Colors and backgrounds** : For colors use `.color` and for bgs use `.bg-color`

**Nav bar ( *still in progress* )** :<br /> `.nav-bar` to assign a nav bar element<br />
                                `.nav-main` to assign a main link / slogan in nav bar<br />
                                `.nav-item` to assign a nav item<br />
                                `.nav-text` to assign a text written inside a nav bar<br />
               *Available colors : `.nav-primary`, `.nav-secondary`, `.nav-success`, `.nav-light`, `.nav-dark`*
<br /><br />
**Link Navigator** : `.link-navigator` is used to assign a link navigator and `.link-navigator-item` is used to assign an item for the link navigator ( like breadcrumbs in bootstrap i guess)
<br /><br />
**Disclaimer** : all css codes still not coded to be fully responsive so expect some bugs / glitches on other monitors.
<br /><br />
## JS DOM :
This is used to ease the usage of dom properties of javascript as best as possible.<br /><br />
In order to use it, type it like this :          `dom.method1().method2();`
<br /><br />
Here the list of methods with its parameters ( if found ) :
<br /><br />
`locate(directory)` : to locate an element in the html file. Similar to `querySelector();` method. It's <ins>**essential**</ins> for the usage of many other methods.
<br /><br />
`extract(directory)` : to return the directory of an element
<br /><br />
`html(code)` : rewrites the inner HTML code of an element. Type it like :         `dom.locate(dir).html(code);`
<br /><br />
`text(txt)` : rewrites the text shown of an element ( if it is dislayed )
<br /><br />
`hide() and show()` : to display or hide an element
<br /><br />
`doElement(element, value)` **and** `appender(directory)` : use `doElement()` to create and html element with optionality of giving it a value and use `appender()` to attach this element to another element like a div or smth
<br /><br />
`doClass(value)` **and** `doId(value)` : to create a class / id <br />
`reClass(value)` **and** `reId(value)` : to change the value of a class / id <br />
`deClass()` **and** `deId()` : to remove class / id <br />
<br /><br />
`doAttr(attr, value)` : to make an attribute of an element with assigning its value<br />
`reAttr(attr, value)` : to change the value of a certain attribute<br />
`deAttr(attr)` : to remove a certain attribute<br />
<br /><br />
`contains(directory of an element)` : to display the contains of an element
<br /><br />
`style(css code)` : to add css code for an element. *HINT* : other styles must NOT be inline in order to function
<br /><br />
`extractStyle(directory)` : to return the css codes of an element
<br /><br />
<ins>Example</ins> :      `dom.locate("h1").text("Hello, world!");` -------> Here I located the h1 element and changed its text to "Hello, world!"
<br /><br />
## JS Maths :
More maths I guess .....
<br /><br />
In order to use type like this :            `maths.method();`<br /><br />

`range(n)` : basically like the range() function in python it returns an array containing numbers from 1 to n<br /><br />

`max(array)` **and** `min(array)` : returns the maximum and minimum values of an array<br /><br />

`add(n1, n2)` , `minus(n1, n2)` , `mult(n1, n2)` , `div(n1 , n2)` : self explanatory I guess .....<br /><br />

`sqrt(n)` : returns the square root of an element<br />
`cbrt(n)` : returns the cubic root of an element<br /><br />

`isEven(n)` : returns true if the number is even and false if not<br />
`isOdd(n)` : returns true is the number is odd and false if not<br />
`isPrime(n)` : returns true if the number is prime and false if not<br /><br />

`factorial(n)` : returns the factorial of a number<br /><br />

`toRadian(degree)` and toDegree(radian) : changes from radian to degree and vice versa<br /><br />

`addInv(n)` : finds the additive inverse of a number<br /><br />

`pythagoras(side1, side2, hypotenuse)` : finds the missing side of a triangle using pytagoras theorem. *HINT* : type the missing side value (null) while calling the method
<br /><ins>Example</ins> :     `maths.pythagoras(6, 8, null);`  -------------> it'll return 10

`secDegreeEq(a, b, c)` : finds the solution set of a second degree function and returns them a an array<br />
a : coefficient of x^2 <br />
b : coefficient of x <br />
c : absolute term <br />
*HINT* : if the solution of the equation is a complex number, it'll return an array of NaN ( Not a Number )<br /><br />

**Some trigonometric functions** : <br />
`sin(radian angle)`<br />
`cos(radian angle)`<br />
`tan(radian angle)`<br />
`sinh(radian angle)`<br />
`cosh(radian angle)`<br />
`tanh(radian angle)`<br /><br />

`approx(n)` : radian angleasically approximates a number to the nearest integer<br /><br />

**Some constants** :       `maths.pi;`    and     `maths.euler;`

