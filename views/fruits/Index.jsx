const React= require('react')
const DefaultLayout = require ('../layout/Default')

class Index extends React.Component{
    render(){
        const { fruits } = this.props
        return(
            <DefaultLayout title = "Fruits Index Page Prop">
               
                <nav>
                    <a href="/fruits/new">Create new fruit</a>
                </nav>
                <ul>
                    {
                        fruits.map((fruit,index)=>{
                            return(
                                <li key = {index}>
                                    The{' '}
                                    <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
                                    {' '}
                                    is {fruit.color} <br/>
                                    {
                                        fruit.readyToEat ?"It is ready to eat"
                                        :'It is not ready'
                                    }
                                   <br />
                                   <form action={`/fruits/${fruit._id}?_method=DELETE`} method = 'POST'>
                                    <input type="submit" value='Delete'/>
                                   </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports= Index