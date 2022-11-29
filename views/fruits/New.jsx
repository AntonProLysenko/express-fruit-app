const React = require('react')
const DefaultLayout = require ('../layout/Default')

class New extends React.Component{
    render(){
        return (
            <DefaultLayout title ='New Fruit Page'>
               
                <nav>
                     {/* NOTE: action will be the route, method will be the HTTP verb */}
                    <a href="/fruits">Fruit Home</a>
                </nav>
                <form action="/fruits" method ="POST">
                    Name:<input type="text" name ="name" />
                    <br />
                    Color:<input type="text" name ="color" />
                    <br />
                    Is ready to eat:<input type="checkbox" name ="readyToEat" />
                    <br />
                    <input type="submit" value = 'Create Fruit' />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New