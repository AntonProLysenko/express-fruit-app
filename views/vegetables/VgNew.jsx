const React = require('react')

class VgNew extends React.Component{
    render(){
        return (
            <div>
                <h1>New Vegetable Page</h1>
                <nav>
                    <a href="/vegetables">Vegetable Home</a>
                </nav>
                <form action="/vegetables" method ="POST">
                    Name:<input type="text" name ="name" />
                    <br />
                    Color:<input type="text" name ="color" />
                    <br />
                    Is ready to eat:<input type="checkbox" name ="readyToEat" />
                    <br />
                    <input type="submit" value = 'Create Vagatable' />
                </form>
            </div>
        )
    }
}

module.exports = VgNew