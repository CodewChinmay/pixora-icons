"use client"

import { useState, useEffect } from "react"
import { Profile, Message, Menu } from "pixora-icons"
import { Clipboard } from "lucide-react"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [copied, setCopied] = useState(false)
  const [modalTranslate, setModalTranslate] = useState("translate-y-full")

  const [importCopied, setImportCopied] = useState(false)

  // State for live usage editor
  const [usageSize, setUsageSize] = useState(130)
  const [usageColor, setUsageColor] = useState("white")
  const [usageCopied, setUsageCopied] = useState(false)

  const icons = [
    { name: "Profile", Component: Profile },
    { name: "Message", Component: Message },
    { name: "Menu", Component: Menu },
  ]

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const installCommand = "npm install pixora-icons"

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Reset live editor values when a new icon is selected
  useEffect(() => {
    if (selectedIcon) {
      setUsageSize(130)
      setUsageColor("white")
      // Trigger slide-up animation (delay for mount)
      setTimeout(() => setModalTranslate("translate-y-0"), 10)
    } else {
      setModalTranslate("translate-y-full")
    }
  }, [selectedIcon])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center w-full">
              Pixora Icons
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Start Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-100">Quick Start</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <p className="mb-4 text-gray-400">
                Install with your package manager:
              </p>
              <div className="relative group">
                <pre className="bg-gray-900/80 backdrop-blur-sm text-indigo-300 p-4 rounded-lg scrollbar-none font-mono border border-gray-700 transition-all duration-200 group-hover:border-indigo-500">
                  {installCommand}
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 p-2 bg-gray-800/50 hover:bg-indigo-500/10 rounded-lg text-gray-400 hover:text-indigo-300 transition-all"
                >
                  <Clipboard size={18} />
                </button>
                <div
                  className={`absolute top-12 right-3 px-3 py-1 bg-indigo-500 text-white text-sm rounded-md transition-opacity ${
                    copied ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Copied!
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-gray-400">Basic usage:</p>
                <pre className="bg-gray-900/80 backdrop-blur-sm text-green-400 p-4 rounded-lg font-mono border border-gray-700">
                  {`import { Home } from 'pixora-icons';

function App() {
  return <Home size={24} className="text-gray-400"/>
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Icon Showcase Section */}
          <section className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-100">
                Explore Icons
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search icons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-gray-200 placeholder-gray-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredIcons.map(({ name, Component }, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIcon({ name, Component })}
                  className="group flex flex-col items-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
                >
                  <Component className="w-10 h-10 text-gray-400 group-hover:text-indigo-300 transition-colors" />
                  <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-200">
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Icon Detail Modal */}
      {selectedIcon && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedIcon(null)}
          />
          {/* Modal Container */}
          <div
            className={`relative w-full md:max-w-2xl bg-gray-800/95 backdrop-blur-xl rounded-t-xl md:rounded-xl border border-gray-700 shadow-2xl transition-transform duration-300 ${modalTranslate} text-white`}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIcon(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-700/30 rounded-full transition-all"
            >
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-6 space-y-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{selectedIcon.name} Icon</h3>
              </div>

              {/* Interactive Preview */}
              <div className="relative group">
                <div className="flex justify-center p-8 bg-gray-900/50 rounded-xl border border-gray-700">
                  <selectedIcon.Component
                    size={usageSize}
                    color={usageColor}
                    className="transition-all duration-200 ease-out"
                  />
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs">{usageSize}px</span>
                  <div
                    className="w-4 h-4 rounded-sm border border-gray-700"
                    style={{ backgroundColor: usageColor }}
                  />
                </div>
              </div>

              {/* Live Editor Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm">
                    Size: {usageSize}px
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    value={usageSize}
                    onChange={(e) => setUsageSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm">Color</label>
                  <input
                    type="color"
                    value={usageColor}
                    onChange={(e) => setUsageColor(e.target.value)}
                    className="w-full h-10 p-0 border-0"
                  />
                </div>
              </div>

              {/* Separated Code Blocks */}
              <div className="flex flex-col gap-4">
                {/* Import Statement */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Import Statement</span>
                    <button
                      onClick={() => {
                        const importCode = `import { ${selectedIcon.name} } from 'pixora-icons';`
                        navigator.clipboard.writeText(importCode)
                        setImportCopied(true)
                        setTimeout(() => setImportCopied(false), 2000)
                      }}
                      className="flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Clipboard className="w-4 h-4 mr-2" />
                      {importCopied ? "Copied!" : "Copy Import"}
                    </button>
                  </div>
                  <pre className="relative p-4 bg-gray-900/80 rounded-lg border border-gray-700">
                    <code className="font-mono text-sm">
                      <span className="text-purple-400">import</span> {"{"}{" "}
                      <span className="text-indigo-400">
                        {selectedIcon.name}
                      </span>{" "}
                      {"}"}{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-400">'pixora-icons'</span>;
                    </code>
                  </pre>
                </div>

                {/* Component Usage */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Component Usage</span>
                    <button
                      onClick={() => {
                        const usageCode = `<${selectedIcon.name} size={${usageSize}} color="${usageColor}" />`
                        navigator.clipboard.writeText(usageCode)
                        setUsageCopied(true)
                        setTimeout(() => setUsageCopied(false), 2000)
                      }}
                      className="flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Clipboard className="w-4 h-4 mr-2" />
                      {usageCopied ? "Copied!" : "Copy Usage"}
                    </button>
                  </div>
                  <pre className="relative p-4 bg-gray-900/80 rounded-lg border border-gray-700">
                    <code className="font-mono text-sm">
                      &lt;
                      <span className="text-indigo-400">{selectedIcon.name}</span>{" "}
                      <span className="text-amber-400">size</span>={"{"}
                      <span className="text-blue-400">{usageSize}</span>
                      {"} "}
                      <span className="text-amber-400">color</span>="
                      <span className="text-green-400">{usageColor}</span>" /&gt;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bottom-0 fixed w-full border border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Pixora Icons.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
