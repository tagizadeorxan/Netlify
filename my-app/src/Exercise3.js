import React from 'react';

class Exercise3 extends React.Component {
    state = { data: [], show: [], selection: 'none' };

    componentDidMount() {
        this.getData();
    }



    getData = () => {
        fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
            .then(data => data.json())
            .then(data => this.setState({ data, show: data }));
    }

    search = (e) => {
        let selection = document.getElementById("select").value;
        let newArray = [];

        let value = e.target.parentNode.childNodes[0].value;
        if (selection.length > 1 && value.length >= 1) {

            newArray = this.state.data.filter(user => user.name.substring(0, value.length).toLowerCase() === value.toLowerCase() && user.department === selection);
        } else if (value.length >= 1 && selection.length < 1) {

            newArray = this.state.data.filter(user => user.name.substring(0, value.length).toLowerCase() === value.toLowerCase());
        } else {

            newArray = this.state.data.filter(user => user.department === selection);
        }

        this.setState({ show: newArray });

    }



    render() {
        let { data, show } = this.state;

        return (
            <div>
                <input onChange={this.search} type="text" />
                <select onChange={this.search} id="select">
                    <option></option>
                    <option >Management</option>
                    <option>Recruitment</option>
                    <option>Security</option>
                </select>

                {
                    show.map(user =>
                        <div key={user.id} className="user">
                            <p>{user.name}</p>
                            <p>{user.department}</p>
                            <p>{user.role}</p>

                        </div>
                    )
                }

            </div>
        )
    }
}

export default Exercise3;