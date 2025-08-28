1) 
With Get getElementById we get one single element having the exact id.

With getElementsByClassName we are able to get all of the elemets having the same class name this is returned in HTMLCollection

With querySelector we get the first element with the CSS selector, so if there are multiple with same selector we get the first one

With querySelectorAll we get all the matching elements with the selector in a NodeList


2)
To Create and insert a new element in a dom first we need to create it with document.createElement
then we need to append it where we want. if we already have a container then first we need to get that container by class
or id or the best method for that case then append it there. or simply we can append it in body.

example code

'''
let div = document.createElement("div");  
div.textContent = "Hello";  
document.body.appendChild(div); 
''' 

3)
Event bubling is a Dom Event. Here when there is some event is trigerred in the child it goes up to its parents and upwards till reaching the document itself. With this we can have a parent respond to a event for  their child.

4)
Event Delegation is mainly taking advantage of this event bubbling. As if there is event triggered in child its parents also know about it
So instead of adding event listeners to each child element  we add a single listener on the parent.So  When a child triggers an event, the parents  can  respond on behalf of the child.

In this way we need to use way less eventlisteners makingour code more fast and readable.


5)

There are some default behaviors of events like if we have a button inside a form it automatically submits and reloads the page
by adding preventDefault we are exactly doing what the name suggests preventing the default bevaiour of that particular event


StopPropagation stops the vent from bubbling up or down. this can be useful if we have seperate things need to happen on the same event
For example in this Assignment when we click heart icon the count goes up nothing else happpens as there are no other clickhandlers.
But if we also wanted the whole card to increase a count when clicked then clicking the heart would trigger both the hearts counter and the cards counter.

So to stop this we’d use stopPropagation on the heart click so only the hearts count increases nothing else.