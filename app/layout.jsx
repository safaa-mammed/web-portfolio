import '@/styles/globals.css'
import Nav from '@/components/Nav';

export const metadata = {
    title: "My Portoflio",
    description: 'Learn more about Safaa Kunhi Mammed'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main '>
                {/* <div className='gradient'/> */}
            </div>
            <main>
                <Nav/>
                <div className='flex items-center justify-center transition-opacity duration-50 '>
                    {children}
                </div>
            </main>
        </body>
    </html>
  );
}

export default RootLayout;