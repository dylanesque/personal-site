import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Michael Caveney</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | This site is based off a template made by
          by{' '}
          <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
            Smakosh
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
