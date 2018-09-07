import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import './style.css';

export function unCamelCase(val) {
   return val.replace(/([a-z])([A-Z])/g, '$1 $2')
		.replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
		.replace(/^./, function(str){ return str.toUpperCase(); })
}
export function ObjectToList(obj){
      let list = [];
      for (let key in obj) {
        list.push({ key: key, value: obj[key]});
      }
      return list;
   }
  //  module.exports = unCamelCase;




export class ListValues extends React.Component {
  constructor(props) {
    super(props);
    let items =  {'georgeWashington': 1789,
     'johnAdams': 1796,
     'thomasJefferson': 1800,
     'jamesMadison': 1808,
     'jamesMonroe': 1812,
     };

   let list = ObjectToList(items);
  
    this.state = {
      list: list,
      selectedIndex: null,
    }
  
  }


  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
             Key Value List
          </Typography>
            <div style={{ flex: '1 1 0px' }} />
          </Toolbar>
        </AppBar>
        {this.state.list.length < 1 && 
          this.getEmptyComponent()
        }
        <List className="list" component="nav">
          {
            this.state.list.map((item, i) => {
              return (
                <ListItem key={item.key}>
                  <ListItemText primary={unCamelCase(item.key)} ></ListItemText>
                  <ListItemText className="side" secondary={item.value}></ListItemText>
                </ListItem>
              )
            })
          }
        </List>   
      </div>
    );
  }
}

export default ListValues;
