const React = require('react')


class DefaultLayout extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/app.css" /> {/*Here we don't have to give a path to  public folder */}
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = DefaultLayout