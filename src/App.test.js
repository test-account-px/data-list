import React from 'react';
import App, {unCamelCase, ObjectToList} from './App';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

// const unCamelCase = require('./App');
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('should capitalize separate the word based on Camel Case', () => {
  
   expect(unCamelCase("camelCase")).toBe("Camel Case");
  
})

it(' should display values in object as list', () => {

  var obj = {
    'georgeWashington': 1789,
    'johnAdams': 1796
    }
    var output = [{"key":"georgeWashington","value":1789},
                  {"key":"johnAdams","value":1796}]
expect(ObjectToList(obj)).toEqual(output)

})
