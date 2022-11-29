const React = require('react')//requiring react package after instaling express-react-view
const DefaultLayout = require ('../layout/Default')

class Show extends React.Component{
    render(){
        const {name, color, readyToEat} = this.props.fruit

        //console.log(this.props);
        
        return(
            <DefaultLayout title ={`${name[0].toUpperCase()+ name.slice(1)} Show page`}>
            
            
            <p>The {name} is {color} <br/>
            {readyToEat ? ' It is ready to eat': " It is not ready to eat"}</p>
            <a href={`/fruits/${this.props.fruit._id}/edit`}>Edit</a>
            </DefaultLayout>
        )
    }// We can write javascript code within the curly brackets
}

module.exports= Show