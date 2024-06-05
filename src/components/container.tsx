interface IContainerProps {
  children: React.ReactNode
}

export function Container({ children }: IContainerProps) {
  return <div className="w-full max-w-[1536px] mx-auto">{children}</div>
}
