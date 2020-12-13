import React from 'react';

interface ButtonProps {
  text: string;
  color?: 'primary' | 'alternative' | 'success' | 'warning' | 'danger';
  onClick: () => void;
}

export default function Button({
  color = 'primary',
  text,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-${color}-800 hover:bg-${color}-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-800`}
    >
      {text}
    </button>
  );
}
