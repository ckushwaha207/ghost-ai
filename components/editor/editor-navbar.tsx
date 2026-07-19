import { PanelLeftOpen, PanelLeftClose } from "lucide-react"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onSidebarToggle: () => void
}

export function EditorNavbar({ isSidebarOpen, onSidebarToggle }: EditorNavbarProps) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex h-14 items-center justify-between border-b border-border bg-card px-4">
      {/* Left section */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={onSidebarToggle}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          className="flex size-8 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="size-5" />
          ) : (
            <PanelLeftOpen className="size-5" />
          )}
        </button>
      </div>

      {/* Center section (reserved for future use) */}
      <div className="flex flex-1 items-center justify-center" />

      {/* Right section (empty for now) */}
      <div className="flex items-center" />
    </nav>
  )
}
