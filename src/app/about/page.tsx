import Header from '@/app/components/Header';
import Image from 'next/image';

export default function About() {
    return (
        <div className='min-h-screen bg-gray-100'>
            <Header />
            <main className='p-8'>
                <h2 className='text-3xl font-bold mb-4'>About Us</h2>
                <div className='flex flex-wrap'>
                    <p className='max-w-xl mb-4'>At Star Design 2, we are dedicated to providing exceptional interior design solutions that elevate your space. Our team of experts is passionate about creating beautiful and functional environments for our clients.</p>
                    <Image src='/about-design.jpg' alt='Interior Design Team' width={600} height={400} className='mb-4'/>
                </div>
            </main>
        </div>
    );
}