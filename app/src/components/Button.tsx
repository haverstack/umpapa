import { ComponentChild, h } from 'preact';

const Button = (props: { color?: string; isSubmit?: boolean; children: ComponentChild }) => {
  const color = props.color ? props.color : 'red';
  const type = props.isSubmit ? 'submit' : 'button';
  return (
    <button
      type={type}
      className={`inline-flex justify-center mt-2 px-4 py-2 text-sm text-${color}-900 bg-${color}-100 border border-transparent rounded-md hover:bg-${color}-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-${color}-500`}
    >
      {props.children}
    </button>
  );
};

export default Button;
