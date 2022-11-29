const React= require('react')

class VgIndex extends React.Component{
    render(){
        const { vegetables } = this.props
        return(
            <div>
                <h1>Vegetables Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create new vegetable</a>
                </nav>
                <ul>
                    {
                        vegetables.map((vegetable,index)=>{
                            return(
                                <li key = {index}>
                                    The{' '}
                                    <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a>
                                    {' '}
                                    is {vegetable.color} <br/>
                                    {
                                        vegetable.readyToEat ?"It is ready to eat"
                                        :'It is not ready'
                                    }
                                   
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports= VgIndex