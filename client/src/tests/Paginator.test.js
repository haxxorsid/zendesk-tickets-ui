import React from 'react';
import renderer from 'react-test-renderer'
import Paginator from '../components/Paginator';

test('Should render PageSelector correctly with props', () => {
    const numberOfPages = [1, 2, 3, 4]
    const tree = renderer
        .create(<Paginator currentPage={1} numberOfPages={numberOfPages} />)
        .toJSON();
    expect(tree).toMatchSnapshot()
})

test('Should change current page on click', () => {
    const numberOfPages = [1, 2, 3, 4]
    const onPageChangeFn = jest.fn()
    const component = renderer
        .create(<Paginator currentPage={1} numberOfPages={numberOfPages} onPageChange={onPageChangeFn}/>)
    component.root.findAllByType('li')[1].props.onClick()
    expect(onPageChangeFn).toHaveBeenCalledWith(2)
})