interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const SectionTitle = ({ title = "", subtitle, center = false, light = false, level = 2 }: SectionTitleProps) => {
  // Verificar se o título existe antes de tentar dividi-lo
  const words = title ? title.split(" ") : []
  const firstWord = words.length > 0 ? words[0] : ""
  const restOfTitle = words.length > 1 ? words.slice(1).join(" ") : ""

  const headingProps = {
    className: `text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-gray-800"}`,
    id: title.toLowerCase().replace(/\s+/g, "-"),
  }

  const headingContent = title && (
    <>
      <span className="!text-blue-600" style={{ color: "#2563eb" }}>
        {firstWord}
      </span>
      {restOfTitle && <span> {restOfTitle}</span>}
    </>
  )

  const renderHeading = () => {
    switch (level) {
      case 1:
        return <h1 {...headingProps}>{headingContent}</h1>
      case 2:
        return <h2 {...headingProps}>{headingContent}</h2>
      case 3:
        return <h3 {...headingProps}>{headingContent}</h3>
      case 4:
        return <h4 {...headingProps}>{headingContent}</h4>
      case 5:
        return <h5 {...headingProps}>{headingContent}</h5>
      case 6:
        return <h6 {...headingProps}>{headingContent}</h6>
      default:
        return <h2 {...headingProps}>{headingContent}</h2>
    }
  }

  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {renderHeading()}
      {subtitle && <p className={`text-lg ${light ? "text-white/80" : "text-gray-600"}`}>{subtitle}</p>}
      <div
        className={`h-1 w-20 !bg-blue-600 mt-4 ${center ? "mx-auto" : ""}`}
        style={{ backgroundColor: "#2563eb" }}
        role="presentation"
        aria-hidden="true"
      ></div>
    </div>
  )
}

export default SectionTitle
