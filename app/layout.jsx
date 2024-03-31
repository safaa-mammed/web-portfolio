import '@/styles/globals.css'
import Nav from '@/components/Nav';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                {/* <div className='gradient'/> */}
            </div>
            <main>
                <Nav/>
                <div className='flex items-center justify-center '>
                    {children}
                </div>
            </main>
        </body>
    </html>
  );
}

export default RootLayout;