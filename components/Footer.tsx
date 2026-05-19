export default function Footer() {
  return (
    <footer className="border-t border-[#e7ddd0] bg-[#F6F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-serif text-[#C89B63]">
              StayCrafty
            </h2>

            <p className="mt-5 text-[#6b6259] leading-8">
              Luxury handcrafted resin décor made with elegance,
              creativity, and soul.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-serif mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-[#6b6259]">
              <li>
                <a
                  href="#shop"
                  className="hover:text-[#C89B63]"
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#C89B63]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#reviews"
                  className="hover:text-[#C89B63]"
                >
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#C89B63]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-5">
              Connect
            </h3>

            <div className="space-y-3 text-[#6b6259]">

              <p>
                Instagram:
                <span className="ml-2 text-[#C89B63]">
                  @staycrafty
                </span>
              </p>

              <p>
                WhatsApp Orders Available
              </p>

              <p>
                hello@staycrafty.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#e7ddd0] mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[#7a7269] text-sm">
            © 2026 StayCrafty. All rights reserved.
          </p>

          <p className="text-[#C89B63] text-sm tracking-wide">
            Handcrafted With Love ✦
          </p>

        </div>

      </div>
    </footer>
  )
}
