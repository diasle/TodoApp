import React from 'react';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "foo",
                    "age": "20"
                },
                {
                    "id": 2,
                    "name": "bar",
                    "age": "15"
                },
                {
                    "id": 3,
                    "name": "di",
                    "age": "17"
                }
            ]
        }
    }

    render() {
     return (
         <div>
         <Header/>
         <table>
             <tbody>
             {this.state.data.map((person, i) => <TableRow key= {i} data={person}/>)}
             </tbody>
         </table>
     </div>
     );
    }
}

class Header extends React.Component {
    render () {
        return (
          <h1>Header</h1>
        );
}
}

class TableRow extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}


export default App;