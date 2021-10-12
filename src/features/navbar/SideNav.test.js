import React from 'react';
import {render, screen} from '@testing-library/react'
import SideNav from './SideNav.js'

describe('SideNav', ()=>{
    describe('render nav links', ()=>{
        it('should render the closet link', ()=>{
            render(<SideNav />)
            const closet = screen.getByText('closet')
            expect(closet).toBeInTheDocument()
        })
    })
})