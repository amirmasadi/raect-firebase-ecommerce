import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterListStyle = styled.div`
    a{
        color: var(--gray-1);
        transition: all 0.3s ease;
        &:hover{
            opacity: 0.7 ;
            transition: all 0.3s ease;
        }
    }
`;

export default function FooterList({children, footerli}) {
    return (
        <FooterListStyle>
            <h5 className="fw-bold">{children}</h5>
            <ul className="px-0">
                {footerli.map((li, index)=>{
                    return(
                    <li key={index} className="py-2">
                        {li.type === 'link' ? (
                            <Link to={li.path}>{li.text}</Link>
                        ) :(
                            <a href={li.path} target="_blank" rel="noreferrer">{li.text}</a>
                        )}
                    </li>
                    )
                })}
            </ul>
        </FooterListStyle>
    )
}
