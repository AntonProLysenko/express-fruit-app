const React = require('react')//requiring react package after instaling express-react-view

class Show extends React.Component{
    render(){
        const {name, color, readyToEat} = this.props.vegetable

        //console.log(this.props);
        
        return(
            <div>
            <h1>Show Page</h1>
            
            <p>The {name} is {color} <br/>
            {readyToEat ? ' It is ready to eat': " It is not ready to eat"}</p>
            </div>
        )
    }// We can write javascript code within the curly brackets
}

module.exports= Show