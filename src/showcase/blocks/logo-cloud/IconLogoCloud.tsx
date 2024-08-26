const logos = [
  {
    name: 'Hume AI',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1724242869/hume-ai_sxfeu8.svg',
  },
  {
    name: 'Supabase',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1724242819/supabase_bdbnvy.svg',
  },
  {
    name: 'Apple',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1724242912/apple_dark_wixhyc.svg',
  },
  {
    name: 'Asana',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1724243064/asana-logo_ulshgt.svg',
  },
  {
    name: 'DigitalOcean',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1724243142/digitalocean_werjgx.svg',
  },
  {
    name: 'Github',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1724243168/github-dark_u5eygu.svg',
  },
  {
    name: 'Linear',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1724243194/linear_dtq4zq.svg',
  },
  {
    name: 'Loom',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1724243196/loom_ehvtka.svg',
  },
]

const StaticLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
        <div className="font-medium">Trusted by Companies like</div>
        <div className="grid grid-cols-3 gap-x-4 md:grid-cols-5 lg:grid-cols-8">
          {logos.map((logo, key) => (
            <img
              key={key}
              src={logo.url}
              className="h-7 w-12 px-2 brightness-0 dark:invert"
              alt={`${logo.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StaticLogoCloud
