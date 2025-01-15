export const selectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'hsla(var(--overlay), 1)',
    outline: '0px solid hsla(var(--accent-3), 1)',
    border: '1px solid transparent',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '0.75rem',
    padding: '0 0.75rem',
    height: '42px',
    fontSize: '16px',
    color: 'hsla(var(--secondary), 1)',
    boxShadow: 'none',
    minWidth: '200px',
    '&:hover': {
      border: '1px solid hsla(var(--accent), 1)',
    },
    ...(isFocused
      ? {
          border: '1px solid hsla(var(--accent), 1)',
          outline: '2px solid hsla(var(--accent-3), 1)',
        }
      : {}),
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: 'hsla(var(--secondary), 1)',
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: 'hsla(var(--overlay), 1)',
    borderRadius: '0.75rem',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.04)',
    marginTop: '8px',
    width: '100%',
    padding: '2px',
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    color: 'hsla(var(--secondary), 1)',
    fontSize: '16px',
    padding: '8px',
    borderRadius: '0.5rem',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'hsla(var(--primary), 1)',
  }),
}
