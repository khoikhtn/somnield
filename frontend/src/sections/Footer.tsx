import { Container } from '@components'
import logo from '@assets/header/favicon.png';

const Footer = () => {
  return (
    <Container className="relative py-0 pt-15" widthClass="w-[70%]" background="bg-black">
      <div className="border-t border-gray-800 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <span className="text-xl font-semibold tracking-[0.2em] text-white/80 cursor-pointer">
            SOMNIELD
          </span>
        </div>

        <div className="flex space-x-6 text-sm">
          <p className="text-gray-400 hover:text-white transition-colors">
            Terms of Use
          </p>
          <p className="text-gray-400 hover:text-white transition-colors">
            Privacy Notice
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Footer

