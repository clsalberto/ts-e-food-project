import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">{children}</div>
      </div>
    </>
  )
}
