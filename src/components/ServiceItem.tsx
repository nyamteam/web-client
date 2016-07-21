import * as React from 'react'

import {ListItem} from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Service from '../documents/Service'

export interface Props {
    service: Service
}

const ServiceItem: React.StatelessComponent<Props> = ({ service }) => {
    const iconButtonElement = (
        <IconButton
            touch={true}
            tooltip="{__('more'}"
            tooltipPosition="bottom-left"
        >
            <MoreVertIcon />
        </IconButton>
    )
    const rightIconMenu = (
        <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem>{__('Edit')}</MenuItem>
            <MenuItem>{__('Delete')}</MenuItem>
        </IconMenu>
    )

    return (
        <ListItem
            key={service.id}
            rightIconButton={rightIconMenu}
            primaryText={service.title}
           	secondaryText={service.description}
        />
    )
}

export default ServiceItem