// PascalCasing
function Message() {
  // JSX: JavasScript XML --> Gets compiled to javascript
  const name = 'Tommy';
  if(name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello World!</h1>;
}

export default Message;
