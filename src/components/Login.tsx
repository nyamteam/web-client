import * as React from 'react'

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RefreshIndicator from 'material-ui/RefreshIndicator'

export interface Props {
    isAuthenticating: boolean
    message: string
    onLogin: (username: string, password: string) => void
}

interface State {
    username: string
    password: string
    emailError?: string
    passwordError?: string
    message?: string
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
    },
    loading: {
        position: 'relative',
        margin: 'auto'
    },
    error: {
        color: '#cc0000'
    }
}

export default class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { username: '', password: '' }
    }

    private isValid() {
        return this.state.username && this.state.password
    }

    private handleUsernameChange = (event: React.FormEvent) => {
        const input = event.target as HTMLInputElement
        let emailError = ''
        if(input.value == '')
        {
            emailError = __('Email is required')
        }
        this.setState({ username: input.value, password: this.state.password, emailError: emailError })
    }
    
    private handlePasswordChange = (event: React.FormEvent) => {
        const input = event.target as HTMLInputElement
        let passwordError = ''
        if(input.value == '')
        {
            passwordError = __('Email is required')
        }
        this.setState({ username: this.state.username, password: input.value, passwordError: passwordError })
    }

    private handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        this.props.onLogin(this.state.username, this.state.password)
    }

    render() {
        let actions: JSX.Element
        if (this.props.isAuthenticating) {
            actions = (
                <RefreshIndicator
                    status='loading'
                    top={0}
                    left={0}
                    style={style.loading}
                />
            )
        } else {
            actions = (
                <FlatButton
                    label={__('Log In')}
                    primary={true}
                    disabled={!this.isValid()}
                    style={style.input}
                    type='submit'
                />
            )
        }
        return (
            <form onSubmit={this.handleSubmit} style={style.form}>
                <Card>
                    <CardTitle title={__('Log in to your account')} />
                    <CardText>
                        <TextField
                            floatingLabelText={__('Username')}
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            style={style.input}
                            errorText={this.state.emailError}
                        />
                        <TextField
                            floatingLabelText={__('Password')}
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            style={style.input}
                            type='password'
                            errorText={this.state.passwordError}
                        />
                    </CardText>
                    <CardText style={style.error}>{this.props.message}</CardText>
                    <CardActions style={style.actions}>{actions}</CardActions>
                </Card>
            </form>
        )
    }
}