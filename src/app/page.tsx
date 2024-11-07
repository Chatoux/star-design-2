import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
    return (
        <div className='min-h-screen bg-white'>
            <Header />
            <main className='p-8'>
                <section className='flex justify-center items-center'>
                    <div className='text-center max-w-2xl'>
                        <h1 className='text-4xl font-bold mb-4'>Welcome to Star Design 2</h1>
                        <p className='text-lg mb-6'>Transforming your space with exceptional interior design expertise.</p>
                        <Image src='/hero-design.jpg' alt='Sophisticated Design' width={800} height={400} className='mx-auto mb-4'/>
                        <a href='/services' className='text-blue-500 hover:text-blue-700 hover:underline'>Explore Our Services</a>
                    </div>
                </section>
            </main>
        </div>
    );
}