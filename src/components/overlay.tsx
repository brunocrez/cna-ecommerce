interface IOverlayProps {
  isVisible: boolean
}

export function Overlay({ isVisible }: IOverlayProps) {
  return (
    <div
      className={`${
        isVisible
          ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-20'
          : ''
      }`}
    ></div>
  )
}
