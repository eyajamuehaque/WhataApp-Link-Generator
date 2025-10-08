"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function WhatsAppGenerator() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [generatedLink, setGeneratedLink] = useState("")
  const [copied, setCopied] = useState(false)

  const generateLink = () => {
    const cleanPhone = phoneNumber.replace(/\D/g, "")

    if (!cleanPhone) {
      return
    }

    const encodedMessage = encodeURIComponent(message)
    const link = `https://api.whatsapp.com/send?phone=${cleanPhone}${message ? `&text=${encodedMessage}` : ""}`

    setGeneratedLink(link)
    setCopied(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const openLink = () => {
    if (generatedLink) {
      window.open(generatedLink, "_blank")
    }
  }

  return (
    <Card className="relative overflow-hidden rounded-2xl border-2 border-green-500/30 bg-slate-900/50 p-[2px] shadow-2xl shadow-green-500/20 backdrop-blur-xl">
      <div className="rounded-[calc(1rem-2px)] bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-6 md:p-8 backdrop-blur-xl">
        <div className="space-y-6">
         
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold text-green-300">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g., 8801756419781 (with country code, no + or spaces)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-2 border-slate-700 bg-slate-950/50 text-white transition-all placeholder:text-slate-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
            <p className="text-xs text-slate-400">
              Include country code without + symbol. Example: 8801756419781 for Bangladesh
            </p>
          </div>

          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold text-purple-300">
              Pre-filled Message (Optional)
            </Label>
            <Textarea
              id="message"
              placeholder="e.g., Hi, I'm interested in your services..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="resize-none border-2 border-slate-700 bg-slate-950/50 text-white transition-all placeholder:text-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
            <p className="text-xs text-slate-400">This message will be pre-filled when the chat opens</p>
          </div>

         
          <Button
            onClick={generateLink}
            disabled={!phoneNumber}
            className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-semibold shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            size="lg"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            Generate WhatsApp Link
          </Button>

         
          {generatedLink && (
            <div className="space-y-4 rounded-xl border-2 border-green-500/40 bg-gradient-to-br from-green-950/40 via-emerald-950/30 to-teal-950/40 p-5 shadow-lg shadow-green-500/10 backdrop-blur-sm">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-green-300">Generated Link</Label>
                <div className="flex items-center gap-2">
                  <Input
                    value={generatedLink}
                    readOnly
                    className="flex-1 border-2 border-slate-700 bg-slate-950/70 text-white"
                  />
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="icon"
                    className="shrink-0 border-2 border-green-500/40 bg-slate-950/50 text-green-400 transition-all hover:border-green-500 hover:bg-green-500/20 hover:text-green-300"
                  >
                    {copied ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </Button>
                </div>
                {copied && (
                  <p className="flex items-center gap-1 text-sm font-medium text-green-400">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Link copied to clipboard!
                  </p>
                )}
              </div>

             
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  onClick={openLink}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-md shadow-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/40 hover:scale-[1.02]"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Open in WhatsApp
                </Button>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="flex-1 border-2 border-purple-500/50 bg-gradient-to-r from-purple-950/50 to-pink-950/50 text-purple-300 font-semibold shadow-md shadow-purple-500/20 transition-all hover:border-purple-500 hover:bg-purple-500/20 hover:text-purple-200 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy Link
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
