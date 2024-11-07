import Header from '@/app/components/Header';

export default function Contact() {
    return (
        <div className='min-h-screen bg-gray-100'>
            <Header />
            <main className='p-8'>
                <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
                <form className='max-w-md'>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-sm font-semibold'>Name</label>
                        <input type='text' id='name' className='w-full border border-gray-300 p-2 rounded' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-sm font-semibold'>Email</label>
                        <input type='email' id='email' className='w-full border border-gray-300 p-2 rounded' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='message' className='block text-sm font-semibold'>Message</label>
                        <textarea id='message' rows={4} className='w-full border border-gray-300 p-2 rounded'></textarea>
                    </div>
                    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Send</button>
                </form>
            </main>
        </div>
    );
}