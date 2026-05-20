export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 lg:px-20 py-28 bg-[#EFE7DD]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center">
          <span className="tracking-[5px] uppercase text-[#C89B63] text-sm">
            Contact
          </span>

          <h2 className="text-5xl lg:text-6xl font-serif mt-6 leading-tight">
            Let's Create Something Beautiful
          </h2>

          <p className="mt-8 text-[#5c5248] max-w-2xl mx-auto text-lg leading-9">
            Have a custom design in mind or want to place an order?
            Reach out directly through WhatsApp or Instagram.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Instagram */}
          <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500">

            <div className="w-16 h-16 rounded-full bg-[#F6F1EA] flex items-center justify-center text-3xl">
              📸
            </div>

            <h3 className="text-2xl font-serif mt-8">
              Instagram
            </h3>

            <p className="mt-4 text-[#6b6259] leading-8">
              Follow our handcrafted resin creations and latest launches.
            </p>

            <a
              href="https://instagram.com/staycrafty"
              target="_blank"
              className="inline-block mt-6 text-[#C89B63] font-medium hover:underline"
            >
              @staycrafty
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500">

            <div className="w-16 h-16 rounded-full bg-[#F6F1EA] flex items-center justify-center text-3xl">
              💬
            </div>

            <h3 className="text-2xl font-serif mt-8">
              WhatsApp
            </h3>

            <p className="mt-4 text-[#6b6259] leading-8">
              Connect directly for custom orders, pricing,
              and personalized resin artwork.
            </p>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="inline-block mt-6 text-[#C89B63] font-medium hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500">

            <div className="w-16 h-16 rounded-full bg-[#F6F1EA] flex items-center justify-center text-3xl">
              ✉️
            </div>

            <h3 className="text-2xl font-serif mt-8">
              Email
            </h3>

            <p className="mt-4 text-[#6b6259] leading-8">
              For collaborations, gifting inquiries,
              and business partnerships.
            </p>

            <a
              href="mailto:hello@staycrafty.com"
              className="inline-block mt-6 text-[#C89B63] font-medium hover:underline"
            >
              hello@staycrafty.com
            </a>
          </div>

        </div>

        {/* Bottom Message */}
        <div className="mt-24 text-center">

          <div className="inline-block bg-white px-10 py-6 rounded-full shadow-sm">

            <p className="text-[#5c5248] text-lg">
              ✦ Every StayCrafty piece is handmade with love and intention ✦
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}
