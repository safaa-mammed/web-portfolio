import '@/styles/globals.css'
import Nav from '@/components/Nav';
import Script from 'next/script';
// import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
    title: "My Portoflio",
    description: 'Learn more about Safaa Kunhi Mammed'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <head>
            {/* <!-- Google Tag Manager --> */}
        <Script defer id="gtm-script" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5G5MWNB2');
        `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        </head>
        <body>
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5G5MWNB2"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}
            <div className='main '>
                {/* <div className='gradient'/> */}
            </div>
            <main>
                <Nav/>
                {/* <GoogleTagManager gtmId="GTM-5G5MWNB2"/> */}
                <div className='flex items-center justify-center transition-opacity duration-50 '>
                    {children}
                </div>
            </main>
        </body>
    </html>
  );
}

export default RootLayout;