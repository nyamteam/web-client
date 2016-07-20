import * as React from 'react'

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'

export interface Props {
    errorMessage: string
}

const Error: React.StatelessComponent<Props> = ({ errorMessage }, context) => {
    return (
        <Card>
            <CardTitle title={__('Application error')} />
            <CardText>{__('Application crash')}</CardText>
        </Card>
    )
}

export default Error