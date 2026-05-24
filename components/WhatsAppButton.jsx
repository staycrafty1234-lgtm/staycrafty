'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {

  return (
    <a
      href="https://wa.me/919820597827"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition"
    >
      <MessageCircle size={32} />
    </a>
  )
}
