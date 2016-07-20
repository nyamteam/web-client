import * as React from 'react'

import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import User from '../documents/User'

export interface Props {
    username: string
    user: User
    onLogout: () => void
}

const Home: React.StatelessComponent<Props> = ({ username, user, onLogout }, context) => {
    return (
        <AppBar
            title={__('Home')}
            iconElementRight={
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <span style={{
                        padding: 16,
                        color: context.muiTheme.palette.secondaryTextColor
                    }}>
                        {__('Logged In as')} <strong>{username}</strong>
                    </span>
                    <span style={{
                        padding: 16,
                        color: context.muiTheme.palette.secondaryTextColor
                    }}>
                        {__('Balance')} <strong>{user ? user.balance:null}</strong>
                    </span>
                    <Divider />
                    <MenuItem
                        primaryText={__('Log out')}
                        onClick={e => {
                            e.preventDefault()
                            onLogout()
                        }}
                    />
                </IconMenu>
            }
        />
    )
}

Home.contextTypes = { muiTheme: React.PropTypes.object.isRequired }

export default Home