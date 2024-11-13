
import ThemeToggler from './theme-switch'

export default function Header() {
  return (
    <div className="h-12 w-full bg-background-1 flex justify-center sticky top-0">
        <div className="container max-w-[1300px] flex justify-end">
            <ThemeToggler />
        </div>
    </div>
  )
}
