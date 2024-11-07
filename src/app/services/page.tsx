import Header from '@/app/components/Header';
import Image from 'next/image';

export default function Services() {
    return (
        <div className='min-h-screen bg-white'>
            <Header />
            <main className='p-8'>
                <h2 className='text-3xl font-bold mb-4'>Our Services</h2>
                <div className='flex flex-wrap'>
                    <div className='max-w-lg'>
                        <p className='mb-4'>We offer a range of services to cater to all your interior design needs, from residential to commercial spaces. Our comprehensive solutions include planning, design, and execution.</p>
                        <Image src='/services-design.jpg' alt='Design Service' width={600} height={400} className='mb-4'/>
                    </div>
                </div>
            </main>
        </div>
    );
}