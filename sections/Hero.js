import Button from '../components/Button'

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">
        I'm{' '}
        <span className="bg-gradient-to-r from-[#8f94fb] to-[#4e54c8] bg-clip-text text-8xl text-transparent dark:font-extrabold">
          Halid
        </span>
      </h1>
      <h3 className="my-3 text-4xl">I am Web Designer</h3>
      <p className="mb-8 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{' '}
      </p>

      <a href="mailto:imhalid@icloud.com">
        <Button className="bg-emerald-700 text-white hover:bg-emerald-600">
          Hire Me!
        </Button>
      </a>
    </section>
  )
}

export default Hero
