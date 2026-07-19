import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { X, Plus } from "lucide-react"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={`fixed top-14 bottom-0 left-0 z-40 flex w-64 transform flex-col border-r border-border bg-card transition-transform duration-200 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h2 className="text-sm font-semibold text-foreground">Projects</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sidebar"
          className="flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
        <TabsList variant="line" className="px-4 pt-2">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="flex-1 px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            No projects yet
          </p>
        </TabsContent>

        <TabsContent value="shared" className="flex-1 px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            No shared projects
          </p>
        </TabsContent>

        {/* New Project button */}
        <div className="border-t border-border p-4">
          <Button variant="secondary" className="w-full justify-start">
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </Tabs>
    </aside>
  )
}
