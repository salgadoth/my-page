import LogoSvg from '../layout/Logo'
import Menu from './Menu'
import MenuItem from './MenuItem'

export default function TopBar(props: any) {
  return (
    <div
      className={`
        flex flex-wrap place-content-between
        bg-indigo
        h-20 absolute w-full
        `}
    >
      <div className="pl-10">
        <LogoSvg width={85} height={85} url="/" />
      </div>
      <div className="w-[40%]">
        <Menu>
          <MenuItem text="About" url="/about" />
          <MenuItem text="Experience" url="/experiences" />
          <MenuItem text="Projects" url="/projects" />
          <MenuItem text="Contact" url="/contact" />
          <MenuItem
            text="Resume"
            url="/resume"
            renderAs="button"
            target="_blank"
          />
        </Menu>
      </div>
    </div>
  )
}
