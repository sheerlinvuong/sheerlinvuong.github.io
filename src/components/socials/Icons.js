import * as React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper } from './social.styles';

const IconPropTypes = {
  color: PropTypes.string,
  href: PropTypes.string || undefined
};

export const IconEmail = (props) => {
  return (
    <IconWrapper target="_blank" rel="noopener noreferrer" href={props.href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M0 3v18h24V3H0zm6.623 7.929L2 16.641V7.183l4.623 3.746zM2.482 5h19.035L12 12.713 2.482 5zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663l5.513-6.812zm9.208-1.264L22 7.183v9.348l-4.616-5.607z"
        />
      </svg>
    </IconWrapper>
  );
};
IconEmail.propTypes = IconPropTypes;

export const IconGithub = (props) => {
  return (
    <IconWrapper target="_blank" href={props.href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
          d="M16 .4C7.2.4 0 7.6 0 16.4c0 7.1 4.6 13.1 10.9 15.2.8.1 1.1-.3 1.1-.8v-2.7c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.7 1.3.1-1 .6-1.7 1-2.1-3.6-.4-7.3-1.8-7.3-7.9 0-1.7.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.4 1.6 1.3-.4 2.6-.5 4-.5s2.7.2 4 .5C23.1 6.6 24.4 7 24.4 7c.9 2.2.3 3.8.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9.6.5 1.1 1.5 1.1 3v4.4c0 .4.3.9 1.1.8C27.4 29.5 32 23.5 32 16.4c0-8.8-7.2-16-16-16z"
        />
      </svg>
    </IconWrapper>
  );
};
IconGithub.propTypes = IconPropTypes;

export const IconLinkedin = (props) => {
  return (
    <IconWrapper target="_blank" href={props.href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M30.7 0H1.3C.6 0 0 .6 0 1.3v29.3c0 .8.6 1.4 1.3 1.4h29.3c.7 0 1.3-.6 1.3-1.3V1.3C32 .6 31.4 0 30.7 0zM9.5 27.3H4.7V12h4.8v15.3zM7.1 9.9c-1.5 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8 1.5 0 2.8 1.2 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8zm20.2 17.4h-4.7v-7.4c0-1.8 0-4-2.5-4s-2.8 1.9-2.8 3.9v7.6h-4.7V12H17v2.1h.1c.6-1.2 2.2-2.5 4.5-2.5 4.8 0 5.7 3.2 5.7 7.3v8.4z"
        />
      </svg>
    </IconWrapper>
  );
};
IconLinkedin.propTypes = IconPropTypes;

export const IconMedium = (props) => {
  return (
    <IconWrapper target="_blank" href={props.href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 50 50"
      >
        <path
          fill="currentColor"
          d="M18 41.578c0 .89-.477 1.422-1.152 1.422-.239 0-.504-.066-.785-.207l-10.899-5.52C4.524 36.95 4 36.09 4 35.367V8.313c0-.715.379-1.137.922-1.137.191 0 .406.05.629.164l.383.195h.003l12.012 6.082c.02.012.035.031.051.047zM30.586 8.883l.734-1.207c.262-.43.742-.676 1.23-.676.114 0 .231.016.345.047.085.02.175.05.27.098l12.667 6.414c.004 0 .004.004.004.004l.012.003c.007.004.007.016.015.02.063.05.09.137.047.207L33.293 34.559l-1.29 2.117-8.358-16.371zM20 30.605V17.562l8.98 17.594-8.078-4.09zm26 10.973c0 .836-.496 1.313-1.227 1.313-.328 0-.703-.094-1.097-.293l-1.809-.918-8.078-4.09L46 17.496z"
        />
      </svg>
    </IconWrapper>
  );
};
IconMedium.propTypes = IconPropTypes;

export const IconTwitter = (props) => {
  return (
    <IconWrapper target="_blank" href={props.href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M32 6.1c-1.2.5-2.4.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6C25.7 3.8 24 3 22.2 3c-3.6 0-6.6 2.9-6.6 6.6 0 .5.1 1 .2 1.5-5.5-.3-10.3-2.9-13.6-6.9-.6 1-.9 2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 6.4-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2 2.8-.5 0-1.1 0-1.6-.1 3 1.8 6.5 2.9 10.2 2.9 12.1 0 18.7-10 18.7-18.7v-.8c1.2-1 2.3-2.1 3.2-3.4z"
        />
      </svg>
    </IconWrapper>
  );
};
IconTwitter.propTypes = IconPropTypes;

export const IconInstagram = (props) => {
  return (
    <IconWrapper target="_blank" href={props.href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M28.2 0H3.8C1.7 0 0 1.7 0 3.8v24.4C0 30.3 1.7 32 3.8 32h24.4c2.1 0 3.8-1.7 3.8-3.8V3.8C32 1.7 30.3 0 28.2 0zM24 4h3c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm-8 5.9c3.4 0 6.2 2.7 6.2 6.1 0 3.4-2.8 6.1-6.2 6.1-3.4 0-6.2-2.7-6.2-6.1.1-3.4 2.8-6.1 6.2-6.1zM28 29H4c-.6 0-1-.4-1-1V13h4c-.5.8-.7 2.1-.7 3 0 5.4 4.4 9.7 9.7 9.7 5.4 0 9.7-4.4 9.7-9.7 0-.9-.1-2.3-.8-3h4v15c.1.6-.3 1-.9 1z"
        />
      </svg>
    </IconWrapper>
  );
};
IconInstagram.propTypes = IconPropTypes;
