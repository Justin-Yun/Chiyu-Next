import Link from 'next/link';

const Button = ({ text, route, className }) => {
  const buttonContent = (
    <Link href={route}>
      <button className={className}>
        {text}
      </button>
    </Link>
  )

  return buttonContent;
};

export default Button;