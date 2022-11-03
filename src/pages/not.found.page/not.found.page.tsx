import React, {FC} from 'react';

import './not.found.page.modules.scss'

const NotFoundPage:FC = () => {
    return (
        <div className={'error-container'}>
            <div>Sorry, this page not found</div>
            <div className={'smile-error-container'}>:(</div>
        </div>
    );
};

export default NotFoundPage;