export type ProductCardProps = {
    title: string,
    subtitle?: string,
    imageSrc: string,
    size: {
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        custom?: string,
    }
}

function ProductCard(props: ProductCardProps) {
    const {title, subtitle, imageSrc, size}: ProductCardProps = props

  return (
    <div className={`h-[${(size.sm || size.md || size.lg || size.custom) ?? '570px'}] flex relative`}>
        <div>
            <h1 className="absolute bottom-50 left-50">{title}</h1>
            <h2 className="absolute bottom-50 left-50">{subtitle}</h2>
        </div>
           <img src={imageSrc} alt="" className='w-full h-full object-cover absolute bottom-0 left-0' />
    </div>
  )
}

export default ProductCard