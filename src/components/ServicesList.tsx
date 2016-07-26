import * as React from 'react'

import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { Service } from '../documents/Service'

import ServiceItem from './ServiceItem'

export interface Props {
    services: Service[]
    onDelete: (id: string) => void
}

const style = {
  marginRight: '20px',
}

const ServicesList: React.StatelessComponent<Props> = ({ services, onDelete }) => {
    return (
        <div>
            <List>
                <Subheader>{__('My services')}</Subheader>
                {services.map(service => <ServiceItem key={service.id} service={service} onDelete={onDelete} />)}
            </List>
            <FloatingActionButton secondary={true} style={style}>
                <ContentAdd />
            </FloatingActionButton>
        </div>

    )
}

export default ServicesList