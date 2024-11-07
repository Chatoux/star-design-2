import Link from 'next/link';

export default function Header() {
    return (
        <header className='bg-gray-900 text-white p-4'>
            <nav className='flex justify-between items-center max-w-4xl mx-auto'>
                <div className='text-lg font-bold'>Star Design 2</div>
                <ul className='flex space-x-4'>
                    <li><Link href='/'><a className='hover:text-blue-400'>Home</a></Link></li>
                    <li><Link href='/about'><a className='hover:text-blue-400'>About</a></Link></li>
                    <li><Link href='/services'><a className='hover:text-blue-400'>Services</a></Link></li>
                    <li><Link href='/contact'><a className='hover:text-blue-400'>Contact</a></Link></li>
                </ul>
            </nav>
        </header>
    );
}