import Link from 'next/link'
import { FiTwitter, FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-secondary/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">🍸 Abishek Flair</h3>
            <p className="text-gray-400 text-sm">Master Bartending & Flair Bartending Learning Platform</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-secondary transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-secondary transition">Courses</Link></li>
              <li><Link href="/cocktails" className="hover:text-secondary transition">Cocktails</Link></li>
              <li><Link href="/flair" className="hover:text-secondary transition">Flair Tricks</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-secondary mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-secondary transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-secondary mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiYoutube size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiFacebook size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/30 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Abishek Flair Bartender Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
