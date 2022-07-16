import Link from 'next/link';

export default function Navigation() {

  const navLinks = [
    {name: "Home", path: "/"},
    {name: "Logs", path: "logs"},
    {name: "Status", path: "status"},
  ]

  return (<div className="navigation flex my-2 justify-center">
    {navLinks.map(el => 
      <Link href={el.path}>
        <a className='m-3 bg-none hover:text-primary'>{el.name} </a>
      </Link>)}
  </div>)
}
