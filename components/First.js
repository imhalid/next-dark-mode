import Button from '../components/Button'
import classNames from '../lib/classNames'

const First = () => {
  return (
    <section className="mt-16">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
        I'm{' '}
        <span
          className={classNames(
            'bg-gradient-to-r from-[#8f94fb] to-[#4e54c8] bg-clip-text text-4xl text-transparent dark:font-extrabold',
            ' md:text-5xl lg:text-7xl'
          )}
        >
          Halid
        </span>
        .
      </h1>

      <p className="my-4  w-11/12 md:my-8  md:w-4/6 lg:w-11/12 lg:max-w-screen-sm  ">
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

export default First
