
import "./globals.css";


export const metadata = {
  title: "GOFS Technology",
  description: "gofs technology is a software development company that provides software development services, web development services, mobile app development services, and digital marketing services. We are a team of experienced software developers, web developers, mobile app developers, and digital marketers who are passionate about building high-quality software products and delivering exceptional services to our clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
