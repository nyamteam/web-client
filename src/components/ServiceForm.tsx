import * as React from 'react'

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import Service from '../documents/Service'

export interface Props {
    id?: number
    onAddService:  (title: string, description: string, price: number) => void
}

interface State {
    title: string
    description: string
    price: number
}

const style = {
    form: {
        maxWidth: 300,
        height: '100%',
        margin: 'auto'
    },
    input: {
        width: '100%'
    },
    actions: {
        height: 40
    }
}

export default class ServiceForm extends React.Component<Props, State> {
   
    private handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        this.props.onAddService(this.state.title, this.state.description, this.state.price)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={style.form}>
                <Card>
                    <CardTitle title={__('Add new service: ')} />
                    <CardText>
                        <TextField
                            floatingLabelText={__('Service title')}
                            value={this.state.title}
                            style={style.input}
                        />
                        <TextField
                            floatingLabelText={__('Service description')}
                            value={this.state.description}
                            style={style.input}
                        />
                        <TextField
                            floatingLabelText={__('Service price')}
                            value={this.state.price}
                            style={style.input}
                        />
                    </CardText>
                    <CardActions style={style.actions}> 
                        <FlatButton
                            label={__('Add Services')}
                            primary={true}
                            style={style.input}
                            type='submit'
                        />
                    </CardActions>
                </Card>
            </form>
        )
    }
}