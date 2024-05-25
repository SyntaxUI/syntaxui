import Image from 'next/image'

const navigation = {
  connect: [
    { name: 'Book Meeting', href: '' },
    {
      name: 'Twitter',
      href: 'https://twitter.com/justansub',
    },
    {
      name: 'Github',
      href: 'https://github.com/ansub',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ansub',
    },
  ],

  company: [
    { name: 'Blogs', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Affiliate Partner', href: '/' },
    { name: 'AI For Enterprise', href: '/' },
  ],

  quick: [
    { name: 'About', href: '/' },
    { name: 'Team', href: '/' },
    { name: 'Contact', href: '/' },
    { name: 'Issues', href: '/' },
  ],

  legal: [
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms', href: '/' },
    { name: 'Code of Conduct', href: '/' },
    { name: 'License', href: '/' },
  ],

  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/ansub',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ansub',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ansub',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

const FourColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full max-w-7xl"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Image
                priority={true}
                unoptimized={true}
                width={100}
                height={40}
                src="/images/syntaxUI.svg"
                alt="logo"
                className="m-0 h-7 w-auto"
              />
              <h1 className="my-auto text-2xl">SyntaxUI</h1>
            </div>
            <p className="text-md mt-0 max-w-xs leading-6 text-gray-700">
              Not your average component library - build faster, launch sooner.
            </p>
            <div className="flex space-x-6 text-sm text-gray-700">
              <div>Made with ❤️ by Ansub.</div>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-8 grid grid-cols-2 sm:gap-14 md:grid-cols-4 lg:mt-0 lg:grid-cols-4 xl:col-span-2">
            <div>
              <h3 className="m-0 text-sm font-semibold leading-6 text-gray-900">
                Connect
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="m-0 text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item: any) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-0">
              <h3 className="m-0 text-sm font-semibold leading-6 text-gray-900">
                Quick Links
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.quick.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mt-5 sm:mt-0">
                <h3 className="m-0 text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center border-t border-gray-900/10 pt-4 sm:justify-between">
          <p className="m-0 text-xs leading-5 text-gray-700">
            &copy;
            {new Date().getFullYear()} SyntaxUI. All rights reserved.
          </p>
          <div className="mt-5 flex justify-center space-x-6 sm:mt-0">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon && (
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FourColumnFooter
