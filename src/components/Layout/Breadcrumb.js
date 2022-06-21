import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import routes from '../../routes/MenuList';

const upperFirstWord = (s) => 
{
    if (typeof s !== 'string') return ''
    let item = s.charAt(0).toUpperCase() + s.slice(1)
    let anotherArray = item.split("/")

    if (anotherArray.length >= 2)
    {
        for (let i = 0; i < anotherArray.length; i++)
        {
            if (anotherArray[i] !== undefined)
            {
                item = anotherArray[i].charAt(0).toUpperCase() + anotherArray[i].slice(1)
            }
            else
            {
                return item
            }
        }
    }
    else if (anotherArray.length === 1)
    {
        for (let i = 0; i < anotherArray.length; i++)
        {
            if (anotherArray[i] !== undefined)
            {
                let arrayBread = anotherArray[i].split("-")
                if (arrayBread.length === 1) return item
                let arrayBreadOther = arrayBread[1].charAt(0).toUpperCase() + arrayBread[1].slice(1)
                item = arrayBread[0].concat(" "+arrayBreadOther)
            }
        }
    }

    return item
}

const breadcrumbNameMap = (url) => {
    for (let i = 0; i < routes.length; i++) {
        let route = routes[i]
        if (url === route.url) {
            return route.title
        }
    }
    return upperFirstWord(url.replace("/", ""));
};

const BreadcrumbComponent = withRouter(props => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        let baseUrl = pathSnippets.slice(0, index + 1);
        const url = `/${baseUrl.join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap(url)}</Link>
            </Breadcrumb.Item>
        );
    });

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/directory"><Icon type="home" />&nbsp;Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <React.Fragment>
            <Breadcrumb style={{ background: '#fff' }}>{breadcrumbItems}</Breadcrumb>
        </React.Fragment>
    );
});

export default BreadcrumbComponent;