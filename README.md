What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
---
Ans: getElementById("id") → Selects and returns one element by its unique id.

getElementsByClassName("class") → Returns a live HTMLCollection of all elements with that class.

querySelector("selector") → Returns the first element that matches a CSS selector.

querySelectorAll("selector") → Returns a static NodeList of all elements matching a CSS selector.

------

How do you create and insert a new element into the DOM?
---
Ans: const paragraph = document.createElement("p");  
    paragraph.innerText = "Hello";  
document.body.appendChild(paragraph); 

-------

What is Event Bubbling and how does it work?
---
Ans: Event bubbling means if you click a child element, the event also triggers on its parent elements, moving upward in the DOM.

--------

What is Event Delegation in JavaScript? Why is it useful?
----
Ans: Improves performance by using less memory.
Simplifies code, especially for dynamically added elements.

-------

What is the difference between preventDefault() and stopPropagation() methods?
---
Ans: preventDefault() → stops default browser action.
stopPropagation() → stops event bubbling.

--------
