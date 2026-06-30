# Event Handling In React
## What Are Events?
   - Events are Actions or occurrences that happens in the browser.
   - click on button, submitting a form, pressing key, or scrolling a page.

## Syntax 
  ```
  1. onClick, onChange ( React events are named using camelCase)
  2. Event handlers are passed as function(not strings, unlike in plain HTML)
```

```

1. Mouse Events:
onClick, onDoubleClick, onMouseEnter, onMouseLeave, OnMouseMove, onMouseDown, onMouseUp, onMouseOver, onMouseOut

2. Keyboard Events:
  onKeyDown, onKeyUp, onKeyPress,
3. Form Event:
  onChange, onSubmit, onFocus, onBlur, onReset
4. Input Events:
   onInput, onInvalid
5. Clipboard Events:
    onCopy, onCut, onPaste.
6. Touch Events:
    onTouchCancel, onTouchStart, onTouchMove, onTouchEnd

```

### Event Delegation 
 - Recat uses a form of event delegation by attaching event listeners at the root of the DOM tree.

 ```
 <button onClick={handle}> click me</button>
 
 ```