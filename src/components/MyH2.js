import React from 'react'
import styled from 'styled-components';

const MyH2Style = styled.span`
    color: var(--gray-1);
    font-size: 2rem;
`;

export default function MyH2({children, className}) {
    return (
        <MyH2Style className={className}>
            {children}
        </MyH2Style>
    )
}
